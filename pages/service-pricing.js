import React, { useState, useEffect } from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import Services from "../components/HomeTwo/Services";
import Footer from "../components/Layouts/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import "dotenv/config";

const ServicesTwo = (props) => {

  return (
    <>
      <NavbarFour />
      {/* <PageBanner
        pageTitle="Services Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Two"
        bgImgClass="item-bg2"
      /> */}

      <Services data={props.data.translationData} />

      <Footer />
    </>
  );
};


export async function getServerSideProps(context) {

  try {
    const { locale } = context;

    const global_config = await getGlobalConfigs(locale)

    if (!global_config) return {
      props: {
        message: "error"
      }
    };

    const data = (await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/pricing?fields=*.*.*`).catch(e => console.log(e))).data

    const translationData = data?.data?.translations?.filter(d => d.languages_code.code == locale)[0]

    return {
      props: {
        data: {
          translationData,
          global_config,
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

export default ServicesTwo;
