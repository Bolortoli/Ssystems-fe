import React from "react";
import Link from "next/link";
import BlogCommentsArea from "./BlogCommentsArea";
import BlogSidebar from "./BlogSidebar";
import { useRouter } from "next/router";
import axios from "axios";

const BlogDetailsContent = ({ data }) => {

  const { locale } = useRouter()
  const router = useRouter()

  const date = new Date(data?.date_created)

  return (
    <>
      <section className="blog-details-area ptb-110">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div className="col-lg-3"></div>
              <div className="blog-details col-lg-5 col-md-12 mx-auto">

                <div className="article-content">

                  <h2>{data?.translationData?.title}</h2>


                  <p>
                    {data?.translationData?.short_description}
                  </p>

                  <p>
                    Posted On: {`${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()}`}
                  </p>


                  <div className="article-image">
                    <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${data?.cover_image}`} alt="image" />
                  </div>


                  <div dangerouslySetInnerHTML={{ __html: data?.translationData?.content }} />
                </div>

                <div className="article-footer">
                  <div className="article-tags">
                    {/* <span>
                      <i className="fas fa-bookmark"></i>
                    </span> */}

                    {data.categories.map(category => (
                      <span id={category.id}>{category.name}</span>
                    ))}
                  </div>

                  <div className="article-share">
                    <ul className="social">
                      <li>
                        <a href={data.global_config.facebook_link} target="_blank" rel="noreferrer">
                          <i className="fab fa-facebook-f"></i>
                        </a>
                      </li>
                      {/* <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-twitter"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#" target="_blank" rel="noreferrer">
                          <i className="fab fa-linkedin-in"></i>
                        </a>
                      </li> */}
                      <li>
                        <a href={data.global_config.youtube_link} target="_blank" rel="noreferrer">
                          <i className="fab fa-youtube"></i>
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>

                <div className="related-blogs" style={{ display: 'flex', marginTop: 15, justifyContent: 'spac'}}>

                  <h5 style={{ flex: 1, }}>
                    <Link href={`/newsroom-detail/${data.related_blogs[0]?.id}`}>{data.related_blogs[0]?.title}</Link>
                  </h5>
                  <h5 className="text-end" style={{ flex: 1, }}>
                    <Link href={`/newsroom-detail/${data.related_blogs[1]?.id}`}>{data.related_blogs[1]?.title}</Link>
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogDetailsContent;
