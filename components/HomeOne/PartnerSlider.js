import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

const PartnerSlider = ({ partners, data }) => {
  return (
    <>
      <div className="partner-section ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>{data.section5_title}</h2>
          </div>

          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            className="partner-slides"
          >
            {partners.data.map(d => (
              <SwiperSlide>
                <div className="single-partner-item">
                  <a href={d.website_link} target="_blank" rel="noreferrer">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${d.logo}`} alt="image" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="container">
          <div className="section-title">
            <h2>{data.section5_title}</h2>
          </div>

          <Swiper
            spaceBetween={30}
            breakpoints={{
              0: {
                slidesPerView: 2,
              },
              576: {
                slidesPerView: 3,
              },
              768: {
                slidesPerView: 4,
              },
              1200: {
                slidesPerView: 5,
              },
            }}
            className="partner-slides"
          >
            {partners.data.map(d => (
              <SwiperSlide>
                <div className="single-partner-item">
                  <a href={d.website_link} target="_blank" rel="noreferrer">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${d.logo}`} alt="image" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
      </div>
    </>
  );
};

export default PartnerSlider;
