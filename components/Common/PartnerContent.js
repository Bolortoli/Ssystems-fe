import React from "react";
import PartnerSlider from "../Common/PartnerSlider";


const PartnerContent = ({ partners, data }) => {
  if (data == undefined || data == null) {
    return <>Loading...</>;
  }

  return (
    <>
      <div className="partner-area ptb-110 bg-f2f6f9">
        <div className="container">
          <div className="section-title">
            <h2>{data.section5_title}</h2>
            <p>{data.section5_text}</p>
          </div>

          <div className="customers-partner-list">

            {partners.data.map(d => (<div
              className="partner-item"
              data-aos="fade-in"
              data-aos-duration="120"
              data-aos-delay="100"
            >
              <a href={d.website_link} target="_blank" rel="noreferrer">
                <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${d.logo}`} alt="image" />
              </a>
            </div>))}
          </div>
        </div>
      </div>
    </>
  );
};

export default PartnerContent;
