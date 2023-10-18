import React from "react";
import Link from "next/link";

const ProfessionalSolutions = ({ data, solutions, image }) => {
  return (
    <>
      <div className="solutions-area ptb-110" style={{backgroundImage: `url(${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${image})`}}>
        <div className="container">
          <div className="section-title">
            <h2>{data.solutions_title}</h2>
            <p>
              {data.solutions_text}
            </p>
          </div>

          <div className="row">

            {solutions.map((sol, index) => (
              <div className="col-lg-4 col-sm-6 col-md-6">
                <div className={index == 0 ? "single-solutions-box active" : "single-solutions-box"}>
                  {/* <div className="icon">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${sol.icon}`} alt="image" style={{ width: 50, height: 50 }} />
                  </div> */}
                  <h3>
                    <Link href={`/service-detail/${sol.id}`}>{sol.title}</Link>
                  </h3>
                  <p>
                    {sol.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProfessionalSolutions;
