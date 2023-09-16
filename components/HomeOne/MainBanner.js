import React  from "react";
import Link from "next/link";
import FeaturedServices from "./FeaturedServices";
import { useRouter } from "next/router";

const MainBanner = ({ data }) => {
  if (data == undefined || data == null) {
    return <>Loading...</>
  }

 
  const { locale } = useRouter();

  const translationData = data.data.translations.filter(d => d.languages_code.code == locale)[0]


  console.log(translationData)
  return (
    <>
      <div className="main-banner" style={{ backgroundImage: `url(http://localhost:8055/assets/${data.data.hero_image.id  })` }}>
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {translationData.hero_heading}
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  {translationData.hero_description}
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link href={String(data.hero_button_link)} className="btn btn-primary">
                    {translationData.hero_button_text}
                  </Link>

                  {/* <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Featured Services */}
        <FeaturedServices />
      </div>
    </>
  );
};

export default MainBanner;
