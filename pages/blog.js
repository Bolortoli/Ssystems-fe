import React, { useState, useEffect } from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import Footer from "../components/Layouts/Footer";
import axios from "axios"
import "dotenv/config";

const Blog = (props) => {

  console.log(props.content)

  return (
    <>
      <NavbarFour />

      <BlogThreeGrid data={props.content.blogs} />

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {

  const { locale } = context;

  const responseBlog = await axios.get(
    `${process.env.CMS_ENDPOINT_LOCAL}/items/blog?fields=*.*.*.*`
  )

  if (!responseBlog) {
    return {
      props: {
        message: "error"
      }
    }
  }

  let translation = responseBlog.data.data.map(d => {
    let categories = d.category.map(cat => {
      let categoryTranslation = cat.blog_category_id.translations.find(trans => trans.languages_code == locale)

      return {
        id: cat.id,
        name: categoryTranslation.name,
        short_description: categoryTranslation.short_description,
        icon: cat.blog_category_id.icon
      }
    })
    let content = d.translations.find(trans => trans.languages_code.code == locale)

    return {
      id: d.id,
      categories,
      cover_image: d?.cover_image?.id,
      content
    }
  })
  console.log(translation)

  return {
    props: {
      message: "success",
      content: {
        blogs: translation
      }
    }
  }
  
}

export default Blog;
