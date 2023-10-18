import React, { useState, useEffect } from "react";
import NavbarTwo from "../components/Layouts/NavbarTwo";
import NavbarFour from "../components/Layouts/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import AboutContact from "../components/About/AboutContent";
import Services from "../components/HomeOne/Services";
import Team from "../components/Common/Team";
import PartnerContent from "../components/Common/PartnerContent";
import FeedbackSlider from "../components/Common/FeedbackSlider";
import PricingCard from "../components/Common/PricingCard";
import FreeTrialForm from "../components/Common/FreeTrialForm";
import Footer from "../components/Layouts/Footer";
import { useRouter } from "next/router";
import axios from "axios"

const About = () => {

  const { locale } = useRouter();

  console.log(locale)
  const [aboutUsdata, setAboutUsData] = useState(null)

  const fetchData = async () => {
    try {
      const data = (await axios.get(`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/items/aboutus?fields=*.*.*`).catch(e => console.log(e)))?.data
      console.log(data)
      setAboutUsData(data)
    } catch (error) {
      console.log(error)
    }

  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <NavbarFour />

      {/* <PageBanner
        pageTitle="About Us"
        homePageUrl="/"
        homePageText="Home"
        activePageText="About Us"
        bgImgClass="item-bg1"
      /> */}

      <AboutContact data={aboutUsdata} />

      <Services />

      <Team />

      <PartnerContent />

      <FeedbackSlider />

      <PricingCard />

      <FreeTrialForm />

      <Footer />
    </>
  );
};

export default About;
