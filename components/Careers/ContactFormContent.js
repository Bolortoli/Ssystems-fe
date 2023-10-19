import React from "react";
import ContactForm from "./ContactForm";

const ContactFormContent = ({ data, image }) => {
  
  return (
    <>
      <section className="contact-area" style={{paddingBottom: 110}}>
        <div className="container">
          {/* <div className="section-title" style={{justifyContent: 'start'}}>
            <span>{data.contact_sub_title}</span>
            <h2>{data.contact_title}</h2>
            <p>
              {data.contact_text}
            </p>
          </div> */}

          <div className="contact-form">
            <div className="row align-items-center">
              <div className="col-lg-5 col-md-12">
                <div className="contact-image">
                  <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${image}`} alt="image" />
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
