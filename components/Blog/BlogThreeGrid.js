import React, { Component, useEffect, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const BlogThreeGrid = ({ data }) => {

  if (data == undefined || data == null) {
    return <>Loading...</>
  }

  let [translatedData, setTranslatedData] = useState([])

  const { locale } = useRouter();

  const blogTranslation = () => {
    let translation = data.data.map(d => {
      let categories = d.category.map(cat => {
        let categoryTranslation = cat.blog_category_id.translations.find(trans => trans.languages_code == locale)

        return {
          id: cat.id,
          name: categoryTranslation.name,
          short_description: categoryTranslation.short_description,
          icon: cat.blog_category_id.icon
        }
      })
      let content = d.translations.find(trans => trans.languages_code.code == locale)

      return {
        id: d.id,
        categories,
        cover_image: d.cover_image.id,
        content
      }
    })
    console.log(translation)
    setTranslatedData(translation)
  }

  useEffect(() => {
    blogTranslation()
  }, [])

  // const translationData = data.data.translations.filter(d => d.languages_code.code == locale)[0]

  return (
    <>
      <section className="blog-area ptb-110">
        <div className="container">
          <div className="row">

            {translatedData.map(blog => (<div className="col-lg-3 col-md-4">
              <div className="single-blog-post">
                <div className="entry-thumbnail">
                  <Link href={`/blog-detail/${blog.id}`}>
                    <img src={`http://0.0.0.0:8055/assets/${blog.cover_image}`} alt="image" />
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
