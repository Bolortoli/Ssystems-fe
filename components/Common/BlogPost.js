import React from "react";
import Link from "next/link";

const BlogPost = ({ data, blogs }) => {
  if (data == undefined || data == null) {
    return <>Loading...</>;
  }

  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="section-title">
            <h2>{data.blog_title}</h2>
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
                    <Link href={`/blog-detail/${blog.id}`}>
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
                      <Link href={`/blog-detail/${blog.id}`}>
                        {blog.content.title}
                      </Link>
                    </h3>
                    <p>
                      {blog.content.short_description}
                    </p>

                    <Link href={`/blog-detail/${blog.id}`} className="learn-more-btn">
                      Read More <i className="flaticon-add"></i>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
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

export default BlogPost;
