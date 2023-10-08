import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';


const AwardsAndCertificates = ({ awards, data }) => {

  return (
    <>
      <div className="partner-section ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>{data.awards_title}</h2>
            <p>{data.awards_text}</p>
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
                slidesPerView: 4,
              },
              768: {
                slidesPerView: 5,
              },
              1200: {
                slidesPerView: 6,
              },
            }}
            className="partner-slides"
          >
            {awards.data.map(d => (
              <SwiperSlide>
                <div className="single-partner-item">
                  <a href={d.link} target="_blank" rel="noreferrer">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${d.image}`} alt="image" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
            {awards.data.map(d => (
              <SwiperSlide>
                <div className="single-partner-item">
                  <a href={d.link} target="_blank" rel="noreferrer">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${d.image}`} alt="image" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
            {awards.data.map(d => (
              <SwiperSlide>
                <div className="single-partner-item">
                  <a href={d.link} target="_blank" rel="noreferrer">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${d.image}`} alt="image" />
                  </a>
                </div>
              </SwiperSlide>
            ))}
            {awards.data.map(d => (
              <SwiperSlide>
                <div className="single-partner-item">
                  <a href={d.link} target="_blank" rel="noreferrer">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${d.image}`} alt="image" />
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

export default AwardsAndCertificates;