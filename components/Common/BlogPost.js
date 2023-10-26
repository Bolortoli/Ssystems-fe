import React from "react";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const BlogPost = ({ data, blogs }) => {
  const { t } = useTranslation();

  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2 style={{fontWeight: 400, fontSize: 30}}>{data.blog_title}</h2>
            <p>{data.blog_text}</p>
          </div>

          <div className="row justify-content-center">
            {blogs.map(blog => (
              <div
                className="col-lg-4 col-md-6"
                data-aos="fade-in"
                data-aos-duration="120"
                data-aos-delay="100"
              >
                <div className="single-blog-post">
                  <div className="entry-thumbnail">
                    <Link href={`/newsroom-detail/${blog.id}`}>
                      <img src={`${process.env.NEXT_PUBLIC_CMS_ENDPOINT_PUBLIC}/assets/${blog.cover_image}`} alt="image" />
                    </Link>
                  </div>

                  <div className="entry-post-content">
                    <div className="entry-meta">
                      <ul>
                        {blog.categories.map(cat => (<li>{cat.name}</li>))}
                      </ul>
                    </div>

                    <h3>
                      <Link href={`/newsroom-detail/${blog.id}`}>
                        {blog.content.title}
                      </Link>
                    </h3>
                    <p>
                      {blog.content.short_description}
                    </p>

                    <Link href={`/newsroom-detail/${blog.id}`} className="learn-more-btn">
                      {t('utils.readMore')} <i className="flaticon-add"></i>
                    </Link>
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

export default BlogPost;
