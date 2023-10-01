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
import axios from "axios";
// import { useRouter } from "next/router";
import "dotenv/config";

const Index = ({ data }) => {
  return (
    <>
      <Navbar />
      <MainBanner data={data} />
      {/* <About data={data} /> */}
      <Services data={data} />
      <Webinar data={data} />
      <PartnerContent data={data} />
      <FeedbackSlider data={data} />
      <PricingCard data={data} />
      <BlogPost />
      <FreeTrialForm data={data} />
      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {
  try {
    const { locale } = context;

    const response = await axios.get(
      `${process.env.CMS_ENDPOINT}/items/home_content?fields=*.*.*.*`
    ).catch((e) => {
      
    })

    if (!response) return {
      props: {
        message: "error"
      }
    };

    const data = response.data;

    const translationData = data?.data?.translations?.find(
      (d) => d.languages_code.code === locale
    );

    return {
      props: {
        data: [data, translationData],
        message: "success"
      },
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        message: "error"
      }
    }
  }
}

export default Index;
