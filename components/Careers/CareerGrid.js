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
                <div className="col-lg-6 col-md-6" style={{ marginBottom: 30, borderColor: "#11224e", }} >
                  <div className="single-blog-post" style={{ minHeight: 200, backgroundColor: 'transparent', borderColor: "#11224e", borderWidth: 2 }} >
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

      </section>
    </>
  );
};
export default CareerGrid;
