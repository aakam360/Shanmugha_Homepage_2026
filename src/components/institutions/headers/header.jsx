import Link from "next/link";
import React, { useState } from "react";
import SearchPopup from "../../components/common/popup-modal/search-popup";
import OffCanvas from "../../components/common/sidebar/SCET_off-canvas";
import useSticky from "../../hooks/use-sticky";

import MainMenu from "./component/main-menu";

const Header = ({ style_3, no_topBar = false }) => {
  const { sticky } = useSticky();

  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <header
        className={`edu-header header-style-${style_3 ? "3" : "2"} ${no_topBar ? "no-topbar" : ""
          }`}
      >
        {!no_topBar && (
          <div className="header-top-bar">
            <div className="container-fluid">
              <div className="header-top">
                <div className="header-top-left">
                  <ul className="header-info">
                    <li>
                      <a href="tel:+91 73736 72999">
                        <i className="icon-phone"></i>Call:+91 73736 72999
                      </a>
                    </li>
                    <li>
                      <a
                        href="mailto:info@shanmugha.edu.in"
                        rel="noreferrer"
                        target="_blank"
                      >
                        <i className="icon-envelope"></i>Email: info@shanmugha.edu.in
                      </a>
                    </li>
                  </ul>
                </div>

                <div className="header-top-right">
                  <ul className="header-info">
                   {/*  <li>
                      <Link href="/alumni">
                        <a>Alumni</a>
                      </Link>
                    </li> */}

                    <li>
                      <Link href="/certificate">
                        <a>Recognizations/ Certificates</a>
                      </Link>
                    </li>
                    <li>
                      <Link href="https://aakam360.com/">
                        <a>AAKAM 360</a>
                      </Link>
                    </li>
                    {/* <li>
                      <Link href="/naac-iqac">
                        <a>NAAC-IQAC</a>
                      </Link>
                    </li> */}
                    <li>
                      <Link href="/">
                        <a>Sign In</a>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        <div id="edu-sticky-placeholder"></div>

        <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
          <div className="container" style={{maxWidth:'100%'}}>
            <div className="header-navbar">
              <div className="header-brand">
                <div className="logo">
                  <Link href="/">
                    <a>
                      <img className="logo-light" src={'/assets/images/logo/engineering_logo_1200.png'} alt="Corporate Logo" style={{width:'350px'}}/>
                    
                    </a>
                  </Link>
                </div>
              </div>

              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <MainMenu />
                </nav>
              </div>

              <div className="header-right">
                <ul className="header-action">
                  <li
                    className="icon search-icon"
                    onClick={() => setIsSearchOpen(true)}
                  >
                    <a style={{ cursor: "pointer" }} className="search-trigger">
                      <i className="icon-2"></i>
                    </a>
                  </li>

                  <li className="mobile-menu-bar d-block d-xl-none">
                    <button
                      className="hamberger-button"
                      onClick={() => setIsOpen(true)}
                    >
                      <i className="icon-54"></i>
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* <!-- Start Search Popup  --> */}
        <SearchPopup
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
        {/* <!-- End Search Popup  --> */}
      </header>

      {/* sidebar start */}
      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
      {/* sidebar end */}
    </>
  );
};

export default Header;
