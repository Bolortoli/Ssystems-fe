import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/ServiceDetails/ServiceDetailsContent";
import axios from "axios";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const ProjectsDetails = (props) => {
  
  return (
    <>
      <NavbarTwo services={props.content.global_config.servicesTranslation} why={props.content.global_config.whyTranslation} />


      <PageBanner
        bgImgClass="item-bg2"
        data={props.content.translationData}
        coverImage={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${props.content.cover_image}`}
      />

      <ServiceDetailsContent data={props.content.translationData} />

      <Footer data={props.content.global_config} />

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
      notFound: true,
      props: {
        message: "error"
      }
    };

    const data = (await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/why_ssystems/${id}?fields=*.*.*`).catch(e => console.log(e))).data

    const translationData = data?.data?.translations?.filter(d => d.languages_code.code == locale)[0]

    return {
      props: {
        content: {
          translationData,
          id: data.data.id,
          cover_image: data.data.cover_image.id,
          global_config,
        },
        ...(await serverSideTranslations(locale, ['common']))
      }
    };
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

export default ProjectsDetails;
