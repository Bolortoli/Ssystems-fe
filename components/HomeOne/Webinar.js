import React, { useState } from "react";
import FsLightbox from "fslightbox-react";
import Link from "next/link";

const Webinar = ({ data }) => {
  const [toggler, setToggler] = useState(false);

  if (data == undefined || data == null) {
    return <>Loading...</>;
  }

  return (
    <>
      <FsLightbox
        toggler={toggler}
        sources={["https://www.youtube.com/embed/bk7McNUjWgw"]}
      />

      <section className="webinar-area">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="webinar-content">
              <h2>{data[1].section4_title}</h2>
              <p>{data[1].section4_text}</p>

              <Link href="#" className="btn btn-primary">
                {data[1].section4_button}
              </Link>
            </div>
          </div>

          <div className="col-lg-6 p-0">
            <div className="webinar-video-image">
              <img src="/images/woman.jpg" alt="image" />

              <div
                onClick={() => setToggler(!toggler)}
                className="video-btn popup-youtube"
                data-aos="zoom-in"
                data-aos-duration="1200"
                data-aos-delay="600"
              >
                <i className="flaticon-play-button"></i>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Webinar;
