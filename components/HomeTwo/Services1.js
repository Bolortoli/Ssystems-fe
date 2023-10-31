import React, { Component } from "react";
import Link from "next/link";

const Service = ({ data }) => {

  // Tab
  openTabSection = (evt, tabNmae) => {
    console.log("test1")
    let i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabs-item");
    console.log("test223")
    for (i = 0; i < tabcontent.length; i++) {
      // tabcontent[i].classList.remove("animate__fadeInUp");
      tabcontent[i].style.display = "none";
    }
    console.log("test2")

    tablinks = document.getElementsByTagName("li");
    console.log("test323")
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace("current", "");
    }
    console.log("test3")

    document.getElementById(tabNmae).style.display = "block";
    // document.getElementById(tabNmae).className +=
    //   " animate__fadeInUp animate__animated";
    console.log("test4")
    evt.currentTarget.className += "current";
    console.log("test5")
  };

  return (
    <div key={data.detail_information}>
      <div className="services-section ptb-110">
        <div className="container">
          {/* <div className="section-title">
              <h2>{this.state.data.page_title}</h2>
              <p>
                {this.state.data.page_description}
              </p>
            </div> */}

          <div className="tab services-tab-list card" style={{ minHeight: '50vh' }}>
            <div className="row card-body">
              <div className="col-lg-3 col-md-3">
                <ul className="tabs">
                  {data.detail_information.data.map((d, index) => (
                    <li
                      className={index == 0 ? "current" : ""}
                      onClick={(e) => openTabSection(e, d.serviceName)}
                    >
                      {/* <i className="flaticon-income"></i> */}
                      <span>{d.serviceName}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="col-lg-9 col-md-9">
                <div className="tab-content">
                  {data.detail_information?.data?.map(d => {
                    if (d.type == 'table') {
                      return (
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
                        </div>
                      )
                    } else if (d.type == 'card') {
                      return (
                        <div id={d.serviceName} className="tabs-item">
                          <div className="row">
                            {d.detailData.map(row => (
                              <div className="col-lg-6 col-md-6 offset-lg-0 offset-md-3">
                                <div className="single-pricing-box active">
                                  <div className="pricing-header">
                                    <h3 style={{ fontWeight: 400, fontSize: 30 }}>{row.title}</h3>
                                    <p style={{ fontWeight: 400, fontSize: 14 }}>
                                      {row.description}
                                    </p>
                                  </div>

                                  <div className="price" style={{ fontWeight: 400 }}>
                                    {row.price} <span>{row.range}</span>
                                  </div>

                                  <ul className="pricing-features" style={{ paddingBottom: 5 }}>
                                    <li>
                                      <i className="flaticon-tick"></i> {row.VAT}
                                    </li>
                                  </ul>

                                  <div className="buy-btn" style={{ marginBottom: 0 }}>
                                    <Link href="/contact" className="btn btn-primary">
                                      {row.button}
                                    </Link>
                                  </div>
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>
                      )
                    } else {
                      return <div></div>
                    }
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Services