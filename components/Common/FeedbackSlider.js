import React, { useEffect, useState } from "react";
// import { Swiper, SwiperSlide } from "swiper/react";
// import { Navigation, Autoplay } from "swiper";

const FeedbackSlider = ({ data }) => {
  if (data == undefined || data == null) {
    return <>Loading...</>;
  }

  // let [cards, setCards] = useState([]);

  // const produceCardsData = () => {
  //   const cardsData = data.data.FeedbackSlider_card.map((card) => {
  //     const imageCard = card.FeedbackSlider_card_id.section6_image.id
  //     return {
  //       text: translatedCard.section6_text,
  //       name: translatedCard.section6_name,
  //       job: translatedCard.section6_job,
  //       image: imageCard,
  //     };
  //   });
  //   setCards(cardsData);
  // };

  // useEffect(() => {
  //   produceCardsData();
  // }, []);

  return (
    <>
      <div className="feedback-area">
        <div className="container-flauid p-0">
          {/* <Swiper
            navigation={true}
            autoplay={{
              delay: 6000,
              disableOnInteraction: true,
              pauseOnMouseEnter: true,
            }}
            modules={[Navigation, Autoplay]}
            className="feedback-slides"
          >
            {cards.map((card) => (
              <SwiperSlide>
                <div className="row m-0">
                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="feedback-item">
                      <p>{card.text}</p>

                      <div className="client-info">
                        <div className="client-pic">
                          <img style={{backgroundImage: `url(http://localhost:8055/assets/${card.image})`}} alt="image" />
                        </div>

                        <h3>{card.name}</h3>
                        <span>{card.job}</span>
                      </div>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-12 p-0">
                    <div className="client-image bg1">
                      <img style={{backgroundImage: `url(http://localhost:8055/assets/${card.image})`}} alt="image" />
                    </div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper> */}
        </div>
      </div>
    </>
  );
};

export default FeedbackSlider;
