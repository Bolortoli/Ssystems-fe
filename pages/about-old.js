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

  return (
    <>
      <NavbarFour />

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
