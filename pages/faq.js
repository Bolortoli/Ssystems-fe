import React from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import FaqContent from "../components/Faq/FaqContent";
import Footer from "../components/Layouts/Footer";
import axios from "axios";

const Faq = (props) => {

  return (
    <>
      <NavbarFour services={props.content.global_config.servicesTranslation} why={props.content.global_config.whyTranslation} />

      {/* <PageBanner
        pageTitle="Frequently Asked Questions"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Faq"
        bgImgClass="item-bg1"
      /> */}

      <FaqContent faq={props.content.faqs} content={props.content.translationContent} image={props.content.image} contact={props.content.translationContact} contactImage={props.content.contactImage} />

      <Footer data={props.content.global_config} />

    </>
  );
};

export async function getServerSideProps(context) {
  const { locale } = context;

  const global_config = await getGlobalConfigs(locale)

  if (!global_config) return {
    props: {
      message: "error"
    }
  };

  const responseFaq = await axios.get(
    `${process.env.CMS_ENDPOINT_LOCAL}/items/faq?fields=*.*.*`
  )

  const responseFaqContent = await axios.get(
    `${process.env.CMS_ENDPOINT_LOCAL}/items/faq_content?fields=*.*.*`
  )

  const responseContact = await axios.get(
    `${process.env.CMS_ENDPOINT_LOCAL}/items/contact?fields=*.*.*.*`
  )


  if (!responseFaq) {
    return {
      props: {
        message: "error"
      }
    }
  }
  let translationContact = responseContact.data.data.translations.find(t => t.languages_code.code == locale)

  let translationContent = responseFaqContent.data.data.translations.find(t => t.languages_code.code == locale)

  let translationFaq = responseFaq.data.data.map(d => {
    let content = d.translations.find(trans => trans.languages_code.code == locale)

    return {
      id: d.id,
      question: content.question,
      answer: content.answer
    }
  })

  return {
    props: {
      message: "success",
      content: {
        faqs: translationFaq,
        global_config,
        translationContent,
        image: responseFaqContent.data.data.image.id,
        translationContact,
        contactImage: responseContact.data.data.image.id
      }
    }
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

export default Faq;
