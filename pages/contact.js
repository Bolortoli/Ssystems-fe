import React from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import ContactFormContent from "../components/Contact/ContactFormContent";
import Footer from "../components/Layouts/Footer";
import axios from "axios"
import "dotenv/config";

const Contact = (props) => {
  return (
    <>
      <NavbarFour />

      {/* <PageBanner
        pageTitle="Contact"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Contact"
        bgImgClass="item-bg3"
      /> */}

      <ContactFormContent data={props.content} />

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {

  const { locale } = context;

  const response = await axios.get(
    `${process.env.CMS_ENDPOINT_LOCAL}/items/contact?fields=*.*.*.*`
  )

  if (!response) {
    return {
      props: {
        message: "error"
      }
    }
  }

  let translation = response.data.data.translations.filter(t => t.languages_code.code == locale)[0]

  return {
    props: {
      message: "success",
      content: {
        translation,
        image: response.data.data.image.id
      }
    }
  }

}

export default Contact;
