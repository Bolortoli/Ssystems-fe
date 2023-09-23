import React, { useState, useEffect } from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import Services from "../components/HomeTwo/Services";
import Footer from "../components/Layouts/Footer";
import { useRouter } from "next/router";
import axios from "axios";

const ServicesTwo = () => {

  const [pricingData, setPricingData] = useState(null)
  const [translatedData, setTranslatedData] = useState(null)

  const { locale } = useRouter();

  const fetchData = async () => {
    const data = (await axios.get(`http://0.0.0.0:8055/items/pricing?fields=*.*.*`)).data
    setPricingData(data)
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (pricingData != null) {
      const translationData = pricingData.data.translations.filter(d => d.languages_code.code == locale)[0]
      setTranslatedData(translationData)
    }
  }, [pricingData])

  useEffect(() => {
    if (pricingData != null) {
      console.log(locale)
      const translationData = pricingData.data.translations.filter(d => d.languages_code.code == locale)[0]
      setTranslatedData(translationData)
    }
  }, [locale])

  return (
    <>
      <NavbarFour />

      {/* <PageBanner
        pageTitle="Services Two"
        homePageUrl="/"
        homePageText="Home"
        activePageText="Services Two"
        bgImgClass="item-bg2"
      /> */}

      {translatedData != null ? <Services data={translatedData} /> : <></>}

      <Footer />
    </>
  );
};

export default ServicesTwo;
