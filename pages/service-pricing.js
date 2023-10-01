import React, { useState, useEffect } from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import PageBanner from "../components/Common/PageBanner";
import Services from "../components/HomeTwo/Services";
import Footer from "../components/Layouts/Footer";
import { useRouter } from "next/router";
import axios from "axios";
import { useTranslation } from 'react-i18next';
import "dotenv/config";

const ServicesTwo = () => {

  const [pricingData, setPricingData] = useState(null)
  const [translatedData, setTranslatedData] = useState(null)

  const { locale } = useRouter();
  const { t } = useTranslation();

  const fetchData = async () => {
    try {
      const data = (await axios.get(`${process.env.CMS_ENDPOINT}/items/pricing?fields=*.*.*`)).data
      setPricingData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  useEffect(() => {
    if (pricingData != null) {
      const translationData = pricingData?.data?.translations?.filter(d => d.languages_code.code == locale)[0]
      setTranslatedData(translationData)
    }
  }, [pricingData])

  useEffect(() => {
    if (pricingData != null) {
      console.log(locale)
      const translationData = pricingData?.data?.translations?.filter(d => d.languages_code.code == locale)[0]
      setTranslatedData(translationData)
    }
  }, [locale])

  return (
    <>
      <NavbarFour />
      {t()}
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
