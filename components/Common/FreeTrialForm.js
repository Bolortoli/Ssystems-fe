import React from "react";

const FreeTrialForm = ({ data }) => {
  if (data == undefined || data == null) {
    return <>Loading...</>;
  }

  return (
    <>
      <section className="free-trial-area">
        <div className="row m-0">
          <div className="col-lg-6 col-md-12 p-0">
            <div
              className="free-trial-image"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="200"
            >
              <img src="/images/woman2.jpg" alt="image" />
            </div>
          </div>

          <div className="col-lg-6 col-md-12 p-0">
            <div
              className="free-trial-content"
              data-aos="fade-in"
              data-aos-duration="1200"
              data-aos-delay="400"
            >
              <h2>{data.section9_title}</h2>

              <form className="newsletter-form">
                <input
                  type="email"
                  className="input-newsletter"
                  placeholder={data.section9_placeholder}
                />
                <button type="submit">{data.section9_button}</button>
              </form>

              <p>{data.section9_text}</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default FreeTrialForm;
