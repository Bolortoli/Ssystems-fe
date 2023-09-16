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
import axios from "axios"
import { useRouter } from "next/router";
import 'dotenv/config'

const Index = () => {

  const { locale } = useRouter();

  console.log(locale)
  const [homeData, setHomeData] = useState(null)

  const fetchData = async () => {
    const data = (await axios.get(`http://0.0.0.0:8055/items/home_content?fields=*.*.*.*`)).data
    console.log(data)
    setHomeData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <>
      <Navbar />

      <MainBanner data={homeData} />

      <About data={homeData}/>

      <Services data={homeData} />

      <Webinar />

      <PartnerContent />

      <FeedbackSlider />

      <PricingCard />

      <BlogPost />

      <FreeTrialForm />

      <Footer />
    </>
  );
};

export default Index;
