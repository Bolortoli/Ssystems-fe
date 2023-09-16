import React, { Component } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const BlogThreeGrid = ({ data }) => {

  if (data == undefined || data == null) {
    return <>Loading...</>
  }

  const { locale } = useRouter();

  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">

            {data.data.map(blog => (<div className="col-lg-4 col-md-6">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href="/blog-details">
                    <img src="/images/blog/blog1.jpg" alt="image" />
                  </Link>
                </div>

                <div className="entry-post-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <Link href="#">Admin</Link>
                      </li>
                      <li>March 10, 2020</li>
                    </ul>
                  </div>

                  <h3>
                    <Link href="/blog-details">
                      Making Peace With The Feast Or Famine Of Freelancing
                    </Link>
                  </h3>

                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod...
                  </p>

                  <Link href="/blog-details" className="learn-more-btn">
                    Read More <i className="flaticon-add"></i>
                  </Link>
                </div>
              </div>
            </div>))}

            {/* Pagination */}
            <div className="col-lg-12 col-sm-12">
              <div className="pagination-area">
                <a href="#" className="prev page-numbers">
                  <i className="fas fa-angle-double-left"></i>
                </a>

                <a href="#" className="page-numbers">
                  1
                </a>

                <a href="#" className="page-numbers current">
                  2
                </a>

                <a href="#" className="page-numbers">
                  3
                </a>

                <a href="#" className="page-numbers">
                  4
                </a>

                <a href="#" className="next page-numbers">
                  <i className="fas fa-angle-double-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Images */}
        <div className="shape-img2">
          <img src="/images/shape/shape2.svg" alt="image" />
        </div>
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
