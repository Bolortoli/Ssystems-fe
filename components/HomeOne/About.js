import React from "react";
import Link from "next/link";

const About = ({ data }) => {
  if (data == undefined || data == null) {
    return <>Loading...</>;
  }

  return (
    <>
      <section className="about-area ptb-110">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12">
              <div className="about-image">
                <img
                  src={`${process.env.CMS_ENDPOINT_PUBLIC}/assets/${data.home_content_id.second_section_image1.id}`}
                  alt="image"
                  data-aos="fade-in"
                  data-aos-duration="120"
                  data-aos-delay="200"
                />
                <img
                  src={`${process.env.CMS_ENDPOINT_PUBLIC}/assets/${data.home_content_id.second_section_image2.id}`}
                  alt="image"
                  data-aos="fade-in"
                  data-aos-duration="120"
                  data-aos-delay="400"
                />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div
                className="about-content"
                data-aos="fade-in"
                data-aos-duration="120"
                data-aos-delay="100"
              >
                <h2>{data.second_section_title}</h2>
                <p>{data.second_section_text}</p>

                <Link href="/about" className="btn btn-primary">
                  {data.second_section_button}
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img1">
          <img src="/images/shape/shape1.png" alt="image" />
        </div>
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img6">
          <img src="/images/shape/shape6.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
      </section>
    </>
  );
};

export default About;
