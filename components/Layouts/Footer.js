import React, { Component } from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const Footer = ({ data }) => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();
  return (
    <>
      <footer className="footer-area">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="120"
                data-aos-delay="100"
              >
                <div className="logo">
                  <Link href="/">
                    <img src="/images/white-logo.png" alt="image" style={{ maxWidth: 110 }} />
                  </Link>
                  <p>
                    {data.footer_text}
                  </p>
                </div>

                <ul className="social">
                  <li>
                    <a href={data.facebook_link} target="_blank">
                      <i className="flaticon-facebook-letter-logo"></i>
                    </a>
                  </li>
                  {/* <li>
                    <a href="https://twitter.com/" target="_blank">
                      <i className="flaticon-twitter"></i>
                    </a>
                  </li> */}
                  {/* <li>
                    <a href="https://www.instagram.com/" target="_blank">
                      <i className="flaticon-instagram-logo"></i>
                    </a>
                  </li> */}
                  <li>
                    <a href={data.youtube_link} target="_blank">
                      <i className="flaticon-youtube-play-button"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="120"
                data-aos-delay="200"
              >
                <h3 style={{ fontWeight: 400 }}>{t('page.services')}</h3>

                <ul className="footer-services-list">
                  {data.servicesTranslation.map(service => (
                    <li>
                      <Link href={`/service-detail/${service.id}`}>{service.title}</Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="120"
                data-aos-delay="300"
              >
                <h3 style={{ fontWeight: 400 }}>{t('utils.quickLinks')}</h3>

                <ul className="quick-links-list">
                  <li>
                    <Link href="/about">{t('page.about')}</Link>
                  </li>
                  {/* <li>
                    <Link href="/newsroom">{t('page.newsroom')}</Link>
                  </li> */}
                  <li>
                    <Link href="/contact">{t('page.contact')}</Link>
                  </li>
                  {/* <li>
                    <Link href="/faq">{t('page.faq')}</Link>
                  </li>
                  <li>
                    <Link href="/service-pricing">{t('page.pricing')}</Link>
                  </li> */}
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-6 col-sm-6">
              <div
                className="single-footer-widget"
                data-aos="fade-in"
                data-aos-duration="120"
                data-aos-delay="400"
              >
                <h3 style={{ fontWeight: 400 }}>{t('utils.contacts')}</h3>

                <ul className="footer-contact-list">
                  <li>
                    <span>{t('utils.address')}:</span>
                    {data.address}
                  </li>
                  <li>
                    <span>{t('utils.email')}:</span>
                    {data.email}
                  </li>
                  <li>
                    <span>{t('utils.phone')}:</span>
                    {data.phone}
                  </li>
                  {/* <li>
                    <span>{t('utils.fax')}:</span>
                    {data.fax}
                  </li> */}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="copyright-area">
        </div>

        <div className="circle-map">
          <img src="/images/circle-map.png" alt="image" />
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
