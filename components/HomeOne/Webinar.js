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
        sources={[data.home_content_id.video_link]}
      />

      <section className="webinar-area">
        <div className="row m-0">
          <div className="col-lg-6 p-0">
            <div className="webinar-content">
              <h2 style={{fontWeight: 400, fontSize: 30}}>{data.section4_title}</h2>
              <p>{data.section4_text}</p>

              <Link href="#" className="btn btn-primary">
                {data.section4_button_name}
              </Link>
            </div>
          </div>

          <div className="col-lg-6 p-0">
            <div className="webinar-video-image" style={{
              backgroundImage: `url(${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${data.home_content_id.section4_image.id})`,
              borderRadius: 10,
            }}>
              {/* <img style={{borderRadius: 10}} src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${data.home_content_id.section4_image.id}`} alt="image" /> */}

              <div
                onClick={() => setToggler(!toggler)}
                className="video-btn popup-youtube"
                // data-aos="zoom-in"
                // data-aos-duration="120"
                // data-aos-delay="100"
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
