import React from "react";
import Link from "next/link";
import FeaturedServices from "./FeaturedServices";
import FunFacts from "./FunFacts";

const MainBanner = ({ data }) => {
  if (!data || data.length === 0) {
    return <>Loading...</>;
  }

  return (
    <>
      <div
        className="main-banner"
        style={{
          height: '600px',
          backgroundImage: `url(${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${data.home_content_id.hero_image.id})`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid" style={{ marginTop: '100px' }}>
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="120"
                  data-aos-delay="100"
                >
                  {data.hero_heading}
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="120"
                  data-aos-delay="200"
                >
                  {data.hero_description}
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="120"
                  data-aos-delay="300"
                >
                  <Link href="/contact" className="btn btn-primary">
                    {data.hero_button_text}
                  </Link>

                  {/* <Link href="/contact" className="optional-btn">
                    {data.hero_button_text}
                  </Link> */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <FeaturedServices /> */}
      </div>
    </>
  );
};

export default MainBanner;
