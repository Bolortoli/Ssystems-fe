import React from "react";

const AboutUsContent = ({ data, image }) => {
  return (
    <>
      <div className="why-choose-us-area ptb-110" style={{ paddingTop: 110 }}>
        <div className="container">
          <div className="row">

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-image text-center">
                <img style={{ maxWidth: "90%" }} src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${image}`} alt="image" />
              </div>
            </div>

            <div className="col-lg-6 col-md-12">
              <div className="why-choose-us-content">
                <h2 style={{fontWeight: 400, fontSize: 30}}>{data.title}</h2>
                <p>
                  {data.about_text}
                </p>

                <div className="row">
                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3 style={{fontWeight: 400, fontSize: 18}}>{data.about1_title}</h3>
                      <p>
                        {data.about1_text}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3 style={{fontWeight: 400, fontSize: 18}}>{data.about2_title}</h3>
                      <p>
                        {data.about2_text}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3 style={{fontWeight: 400, fontSize: 18}}>{data.about3_title}</h3>
                      <p>
                        {data.about3_text}
                      </p>
                    </div>
                  </div>

                  <div className="col-lg-6 col-md-6 col-sm-6">
                    <div className="single-why-choose-us-box">
                      <h3 style={{fontWeight: 400, fontSize: 18}}>{data.about4_title}</h3>
                      <p>
                        {data.about4_text}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" style={{maxWidth: "80%", maxWidth: "1300px"}}>

          <div className="about-inner-area">
            <div className="row">
              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3 style={{fontWeight: 400, fontSize: 18}}>{data.mission1_title}</h3>
                  <p>
                    {data.mission1_text}
                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="about-text">
                  <h3 style={{fontWeight: 400, fontSize: 18}}>{data.mission2_title}</h3>
                  <p>
                    {data.mission2_text}

                  </p>
                </div>
              </div>

              <div className="col-lg-4 col-md-6 col-sm-6 offset-lg-0 offset-md-3 offset-sm-3">
                <div className="about-text">
                  <h3 style={{fontWeight: 400, fontSize: 18}}>{data.mission3_title}</h3>
                  <p>
                    {data.mission3_text}

                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutUsContent;
