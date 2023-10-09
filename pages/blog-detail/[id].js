import React from "react";
import NavbarFour from "../../components/Layouts/NavbarFour";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";
import Footer from "../../components/Layouts/Footer";
import axios from "axios";
import { useRouter } from "next/router";
import "dotenv/config";

const BlogDetails = ({ data }) => {

  return (
    <>
      <NavbarFour />

      {/* <PageBanner
        pageTitle="Blog Details"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Details"
        bgImgClass="item-bg3"
      /> */}

      <BlogDetailsContent data={data} />

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {

  try {
    const { params } = context;
    const { id } = params;
    const { locale } = context;

    const global_config = await getGlobalConfigs(locale)

    if (!global_config) return {
      props: {
        message: "error"
      }
    };

    const data = (await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/blog/${id}?fields=*.*.*.*`).catch(e => console.log(e))).data

    const blogs = (await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/blog?fields=*.*`).catch(e => console.log(e))).data

    let related_blogs = [blogs.data[Math.floor((Math.random()*blogs.data.length))], blogs.data[Math.floor((Math.random()*blogs.data.length))]]

    related_blogs = related_blogs.map(blog => {
      let translation = blog.translations.filter(d => d.languages_code == locale)[0]

      return {
        id: blog.id,
        title: translation.title
      }
    })

    const translationData = data?.data?.translations?.filter(d => d.languages_code.code == locale)[0]

    const categories = data.data.category.map(c => {
      let categoryTranslation = c.blog_category_id.translations.find(trans => trans.languages_code == locale)

      return {
        id: c.id,
        name: categoryTranslation.name,
      }
    })

    return {
      props: {
        data: {
          translationData,
          id: data.data.id,
          cover_image: data.data.cover_image.id,
          date_created: data.data.date_created,
          global_config,
          related_blogs,
          categories
        }
      }
    };
  } catch (error) {
    return {
      props: {
        message: "error"
      }
    };
  }

}

async function getGlobalConfigs(locale) {
  try {

    const data = (await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/global_config?fields=*.*`).catch(e => console.log(e))).data

    const translationData = data?.data?.translations?.filter(d => d.languages_code == locale)[0]

    return {
      date_created: data.data.date_created,
      facebook_link: data.data.facebook_link,
      youtube_link: data.data.youtube_link,
      email: data.data.email,
      phone: data.data.phone,
      footer_text: translationData.footer_text,
      address: translationData.address,
      languages_code: translationData.languages_code
    };
  } catch (error) {
    return null
  }
}

export default BlogDetails;
