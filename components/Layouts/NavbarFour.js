import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";

const NavbarFour = ({ services, why }) => {
  // Add active class
  const [currentPath, setCurrentPath] = useState("");
  const router = useRouter();
  const { locale } = useRouter();


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

  return (
    <>
      <div id="navbar" className="navbar-area navbar-style-four">
        <div className="main-nav">
          <div className="container-fluid">
            <nav className="navbar navbar-expand-md navbar-light">
              <Link href="/" className="navbar-brand">
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
                      href="/"
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
                      {services.map(service => (
                        <li className="nav-item">
                          <Link
                            href={`/service-detail/${service.id}`}
                            className={`nav-link ${currentPath == `/service-detail/${service.id}` && "active"
                              }`}
                          >
                            {service.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/service-pricing"
                      className={`nav-link ${currentPath == "/service-pricing" && "active"
                        }`}
                    >
                      Pricing
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/about"
                      className={`nav-link ${currentPath == "/about" && "active"
                        }`}
                    >
                      About
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/newsroom"
                      className={`nav-link ${currentPath == "/newsroom" && "active"
                        }`}
                    >
                      Newsroom
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/contact"
                      className={`nav-link ${currentPath == "/contact" && "active"
                        }`}
                    >
                      Contact
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/careers"
                      className={`nav-link ${currentPath == "/careers" && "active"
                        }`}
                    >
                      Careers
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="/faq"
                      className={`nav-link ${currentPath == "/faq" && "active"
                        }`}
                    >
                      FAQ
                    </Link>
                  </li>

                  <li className="nav-item">
                    <Link
                      href="#"
                      className="nav-link"
                      onClick={(e) => e.preventDefault()}
                    >
                      Why Ssystems <i className="fas fa-chevron-down"></i>
                    </Link>

                    <ul className="dropdown-menu">
                      {why.map(w => (
                        <li className="nav-item">
                          <Link
                            href={`/why-we/${w.id}`}
                            className={`nav-link ${currentPath == `/why-we/${w.id}` && "active"
                              }`}
                          >
                            {w.title}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </li>

                  <li className="nav-item">
                    <Link
                      href={locale == "mn-MN" ? `/en-US${router.asPath}` : `/mn-MN${router.asPath}`}
                      className={`nav-link`}
                      locale={locale == "mn-MN" ? `en-US` : `mn-MN`}
                    >
                      {locale == "mn-MN" ? `EN` : `MN`}
                    </Link>
                  </li>
                </ul>
              </div>
            </nav>
          </div>
        </div>
      </div>

      {/* Search Form */}
      <div
        className={`search-overlay ${isActiveSearchModal ? "" : "search-overlay-active"
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
      </div>
      {/* End Search Form */}
    </>
  );
};


export default NavbarFour;
