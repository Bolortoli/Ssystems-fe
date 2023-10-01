import React, { useState, useEffect } from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import Footer from "../components/Layouts/Footer";
import axios from "axios"
import "dotenv/config";

const Blog = () => {

  const [blogData, setBlogData] = useState(null)

  const fetchData = async () => {
    const data = (await axios.get(`${process.env.CMS_ENDPOINT}/items/blog?fields=*.*.*.*`).catch(e => console.log(e))).data
    setBlogData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <NavbarFour />

      {/* <PageBanner
        pageTitle="Blog Grid"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Blog Grid"
        bgImgClass="item-bg2"
      /> */}

      <BlogThreeGrid data={blogData} />

      <Footer />
    </>
  );
};

export default Blog;
