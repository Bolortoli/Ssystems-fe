import React from "react";
import NavbarFour from "../../components/Layouts/NavbarFour";
import PageBanner from "../../components/Common/PageBanner";
import BlogDetailsContent from "../../components/Blog/BlogDetailsContent";
import Footer from "../../components/Layouts/Footer";

const BlogDetails = () => {
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

      <BlogDetailsContent />

      <Footer />
    </>
  );
};

export default BlogDetails;
