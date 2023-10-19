import React, { useEffect, useState } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import MainBanner from "../components/HomeOne/MainBanner";
import About from "../components/HomeOne/About";
import Services from "../components/HomeOne/Services";
import Webinar from "../components/HomeOne/Webinar";
import PartnerContent from "../components/Common/PartnerContent";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import PricingCard from "../components/Common/PricingCard";
import BlogPost from "../components/Common/BlogPost";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Layouts/Footer";
import ContactFormContent from "../components/HomeOne/ContactFormContent";
import AwardsAndCertificates from "../components/HomeOne/AwardsAndCertificates";
import axios from "axios";
import PartnerSlider from "../components/HomeOne/PartnerSlider";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

// import { useRouter } from "next/router";
import "dotenv/config";
import FunFacts from "../components/HomeOne/FunFacts";

const Index = (props) => {

  return (
    <>
      <NavbarTwo services={props.content.global_config.servicesTranslation} why={props.content.global_config.whyTranslation} />
      <MainBanner data={props.content.translation_data} />
      <FunFacts data={props.content.translation_data} />
      <About data={props.content.translation_data} />
      <PartnerSlider partners={props.content.partners} data={props.content.translation_data} />
      <Services cardsData={props.content.solution_cards} data={props.content.translation_data} />
      <Webinar data={props.content.translation_data} />
      <AwardsAndCertificates awards={props.content.awards} data={props.content.translation_data} />
      <FeedbackSlider data={props.content.translation_data} />
      <BlogPost data={props.content.translation_data} blogs={props.content.blogs} />
      <ContactFormContent data={props.content.translation_data} />
      <Footer data={props.content.global_config} />

    </>
  );
};

export async function getServerSideProps(context) {

  try {
    const { locale } = context;

    const global_config = await getGlobalConfigs(locale)

    if (!global_config) return {
      notFound: true,
      props: {
        message: "error"
      }
    };
    
    const responseHome = await axios.get(
      `${process.env.CMS_ENDPOINT_LOCAL}/items/home_content?fields=*.*.*.*`
    )

    const responsePartners = await axios.get(
      `${process.env.CMS_ENDPOINT_LOCAL}/items/partners`
    )

    const responseAwards = await axios.get(
      `${process.env.CMS_ENDPOINT_LOCAL}/items/awards`
    )

    const responseBLogs = await axios.get(
      `${process.env.CMS_ENDPOINT_LOCAL}/items/blog?fields=*.*.*.*&filter[featured_on_home][_eq]=true&limit=3`
    )

    if (!responseHome || !responsePartners) return {
      notFound: true,
      props: {
        message: "error"
      }
    };

    const data = responseHome.data;

    const translation_data = data?.data?.translations?.find(
      (d) => d.languages_code.code === locale
    );

    const solution_cards = []

    data.data.solution_cards.forEach(card => {
      solution_cards.push({ ...card.solutions_card_id.translations.find(translation => translation.languages_code == locale), icon: card.solutions_card_id.icon.id })
    })

    let blog_translation = responseBLogs.data.data.map(d => {
      let categories = d.category.map(cat => {
        let categoryTranslation = cat.blog_category_id.translations.find(trans => trans.languages_code == locale)
        // let categoryTranslation = cat.blog_category_id.translations.find(trans => trans.languages_code == locale)

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

    return {
      props: {
        content: {
          translation_data,
          global_config,
          solution_cards,
          partners: responsePartners.data,
          awards: responseAwards.data,
          blogs: blog_translation
        },
        message: "success",
        ...(await serverSideTranslations(locale, ['common']))
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      notFound: true,
      props: {
        message: JSON.stringify(error)
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

export default Index;
