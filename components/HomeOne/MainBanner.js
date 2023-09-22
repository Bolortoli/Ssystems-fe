import React from "react";
import Link from "next/link";
import FeaturedServices from "./FeaturedServices";

const MainBanner = ({ data }) => {
  if (!data || data.length === 0) {
    return <>Loading...</>;
  }

  return (
    <>
      <div
        className="main-banner"
        style={{
          backgroundImage: `url(http://localhost:8055/assets/${data[1].home_content_id.hero_image})`,
        }}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="container-fluid">
              <div className="main-banner-content">
                <h1
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="100"
                >
                  {data[1].hero_heading}
                </h1>

                <p
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="200"
                >
                  {data[1].hero_description}
                </p>

                <div
                  className="btn-box"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                  data-aos-delay="300"
                >
                  <Link href="/contact" className="btn btn-primary">
                    {data[1].hero_button_text}
                  </Link>

                  <Link href="/contact" className="optional-btn">
                    Get Started Free
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <FeaturedServices />
      </div>
    </>
  );
};

export default MainBanner;
