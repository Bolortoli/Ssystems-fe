import React, { useState, useEffect } from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import CareerGrid from "../components/Careers/CareerGrid";
import Footer from "../components/Layouts/Footer";
import axios from "axios"
import "dotenv/config";
import ContactFormContent from "../components/Careers/ContactFormContent";

const Blog = (props) => {

  return (
    <>
      <NavbarFour services={props.content.global_config.servicesTranslation} why={props.content.global_config.whyTranslation} />

      <CareerGrid data={props.content.translation} content={props.content.contentTranslation} />

      <ContactFormContent data={props.content.contentTranslation} image={props.content.image} />

      <Footer data={props.content.global_config} />

    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const { locale } = context;

    const responseCareers = await axios.get(
      `${process.env.CMS_ENDPOINT_LOCAL}/items/careers?fields=*.*.*&filter[status][_eq]=published`
    )

    const contentData = await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/careers_content?fields=*.*.*`)

    const global_config = await getGlobalConfigs(locale)

    if (!global_config) {
      return {
        notFound: true,
        props: {
          message: "error"
        }
      }
    }

    let translation = responseCareers.data.data.map(d => {
      let content = d.translations.find(trans => trans.languages_code.code == locale)

      return {
        id: d.id,
        created: d.date_created,
        content
      }
    })

    const contentTranslation = contentData?.data?.data.translations?.find(d => d.languages_code.code == locale)


    return {
      props: {
        message: "success",
        content: {
          global_config,
          translation,
          contentTranslation,
          image: contentData.data.data.image.id,
        }
      }
    }
  } catch (error) {
    return {
      notFound: true,
      props: {
        message: "error"
      }
    };
  }
}


async function getGlobalConfigs(locale) {
  try {

    const data = (await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/global_config?fields=*.*`).catch(e => console.log(e))).data
    const services = await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/solutions_card?fields=*.*`)
    const whySsystems = await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/why_ssystems?fields=*.*`)

    const translationData = data?.data?.translations?.find(d => d.languages_code == locale)

    const servicesTranslation = services.data.data.map(service => {
      let translate = service.translations.find(t => t.languages_code == locale)

      return {
        id: service.id,
        title: translate.title
      }
    })

    const whyTranslation = whySsystems.data.data.map(why => {
      let translate = why.translations.find(t => t.languages_code == locale)

      return {
        id: why.id,
        title: translate.title
      }
    })

    return {
      date_created: data.data.date_created,
      facebook_link: data.data.facebook_link,
      youtube_link: data.data.youtube_link,
      email: data.data.email,
      phone: data.data.phone,
      footer_text: translationData.footer_text,
      address: translationData.address,
      languages_code: translationData.languages_code,
      servicesTranslation,
      whyTranslation
    };
  } catch (error) {
    return null
  }
}

export default Blog;
