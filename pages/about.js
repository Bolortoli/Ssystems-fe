import React from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import AboutUsContent from "../components/AboutTwo/AboutUsContent";
import ProfessionalSolutions from "../components/HomeFive/ProfessionalSolutions";
import PartnerSlider from "../components/AboutTwo/PartnerSlider";
import CustomerFeedback from "../components/HomeFive/CustomerFeedback";
import Team from "../components/Common/Team";
import Footer from "../components/Layouts/Footer";
import axios from "axios";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const AboutTwo = (props) => {


  return (
    <>
      <NavbarFour services={props.content.global_config.servicesTranslation} why={props.content.global_config.whyTranslation} />

      <AboutUsContent data={props.content.translationData} image={props.content.aboutImage} />

      <ProfessionalSolutions data={props.content.translationData} solutions={props.content.solutions} image={props.content.serviceImage} />

      {/* <Team data={props.content.translationData} members={props.content.teamMembers}/> */}

      <PartnerSlider data={props.content.translationData} partners={props.content.partners} />

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

    const data = (await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/about_us?fields=*.*.*`).catch(e => console.log(e))).data

    const responsePartners = await axios.get(
      `${process.env.CMS_ENDPOINT_LOCAL}/items/partners`
    )

    const responseSolutionCards = await axios.get(
      `${process.env.CMS_ENDPOINT_LOCAL}/items/solutions_card?fields=*.*.*`
    )

    const responseTeamMember = await axios.get(
      `${process.env.CMS_ENDPOINT_LOCAL}/items/team_member?fields=*.*.*`
    )

    const translationData = data?.data?.translations?.find(d => d.languages_code.code == locale)

    const solution_cards = []

    responseSolutionCards.data.data.forEach(card => {
      solution_cards.push({...card.translations.find(translation => translation.languages_code.code == locale), id: card.id})
    })

    const team_members = []

    responseTeamMember.data.data.forEach(card => {
      team_members.push({...card.translations.find(translation => translation.languages_code.code == locale), image: card.image.id, social: card.social_link})
    })

    return {
      props: {
        content: {
          translationData,
          global_config,
          partners: responsePartners.data,
          solutions: solution_cards,
          aboutImage: data.data.section1_image.id,
          serviceImage: data.data.services_background_image.id,
          teamMembers: team_members
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
    const services = await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/solutions_card?fields=*.*&filter[status][_eq]=published`)
    const whySsystems = await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/why_ssystems?fields=*.*&filter[status][_eq]=published`)

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

export default AboutTwo;
