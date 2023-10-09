import React from "react";

const ServiceDetailsContent = ({ data }) => {
  return (
    <>
      <div className="projects-details-area ptb-110">
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
