import React, { useEffect, useState } from "react";
import Link from "next/link";

const Services = ({ data }) => {
  if (data == undefined || data == null) {
    return <>Loading...</>;
  }
  let [cards, setCards] = useState([]);

  const produceCardsData = () => {
    const cardsData = data[0].data.solution_cards.map((card) => {
      return {
        title: card.title,
        description: card.description,
        icon: card.icon,
      };
    });
    setCards(cardsData);
  };

  useEffect(() => {
    produceCardsData();
  }, []);

  return (
    <>
      <section className="services-area bg-f2f6f9 ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>{data[1].section3_title}</h2>
            <p>{data[1].section3_text}</p>
          </div>

          {cards.map((card) => (
            <div className="row justify-content-center">
              <div
                className="col-lg-4 col-sm-6"
                data-aos="fade-in"
                data-aos-duration="1200"
                data-aos-delay="100"
              >
                <div className="single-services-box">
                  <div className="icon">
                    <i className="flaticon-income"></i>
                  </div>

                  <h3>
                    <Link href="/service-details">{card.title}</Link>
                  </h3>
                  <p>{card.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default Services;
