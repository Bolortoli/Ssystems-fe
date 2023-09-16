import React, { useState, useEffect } from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import Footer from "../components/Layouts/Footer";
import axios from "axios"

const Blog = () => {

  const [blogData, setBlogData] = useState(null)

  const fetchData = async () => {
    const data = (await axios.get(`http://0.0.0.0:8055/items/blog?fields=*.*.*`)).data
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
