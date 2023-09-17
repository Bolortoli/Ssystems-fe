import React from "react";
import Link from "next/link";
import BlogCommentsArea from "./BlogCommentsArea";
import BlogSidebar from "./BlogSidebar";
import { useRouter } from "next/router";
import axios from "axios";

const BlogDetailsContent = ({ data }) => {

  const { locale } = useRouter()
  const router = useRouter()

  const date = new Date(data.fullData.date_created)

  return (
    <>
      <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="col-lg-3"></div>
              <div className="blog-details col-lg-5 col-md-12 mx-auto">
                <div className="article-image">
                  <img src={`http://localhost:8055/assets/${data.cover_image}`} alt="image" />
                </div>
                <div className="article-footer">
                  <div className="article-tags">
                    <span>
                      <i className="fas fa-bookmark"></i>
                    </span>

                    <Link href="#">Fashion</Link>
                    <Link href="#">Games</Link>
                    <Link href="#">Travel</Link>
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-instagram"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="article-content">
                  <div className="entry-meta">
                    <ul>
                      <li>
                        <span>Posted On:</span>
                        {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                      </li>
                    </ul>
                  </div>

                  <h2>{data.translationData.title}</h2>

                  <p>
                    {data.translationData.short_description}
                  </p>
                  
                  <div dangerouslySetInnerHTML={{ __html: data.translationData.content }} />
                </div>

              </div>

              {/* Blog Comments Area */}
              <BlogCommentsArea />
            </div>

            {/* <div className="col-lg-4 col-md-12">
              <BlogSidebar />
            </div> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsContent;
