import React, { Component } from "react";
import Link from "next/link";

const PageBanner = ({
  bgImgClass,
  data,
  coverImage
}) => {
  return (
    <>
      <div className={`page-title-area ${bgImgClass}`} style={{backgroundImage: `url(${coverImage})`}}>
        <div className="container">
          <div className="page-title-content">
            <h2>{data.title}</h2>
            <ul>
              <li>
                <span>{data.description}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="lines">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </>
  );
};

export default PageBanner;
