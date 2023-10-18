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
import AboutContact from "../components/AboutTwo/AboutContent"

const AboutTwo = (props) => {

  console.log(props.content)

  return (
    <>
      <NavbarFour />

      {/* <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImgClass="item-bg2"
      /> */}

      <AboutUsContent data={props.content.translationData} image={props.content.aboutImage} />

      {/* <AboutContact data={props.content.translationData} /> */}

      <ProfessionalSolutions data={props.content.translationData} solutions={props.content.solutions} image={props.content.serviceImage} />

      <Team data={props.content.translationData} members={props.content.teamMembers}/>

      <PartnerSlider data={props.content.translationData} partners={props.content.partners} />

      {/* <CustomerFeedback data={props.content.translationData} /> */}

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
      solution_cards.push({...card.translations.find(translation => translation.languages_code.code == locale), icon: card.icon.id})
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

export default AboutTwo;
