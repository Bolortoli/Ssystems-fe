import React from "react";
import { useRouter } from "next/router";

const CareerDetailsContent = ({ data }) => {

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

                  <div dangerouslySetInnerHTML={{ __html: data?.translationData?.content }} />
                </div>

              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CareerDetailsContent;
