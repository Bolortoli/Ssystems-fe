import React from "react";

const ServiceDetailsContent = ({ data }) => {
  return (
    <>
      <div className="projects-details-area" style={{paddingBottom: 0, paddingTop: 110}}>
        <div className="container">
          <div className="projects-details">
            <div dangerouslySetInnerHTML={{ __html: data?.content }} />
          </div>
        </div>
      </div>
    </>
  );
};

export default ServiceDetailsContent;
