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

    const data = (await axios.get(`${process.env.CMS_ENDPOINT}/items/blog/${id}?fields=*.*.*`).catch(e => console.log(e))).data

    console.log(locale)

    const translationData = data?.data?.translations?.filter(d => d.languages_code.code == locale)[0]

    return {
      props: {
        data: {
          translationData,
          id: data.data.id,
          cover_image: data.data.cover_image.id,
          fullData: data.data,
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

export default BlogDetails;
