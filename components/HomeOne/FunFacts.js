import React from "react";
import Link from "next/link";

const FunFacts = ({ data }) => {
  return (
    <>
      <div className="fun-facts-area" style={{ paddingTop: "110px" }}>
        <div className="container">
          <div className="section-title">
            <h2>{data.fun_fact_title}</h2>
            <p>
              {data.fun_fact_text}
            </p>
          </div>

          <div className="row">
            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div
                className="single-funfacts"
                data-aos="fade-up"
                data-aos-duration="120"
                data-aos-delay="100"
              >
                <h3>
                  {data.fun_fact_1_title}
                </h3>
                <p>{data.fun_fact_1_text}</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div
                className="single-funfacts"
                data-aos="fade-up"
                data-aos-duration="120"
                data-aos-delay="100"
              >
                <h3>
                  {data.fun_fact_2_title}
                </h3>
                <p>{data.fun_fact_2_text}</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div
                className="single-funfacts"
                data-aos="fade-up"
                data-aos-duration="120"
                data-aos-delay="100"
              >
                <h3>
                  {data.fun_fact_3_title}
                </h3>
                <p>{data.fun_fact_3_text}</p>
              </div>
            </div>

            <div className="col-lg-3 col-6 col-sm-3 col-md-3">
              <div
                className="single-funfacts"
                data-aos="fade-up"
                data-aos-duration="120"
                data-aos-delay="100"
              >
                <h3>
                  {data.fun_fact_4_title}
                </h3>
                <p>{data.fun_fact_4_text}</p>
              </div>
            </div>

          </div>

          {/* <div className="contact-cta-box">
            <h3>Have any question about us?</h3>
            <p>Don't hesitate to contact us.</p>

            <Link href="/contact" className="btn btn-primary">
              Contact Us<span></span>
            </Link>
          </div> */}
        </div>

        {/* Shape Images  */}
        <div className="shape-img1">
          <img src="/images/map.png" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
      </div>
    </>
  );
};

export default FunFacts;
