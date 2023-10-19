import React, { Component, useEffect, useState } from "react";
import Link from "next/link";
import "dotenv/config";
import { useTranslation } from 'next-i18next';

const CareerGrid = ({ data, content }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">

          <div className="section-title">
            <h2>{content.title}</h2>
            <p>
              {content.description}
            </p>
          </div>
          <div className="row">

            {data.map(career => {
              const date = new Date(career.created)

              return (
                <div className="col-lg-3 col-md-4" style={{ marginBottom: 30 }}>
                  <div className="single-blog-post" style={{ minHeight: 200 }}>
                    <div className="entry-post-content" style={{ padding: 15 }}>
                      <div className="entry-meta">
                        <ul >
                          <li style={{ fontSize: 14 }} >{t('utils.postedDate')}: {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}</li>
                        </ul>
                      </div>
                      <h3 style={{ fontSize: '16px' }}>
                        <Link href={`/career-detail/${career.id}`}>
                          {career.content.title}
                        </Link>
                      </h3>
                      <p>
                        {career.content.short_description}
                      </p>
                    </div>
                  </div>
                </div>)
            })}
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
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
export default CareerGrid;
