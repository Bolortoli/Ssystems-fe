import React, { Component } from "react";
import Link from "next/link";
import axios from "axios";

export default class Services extends Component {

  state = {
    data: this.props.data || {}
  };

  // Tab
  openTabSection = (evt, tabNmae) => {
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    for (i = 0; i < tabcontent.length; i++) {
      // tabcontent[i].classList.remove("animate__fadeInUp");
      tabcontent[i].style.display = "none";
    }

    tablinks = document.getElementsByTagName("li");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }

    document.getElementById(tabNmae).style.display = "block";
    // document.getElementById(tabNmae).className +=
    //   " animate__fadeInUp animate__animated";
    evt.currentTarget.className += "current";
  };
  componentDidUpdate(prevProps) {
    // do something
  }

  render() {

    return (
      <div key={this.state.data.detail_information}>
        <div className="services-section bg-f2f6f9 ptb-110">
          <div className="container">
            <div className="section-title">
              <h2>{this.state.data.page_title}</h2>
              <p>
                {this.state.data.page_description}
              </p>
            </div>

            <div className="tab services-tab-list card">
              <div className="row card-body">
                <div className="col-lg-3 col-md-3">
                  <ul className="tabs">
                    {this.state.data.detail_information.data.map((d, index) => (
                      <li
                        className={index == 0 ? "current" : ""}
                        onClick={(e) => this.openTabSection(e, d.serviceName)}
                      >
                        {/* <i className="flaticon-income"></i> */}
                        <span>{d.serviceName}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="col-lg-9 col-md-9">
                  <div className="tab-content">
                    {this.state.data.detail_information.data.map(d => (
                      <div id={d.serviceName} className="tabs-item">
                        <div className="table-responsive">
                          <table className="table table-hover table-borderless">
                            <thead>
                              <tr>
                                {Object.keys(d.detailData[0]).map(key => (<th scope="col">{key}</th>))}
                                {/* <th scope="col">Contact</th> */}
                              </tr>
                            </thead>
                            <tbody>
                              {d.detailData.map((row) => (
                                <>
                                  <tr key={row.id}>
                                    {Object.keys(row).map(key => (<td>{row[`${key}`]}</td>))}
                                  </tr>
                                  {/* <tr>
                                    <Link href={`/contact`}>
                                      <i className="flaticon-robot-1"></i>
                                      Contact
                                    </Link>
                                  </tr> */}
                                </>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>))}

                    <div id="tab2" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomized words which
                          don't look even slightly believable. If you are going to
                          use a passage.
                        </p>

                        <Link href="/service-details" className="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab3" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomized words which
                          don't look even slightly believable. If you are going to
                          use a passage.
                        </p>

                        <Link href="/service-details" className="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab4" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomized words which
                          don't look even slightly believable. If you are going to
                          use a passage.
                        </p>

                        <Link href="/service-details" className="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab5" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomized words which
                          don't look even slightly believable. If you are going to
                          use a passage.
                        </p>

                        <Link href="/service-details" className="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>

                    <div id="tab6" className="tabs-item">
                      <div className="image">
                        <img src="/images/services-img1.png" alt="image" />
                      </div>

                      <div className="content">
                        <p>
                          There are many variations of passages of Lorem Ipsum
                          available, but the majority have suffered alteration in
                          some form, by injected humour, or randomized words which
                          don't look even slightly believable. If you are going to
                          use a passage.
                        </p>

                        <Link href="/service-details" className="btn btn-primary">
                          Read More
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Shape Images  */}
          <div className="shape-img1">
            <img src="/images/shape/shape1.png" alt="image" />
          </div>
          <div className="shape-img3">
            <img src="/images/shape/shape3.png" alt="image" />
          </div>
          <div className="shape-img2">
            <img src="/images/shape/shape2.svg" alt="image" />
          </div>
          <div className="shape-img5">
            <img src="/images/shape/shape5.svg" alt="image" />
          </div>
          <div className="shape-img4">
            <img src="/images/shape/shape4.svg" alt="image" />
          </div>
          <div className="dot-shape1">
            <img src="/images/shape/dot1.png" alt="image" />
          </div>
          <div className="dot-shape2">
            <img src="/images/shape/dot3.png" alt="image" />
          </div>
        </div>
      </div>
    );
  }
}
