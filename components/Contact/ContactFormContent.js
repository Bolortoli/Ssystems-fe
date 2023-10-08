import React from "react";
import ContactForm from "./ContactForm";
import "dotenv/config";

const ContactFormContent = ({ data }) => {
  return (
    <>
      <section className="contact-area ptb-110">
        <div className="container">
          <div className="section-title">
            <span>{data.translation.sub_title}</span>
            <h2>{data.translation.title}</h2>
            <p>
              {data.translation.text}
            </p>
          </div>

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${data.image}`} alt="image" />
                </div>
              </div>

              <div className="col-lg-7 col-md-12">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
export default ContactFormContent;
