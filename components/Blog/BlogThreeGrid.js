import React, { Component, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import "dotenv/config";

const BlogThreeGrid = ({ data }) => {

  return (
    <>
      <section className="blog-area ptb-110" style={{minHeight: '50vh'}}>
        <div className="container">
          <div className="row">

            {data.map(blog => (
            <div className="col-lg-3 col-md-4" style={{ marginBottom: 30 }}>
              <div className="single-blog-post" style={{minHeight: 400}}>
                <div className="entry-thumbnail">
                  <Link href={`/newsroom-detail/${blog.id}`}>
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
                    <Link href={`/newsroom-detail/${blog.id}`}>
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

      </section>
    </>
  );
};
export default BlogThreeGrid;
