import React, { useEffect, useState } from "react";
import Navbar from "../components/Layouts/Navbar";
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
import axios from "axios";
// import { useRouter } from "next/router";
import "dotenv/config";

const Index = (props) => {

  // console.log(props)

  return (
    <>
      <Navbar />
      <MainBanner data={props.content.translation_data} />
      <About data={props.content.translation_data} />
      <Services cardsData={props.content.solution_cards} data={props.content.translation_data} />
      <Webinar data={props.content.translation_data} />
      <PartnerContent partners={props.content.partners} data={props.content.translation_data} />
      <FeedbackSlider data={props.content.translation_data} />
      <BlogPost data={props.content.translation_data} blogs={props.content.blogs} />
      <ContactFormContent data={props.content.translation_data} />

      {/* <FreeTrialForm data={props.content.translation_data} /> */}
      <Footer />
      {/* <PricingCard data={props.content.translation_data} /> */}
    </>
  );
};

export async function getServerSideProps(context) {
  // try {
  const { locale } = context;

  const responseHome = await axios.get(
    `${process.env.CMS_ENDPOINT_LOCAL}/items/home_content?fields=*.*.*.*`
  )

  const responsePartners = await axios.get(
    `${process.env.CMS_ENDPOINT_LOCAL}/items/partners`
  )

  const responseBLogs = await axios.get(
    `${process.env.CMS_ENDPOINT_LOCAL}/items/blog?fields=*.*.*.*&filter[featured_on_home][_eq]=true&limit=3`
  )

  if (!responseHome || !responsePartners) return {
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
    solution_cards.push(card.solutions_card_id.translations.find(translation => translation.languages_code == locale))
  })

  let blog_translation = responseBLogs.data.data.map(d => {
    let categories = d.category.map(cat => {
      let categoryTranslation = cat.blog_category_id.translations.find(trans => trans.languages_code == locale)

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
        solution_cards,
        partners: responsePartners.data,
        blogs: blog_translation
      },
      message: "success"
    },
  };
  // } catch (error) {
  //   console.error("Error fetching data:", error);
  //   return {
  //     props: {
  //       message: JSON.stringify(error)
  //     }
  //   }
  // }
}

export default Index;
