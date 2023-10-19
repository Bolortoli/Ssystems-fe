import React from "react";
import NavbarFour from "../../components/Layouts/NavbarFour";
import CareerDetailsContent from "../../components/Careers/CareerDetailsContent";
import Footer from "../../components/Layouts/Footer";
import axios from "axios";
import "dotenv/config";

const CareerDetails = (props) => {

  return (
    <>
      <NavbarFour services={props.content.global_config.servicesTranslation} why={props.content.global_config.whyTranslation} />

      <CareerDetailsContent data={props.content} />

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
      props: {
        message: "error"
      }
    };

    const data = (await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/careers/${id}?fields=*.*.*`).catch(e => console.log(e))).data

    const translationData = data?.data?.translations?.find(d => d.languages_code.code == locale)


    return {
      props: {
        content: {
          translationData,
          id: data.data.id,
          date_created: data.data.date_created,
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

export default CareerDetails;
