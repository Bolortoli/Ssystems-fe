import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';


const PartnerSlider = ({ partners, data }) => {

  return (
    <div className="container">
      <div className="partner-section ptb-110">
        <div className="container" style={{maxWidth: partners.data.length < 5 ? '30%' : '50%'}}>
          <div className="section-title">
            <h2 style={{fontWeight: 400, fontSize: 30}}>{data.partners_title}</h2>
          </div>

          <Swiper
            spaceBetween={30}
            modules={[Autoplay]}
            loop={true}
            speed={500}
            loopedSlides={true}
            draggable={false}
            autoplay={{
              delay: 1000,
            }}
            breakpoints={{
              0: {
                slidesPerView: 3,
              },
              576: {
                slidesPerView: partners.data.length < 4 ? partners.data.length : 4,
              },
              768: {
                slidesPerView: partners.data.length < 5 ? partners.data.length : 5,
              },
              1200: {
                slidesPerView: partners.data.length < 6 ? partners.data.length : 6,
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
            {partners.data.map(d => (
              <SwiperSlide>
                <div className="single-partner-item">
                  <a href={d.website_link} target="_blank" rel="noreferrer">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${d.logo}`} alt="image" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
            {partners.data.map(d => (
              <SwiperSlide>
                <div className="single-partner-item">
                  <a href={d.website_link} target="_blank" rel="noreferrer">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${d.logo}`} alt="image" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
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
      </div>
    </div>
  );
};

export default PartnerSlider;
