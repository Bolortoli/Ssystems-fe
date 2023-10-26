import React, { useState, useEffect } from "react";
import NavbarFour from "../components/Layouts/NavbarFour";
import BlogThreeGrid from "../components/Blog/BlogThreeGrid";
import Footer from "../components/Layouts/Footer";
import axios from "axios"
import "dotenv/config";
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Blog = (props) => {

  return (
    <>
      <NavbarFour services={props.content.global_config.servicesTranslation} why={props.content.global_config.whyTranslation} />

      <BlogThreeGrid data={props.content.blogs} />

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

    const responseBlog = await axios.get(
      `${process.env.CMS_ENDPOINT_LOCAL}/items/blog?fields=*.*.*.*&filter[status][_eq]=published`
    )

    if (!responseBlog) {
      return {
        notFound: true,
        props: {
          message: "error"
        }
      }
    }

    let translation = responseBlog.data.data.map(d => {
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
        message: "success",
        content: {
          global_config,
          blogs: translation
        },
        ...(await serverSideTranslations(locale, ['common']))
      }
    }

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

export default Blog;
