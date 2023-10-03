import React from "react";
import PartnerSlider from "../Common/PartnerSlider";


const PartnerContent = ({ data }) => {
  if (data == undefined || data == null) {
    return <>Loading...</>;
  }
  const d = [1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1]

  return (
    <>
      <div className="partner-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>{data.section5_title}</h2>
            <p>{data.section5_text}</p>
          </div>

          <div className="customers-partner-list">

            {d.map(a => (<div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="100"
            >
              <a href="#" target="_blank" rel="noreferrer">
                <img src="/images/partner/partner1.png" alt="image" />
              </a>
            </div>))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerContent;
