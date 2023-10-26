import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';


const AwardsAndCertificates = ({ awards, data }) => {

  return (
    <>
      <div className="partner-section" style={{paddingBottom: 0}}>
        <div className="container" style={{maxWidth: '50%'}}>
          <div className="section-title">
            <h2 style={{fontWeight: 400, fontSize: 30}}>{data.awards_title}</h2>
            {/* <p>{data.awards_text}</p> */}
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
      </div>
    </>
  );
};

export default AwardsAndCertificates;
