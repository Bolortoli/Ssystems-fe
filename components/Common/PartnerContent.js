import React from "react";

const PartnerContent = ({ data }) => {
  if (data == undefined || data == null) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="partner-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>{data[1].section5_title}</h2>
            <p>{data[1].section5_title}</p>
          </div>

          <div className="customers-partner-list">
            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/partner/partner1.png" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/partner/partner2.png" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="300"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/partner/partner3.png" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/partner/partner4.png" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="500"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/partner/partner5.png" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="600"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/partner/partner6.png" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="700"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/partner/partner1.png" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="800"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/partner/partner2.png" alt="image" />
              </a>
            </div>

            <div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="900"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/partner/partner3.png" alt="image" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerContent;
