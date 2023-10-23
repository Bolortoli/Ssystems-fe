import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const Services = ({ cardsData, data }) => {
  const { t } = useTranslation();

  return (
    <>
      <div className="main-services-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2 style={{fontWeight: 400, fontSize: 30}}>{data.section3_title}</h2>
            <p>{data.section3_text}</p>
          </div>
          <div className="row justify-content-center">
            {cardsData.map((card) => (
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className="single-main-services-box">
                  {/* <div className="icon">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${card.icon}`} alt="image" style={{ width: 50, height: 50 }} />
                    <i className="flaticon-robot-1"></i>
                  </div> */}
                  <h3 style={{fontWeight: 400, fontSize: 23}}>
                    <Link href={`/service-detail/${card.id}`}>
                      {card.title}
                    </Link>
                  </h3>
                  <p>
                    {card.description}
                  </p>

                  <Link href={`/service-detail/${card.id}`} className="link-btn">
                    {t('utils.readMore')}
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
