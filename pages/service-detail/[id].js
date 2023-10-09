import React from "react";
import NavbarTwo from "../../components/Layouts/NavbarTwo";
import Footer from "../../components/Layouts/Footer";
import PageBanner from "../../components/Common/PageBanner";
import ServiceDetailsContent from "../../components/ServiceDetails/ServiceDetailsContent";
import axios from "axios";

const ProjectsDetails = (props) => {
  return (
    <>
      <NavbarTwo />


      <PageBanner
        bgImgClass="item-bg2"
        data={props.data.translationData}
        coverImage={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${props.data.cover_image}`}
      />

      <ServiceDetailsContent data={props.data.translationData} />

      <Footer />
    </>
  );
};

export async function getServerSideProps(context) {

  try {
    const { params } = context;
    const { id } = params;
    const { locale } = context;

    const global_config = await getGlobalConfigs(locale)

    if (!global_config) return {
      props: {
        message: "error"
      }
    };

    const data = (await axios.get(`${process.env.CMS_ENDPOINT_LOCAL}/items/solutions_card/${id}?fields=*.*.*`).catch(e => console.log(e))).data

    const translationData = data?.data?.translations?.filter(d => d.languages_code.code == locale)[0]

    return {
      props: {
        data: {
          translationData,
          id: data.data.id,
          cover_image: data.data.cover_image.id,
          global_config,
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

export default ProjectsDetails;
