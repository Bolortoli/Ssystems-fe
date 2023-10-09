import React, { useEffect, useState } from "react";
import Link from "next/link";

const Services = ({ cardsData, data }) => {

  console.log(cardsData)

  if (cardsData == undefined || cardsData == null) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="main-services-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>{data.section3_title}</h2>
            <p>{data.section3_text}</p>
          </div>
          <div className="row justify-content-center">
            {cardsData.map((card) => (
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-main-services-box">
                  <div className="icon">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${card.icon}`} alt="image" style={{ width: 50, height: 50 }} />
                    {/* <i className="flaticon-robot-1"></i> */}
                  </div>
                  <h3>
                    <Link href={`/service-detail/${card.id}`}>
                      {card.title}
                    </Link>
                  </h3>
                  <p>
                    {card.description}
                  </p>

                  <Link href={`/service-detail/${card.id}`} className="link-btn">
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
