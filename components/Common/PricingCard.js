import React from "react";
import Link from "next/link";

const PricingCard = ({ data }) => {
  if (data == undefined || data == null) {
    return <>Loading...</>;
  }

  const openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    evt.currentTarget.className += "current";
  };
  return (
    <>
      <section className="pricing-area ptb-110 bg-fafafa">
        <div className="container">
          <div className="section-title">
            <h2>{data.section7_title}</h2>
            <p>{data.section7_text}</p>
          </div>

          <div className="tab pricing-tab">
            {/* Pricing Tab List */}
            <ul className="tabs">
              <li
                className="current"
                onClick={(e) => openTabSection(e, "tab1")}
              >
                {data.section7_buttonMonth}
              </li>

              <li onClick={(e) => openTabSection(e, "tab2")}>
                {data.section7_buttonYear}
              </li>
            </ul>

            <div className="tab_content">
              <div id="tab1" className="tabs-item">
                <div className="row justify-content-center">
                  {" "}
                  {/* Card.map [1 ,2 ,3] */}
                  {/* Single pricing table */}
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Free</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $0 <span>/Monthly</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Up to 1000
                          Subscribers
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Single pricing table */}
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <div className="single-pricing-box active">
                      <div className="pricing-header">
                        <h3>Pro</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $149 <span>/Monthly</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Up to 1000
                          Subscribers
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>
                  {/* Single pricing table */}
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="600"
                  >
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $179 <span>/Monthly</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Up to 1000
                          Subscribers
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>

              <div id="tab2" className="tabs-item">
                <div className="row justify-content-center">
                  {/* Single pricing table */}
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="200"
                  >
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Free</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $0 <span>/Yearly</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Up to 1000
                          Subscribers
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="400"
                  >
                    <div className="single-pricing-box active">
                      <div className="pricing-header">
                        <h3>Pro</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $249 <span>/Yearly</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Up to 1000
                          Subscribers
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="fas fa-times"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>

                  {/* Single pricing table */}
                  <div
                    className="col-lg-4 col-md-6"
                    data-aos="fade-in"
                    data-aos-duration="1200"
                    data-aos-delay="600"
                  >
                    <div className="single-pricing-box">
                      <div className="pricing-header">
                        <h3>Premium</h3>
                        <p>
                          Get your business up <br /> and running
                        </p>
                      </div>

                      <div className="price">
                        $279 <span>/Yearly</span>
                      </div>

                      <div className="buy-btn">
                        <Link href="/contact" className="btn btn-primary">
                          Get Started Free
                        </Link>
                      </div>

                      <ul className="pricing-features">
                        <li>
                          <i className="flaticon-tick"></i> Drag & Drop Builder
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Lead Generation &
                          Sales
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Boot & Digital
                          Assistants
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Customer Service
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Up to 1000
                          Subscribers
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Unlimited Broadcasts
                        </li>
                        <li>
                          <i className="flaticon-tick"></i> Landing Pages & Web
                          Widgets
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PricingCard;
