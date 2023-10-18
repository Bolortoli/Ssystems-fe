import React from "react";
import Link from "next/link";

const Team = ({ data, members }) => {
  return (
    <>
      <section className="team-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>{data.team_title}</h2>
            <p>
              {data.team_text}
            </p>
          </div>

          <div className="row justify-content-center">

            {members.map(member => (
              <div
                className="col-lg-3 col-sm-6"
                onClick={()=> window.open(member.social, "_blank")}
                style={{cursor: 'pointer'}}
              // data-aos="fade-in"
              // data-aos-duration="120"
              // data-aos-delay="200"
              >
                <div className="single-team-box">
                  <div className="image">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${member.image}`} alt="Team Image" />
                  </div>

                  <div className="content">
                    <h3>{member.full_name}</h3>
                    <span>{member.role}</span>
                  </div>
                </div>
              </div>

            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Team;
