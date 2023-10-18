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
        <div className="services-section ptb-110">
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
                          <table className="table table-hover">
                            <thead>
                              <tr>
                                {Object.keys(d.detailData[0]).map(key => (<th scope="col">{key}</th>))}
                                <th scope="col"></th>
                              </tr>
                            </thead>
                            <tbody>
                              {d.detailData.map((row) => (
                                <>
                                  <tr key={row.id}>
                                    {Object.keys(row).map((key, index) => (<td
                                      style={{ lineHeight: '50px', color: index == 0 ? '#ea560d' : '#111111', fontWeight: index == 0 ? 'bold' : 'normal' }}>
                                      {row[`${key}`]}
                                    </td>)
                                    )}
                                    <td style={{ lineHeight: '50px', width: '5px' }}>
                                      <Link href={`/contact`} className="btn btn-primary">
                                        {"⟶"}
                                      </Link>
                                    </td>
                                  </tr>
                                </>
                              ))}
                            </tbody>
                          </table>
                        </div>
                      </div>))}
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
