import React from "react";
import NavbarFour from "../../components/Layouts/NavbarFour";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";
import Footer from "../../components/Layouts/Footer";
import axios from "axios";
import { useRouter } from "next/router";

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
      {JSON.stringify(data.fullData)}

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  const { params } = context;
  const { id } = params;
  const { locale } = context;

  const data = (await axios.get(`http://0.0.0.0:8055/items/blog/${id}?fields=*.*.*`)).data

  console.log(locale)

  const translationData = data.data.translations.filter(d => d.languages_code.code == locale)[0]

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
}

export default BlogDetails;
