import React, { Component, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import "dotenv/config";

const BlogThreeGrid = ({ data }) => {

  if (data == undefined || data == null) {
    return <>Loading...</>
  }

  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">

            {data.map(blog => (
            <div className="col-lg-3 col-md-4" style={{ marginBottom: 30 }}>
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href={`/blog-detail/${blog.id}`}>
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${blog?.cover_image}`} alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content" style={{ padding: 15 }}>
                  <div className="entry-meta">
                    <ul >
                      {blog.categories.map(cat => (<li style={{ fontSize: 14 }} >{cat.name}</li>))}
                    </ul>
                  </div>

                  <h3 style={{ fontSize: '16px' }}>
                    <Link href={`/blog-detail/${blog.id}`}>
                      {blog.content.title}
                    </Link>
                  </h3>

                  <p>
                    {blog.content.short_description}
                  </p>
                </div>

              </div>

            </div>))}
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img3">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="shape-img4">
          <img src="/images/shape/shape4.svg" alt="image" />
        </div>
        <div className="shape-img5">
          <img src="/images/shape/shape5.svg" alt="image" />
        </div>
        <div className="shape-img7">
          <img src="/images/shape/shape3.png" alt="image" />
        </div>
        <div className="dot-shape1">
          <img src="/images/shape/dot1.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot2.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot3.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot4.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot5.png" alt="image" />
        </div>
        <div className="dot-shape2">
          <img src="/images/shape/dot6.png" alt="image" />
        </div>
      </section>
    </>
  );
};
export default BlogThreeGrid;
