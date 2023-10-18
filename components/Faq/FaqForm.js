import React from "react";
import ContactForm from "../Contact/ContactForm";

const FaqForm = ({content, image}) => {
  return (
    <>
      <div className="faq-contact">
        <div className="section-title">
          <h2>{content.title}</h2>
          <p>
            {content.text}
          </p>
        </div>

        <div className="faq-contact-form">
          <div className="row align-items-center">
            <div className="col-lg-5 col-md-12">
              <div className="faq-contact-image">
                <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${image}`} alt="image" />
              </div>
            </div>

            <div className="col-lg-7 col-md-12">
              <ContactForm />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FaqForm;
