import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useTranslation } from 'next-i18next';

const Navbar = () => {
  const { locale, locales } = useRouter();
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  const { t } = useTranslation("common");

  useEffect(() => {
    setCurrentPath(router.asPath);
  }, [router]);

  const [menu, setMenu] = React.useState(true);
  const toggleNavbar = () => {
    setMenu(!menu);
  };
  React.useEffect(() => {
    let elementId = document.getElementById("navbar");
    document.addEventListener("scroll", () => {
      if (window.scrollY > 170) {
        elementId.classList.add("is-sticky");
      } else {
        elementId.classList.remove("is-sticky");
      }
    });
  });

  const classOne = menu
    ? "collapse navbar-collapse mean-menu"
    : "collapse navbar-collapse show";
  const classTwo = menu
    ? "navbar-toggler navbar-toggler-right collapsed"
    : "navbar-toggler navbar-toggler-right";

  // Search Modal
  const [isActiveSearchModal, setActiveSearchModal] = useState("false");
  const handleToggleSearchModal = () => {
    setActiveSearchModal(!isActiveSearchModal);
  };

  console.log(t("page_names"))

  return (
    <>
      <div id="navbar" className="navbar-area">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
                <img
                  src="/images/white-logo.png"
                  className="main-logo"
                  alt="logo"
                />
                <img
                  src="/images/black-logo.png"
                  className="optional-logo"
                  alt="logo"
                />
              </Link>

              <button
                onClick={toggleNavbar}
                className={classTwo}
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="icon-bar top-bar"></span>
                <span className="icon-bar middle-bar"></span>
                <span className="icon-bar bottom-bar"></span>
              </button>

              <div className={classOne} id="navbarSupportedContent">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <Link
                      href="#"
                      className={`nav-link ${currentPath == "/" && "active"}`}
                    >
                      Home
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Services <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/about/"
                          className={`nav-link ${
                            currentPath == "/about/" && "active"
                          }`}
                        >
                          Co location
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/about-two/"
                          className={`nav-link ${
                            currentPath == "/about-two/" && "active"
                          }`}
                        >
                          Storage
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/team/"
                          className={`nav-link ${
                            currentPath == "/team/" && "active"
                          }`}
                        >
                          Dedicated server
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/pricing/"
                          className={`nav-link ${
                            currentPath == "/pricing/" && "active"
                          }`}
                        >
                          Profesional consulting & service maintennace
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/feedback/"
                          className={`nav-link ${
                            currentPath == "/feedback/" && "active"
                          }`}
                        >
                          Internet
                        </Link>
                      </li>

                      {/* <li className="nav-item">
                        <Link
                          href="/partner/"
                          className={`nav-link ${
                            currentPath == "/partner/" && "active"
                          }`}
                        >
                          Partners
                        </Link>
                      </li> */}

                      {/* <li className="nav-item">
                        <Link
                          href="/faq/"
                          className={`nav-link ${
                            currentPath == "/faq/" && "active"
                          }`}
                        >
                          Faq
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/coming-soon/"
                          className={`nav-link ${
                            currentPath == "/coming-soon/" && "active"
                          }`}
                        >
                          Coming Soon
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link href="/404/">404 Error</Link>
                      </li> */}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className={`nav-link`}>
                      About Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className={`nav-link`}>
                      Careers
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className={`nav-link`}>
                      Contact Us
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className={`nav-link`}>
                      FAQs
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link href="#" className={`nav-link`}>
                      Newsroom
                    </Link>
                  </li>

                  {/* <li className="nav-item">
                    <Link
                      href="/services/"
                      className={`nav-link ${
                        currentPath == "/services/" && "active"
                      }`}
                    >
                      Services <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/services/"
                          className={`nav-link ${
                            currentPath == "/services/" && "active"
                          }`}
                        >
                          Services Style One
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services-two/"
                          className={`nav-link ${
                            currentPath == "/services-two/" && "active"
                          }`}
                        >
                          Services Style Two
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services-three/"
                          className={`nav-link ${
                            currentPath == "/services-three/" && "active"
                          }`}
                        >
                          Services Style Three
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/services-four/"
                          className={`nav-link ${
                            currentPath == "/services-four/" && "active"
                          }`}
                        >
                          Services Style Four
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/service-details/"
                          className={`nav-link ${
                            currentPath == "/service-details/" && "active"
                          }`}
                        >
                          Service Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      href="/projects/"
                      className={`nav-link ${
                        currentPath == "/projects/" && "active"
                      }`}
                    >
                      Projects <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/projects/"
                          className={`nav-link ${
                            currentPath == "/projects/" && "active"
                          }`}
                        >
                          Projects
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/projects-details/"
                          className={`nav-link ${
                            currentPath == "/projects-details/" && "active"
                          }`}
                        >
                          Projects Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      href="/shop/"
                      className={`nav-link ${
                        currentPath == "/shop/" && "active"
                      }`}
                    >
                      Shop <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/shop/"
                          className={`nav-link ${
                            currentPath == "/shop/" && "active"
                          }`}
                        >
                          Shop
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/single-products/"
                          className={`nav-link ${
                            currentPath == "/single-products/" && "active"
                          }`}
                        >
                          Single Products
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/cart/"
                          className={`nav-link ${
                            currentPath == "/cart/" && "active"
                          }`}
                        >
                          Cart
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/checkout/"
                          className={`nav-link ${
                            currentPath == "/checkout/" && "active"
                          }`}
                        >
                          Checkout
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      href="/blog/"
                      className={`nav-link ${
                        currentPath == "/blog/" && "active"
                      }`}
                    >
                      Blog <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      <li className="nav-item">
                        <Link
                          href="/blog/"
                          className={`nav-link ${
                            currentPath == "/blog/" && "active"
                          }`}
                        >
                          Blog Grid
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog2/"
                          className={`nav-link ${
                            currentPath == "/blog2/" && "active"
                          }`}
                        >
                          Blog Right Sidebar
                        </Link>
                      </li>

                      <li className="nav-item">
                        <Link
                          href="/blog-details/"
                          className={`nav-link ${
                            currentPath == "/blog-details/" && "active"
                          }`}
                        >
                          Blog Details
                        </Link>
                      </li>
                    </ul>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      href="/contact/"
                      className={`nav-link ${
                        currentPath == "/contact/" && "active"
                      }`}
                    >
                      Contact
                    </Link>
                  </li> */}

                  {/* <li className="nav-item">
                    <Link
                      href={
                        locale == "mn-MN"
                          ? `/en-US${router.route}`
                          : `/mn-MN${router.route}`
                      }
                      className={`nav-link`}
                      locale={locale == "mn-MN" ? `en-US` : `mn-MN`}
                    >
                      {locale == "mn-MN" ? `EN` : `MN`}
                    </Link>
                  </li> */}
                </ul>

                {/* others-options */}
                <div className="others-options">
                  {/* <Link href="/cart" className="cart-btn">
                    <i className="flaticon-commerce-and-shopping"></i>
                    <span>1</span>
                  </Link> */}

                  {/* <div className="option-item">
                    <i
                      className="search-btn flaticon-search"
                      onClick={handleToggleSearchModal}
                    ></i>
                  </div> */}

                  <Link href="/contact" className="btn btn-primary">
                    Contact Us
                  </Link>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      {/* <div
        className={`search-overlay ${
          isActiveSearchModal ? "" : "search-overlay-active"
        }`}
      >
        <div className="d-table">
          <div className="d-table-cell">
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>
            <div className="search-overlay-layer"></div>

            <div
              className="search-overlay-close"
              onClick={handleToggleSearchModal}
            >
              <span className="search-overlay-close-line"></span>
              <span className="search-overlay-close-line"></span>
            </div>

            <div className="search-overlay-form">
              <form>
                <input
                  type="text"
                  className="input-search"
                  placeholder="Search here..."
                />
                <button type="submit">
                  <i className="fa fa-search"></i>
                </button>
              </form>
            </div>
          </div>
        </div>
      </div> */}
      {/* End Search Form */}
    </>
  );
};

export default Navbar;
