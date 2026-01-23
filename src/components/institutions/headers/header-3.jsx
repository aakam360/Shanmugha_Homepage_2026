import Link from "next/link";
import React, { useState, useEffect } from "react";
import SearchPopup from "../../components/common/popup-modal/search-popup";
import OffCanvas from "../../components/common/sidebar/off-canvas";
import useSticky from "../../hooks/use-sticky";
import InstituteMenu from "./component/institute-menu";

const HeaderThree = () => {
  const { sticky } = useSticky();
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isTransparent, setIsTransparent] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector(".hero-banner");
      if (!heroSection) return;

      const heroBottom = heroSection.offsetTop + heroSection.offsetHeight;
      // ✅ Transparent only within the hero section
      if (window.scrollY < heroBottom - 100) {
        setIsTransparent(true);
      } else {
        setIsTransparent(false);
      }
    };

    handleScroll(); // Run immediately on page load
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`edu-header header-style-3 header-fullwidth no-topbar ${
          isTransparent ? "header-transparent" : "header-solid"
        }`}
      >
        <div id="edu-sticky-placeholder"></div>
        <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
          <div className="container-fluid">
            <div className="header-navbar">
              {/* === LOGO SECTION === */}
              <div className="header-brand">
                <div className="logo">
                  <Link href="/">
                    <a>
                      {/* ✅ Switch logos based on transparency */}
                      <img
                        className="logo-light"
                        src="/assets/images/logo/logo-dark.png"
                        alt="Logo"
                      />
                      <img
                        className="logo-dark"
                        src="/assets/images/logo/logo-white.png"
                        alt="Logo"
                      />
                    </a>
                  </Link>
                </div>
              </div>

              {/* === MENU === */}
              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <InstituteMenu />
                </nav>
              </div>

              {/* === RIGHT ACTIONS === */}
              <div className="header-right">
                <ul className="header-action">
                  <li className="apply-now-btn">
                    <button
                      className="btn btn-primary btn-apply"
                      onClick={() => {
                        // Trigger the admission popup elsewhere on the page
                        try { window.dispatchEvent(new CustomEvent('openAdmissionPopup')); } catch (err) { /* ignore */ }
                        // Keep existing behavior (opens external site in new tab)
                        // window.open(
                        //   "https://ad",
                        //   "_blank"
                        // );
                      }}
                    >
                      Apply Now
                    </button>
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

        <SearchPopup
          isSearchOpen={isSearchOpen}
          setIsSearchOpen={setIsSearchOpen}
        />
      </header>

      <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />

      {/* === STYLES === */}
      <style jsx>{`
        @import url("https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap");

        .edu-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: background-color 0.4s ease, box-shadow 0.4s ease;
          font-family: "Poppins", sans-serif;
        }

        /* ✅ TRANSPARENT HEADER (only over hero) */
        .header-transparent {
          background: transparent !important;
          border: none !important;
          box-shadow: none !important;
          backdrop-filter: none;
        }

       .header-transparent .header-mainmenu {
          background: transparent !important;
          border-bottom: none !important;
          box-shadow: none !important;
          padding-top: 20px;
        }

        .header-transparent .logo-light {
          display: block;
        }

        .header-transparent .logo-dark {
          display: none;
        }

        .header-transparent
          .mainmenu-nav
          :global(.mainmenu)
          :global(> li)
          :global(> a) {
          color: #ffffff;
          transition: color 0.3s ease;
        }

        .header-transparent
          .mainmenu-nav
          :global(.mainmenu)
          :global(> li)
          :global(> a:hover) {
          color: #ffd94a;
        }

        .header-transparent .apply-now-btn .btn {
          background-color: #ffb633;
          color: #002b6b;
        }

        .header-transparent .header-action :global(.hamberger-button) {
          color: white;
        }

        /* ✅ SOLID WHITE HEADER (after hero) */
        .header-solid {
          background: #ffffff !important;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.08);
        }

        .header-solid .logo-light {
          display: none;
        }

        .header-solid .logo-dark {
          display: block;
          width: 250px;
          height: 100px;
          object-fit: contain;
        }

        .header-solid
          .mainmenu-nav
          :global(.mainmenu)
          :global(> li)
          :global(> a) {
          color: #002b6b;
        }

        .header-solid
          .mainmenu-nav
          :global(.mainmenu)
          :global(> li)
          :global(> a:hover) {
          color: #0071ce;
        }

        .header-solid .apply-now-btn .btn {
          background-color: #ffb633;
          color: #002b6b;
        }

        .apply-now-btn .btn {
          padding: 10px 24px;
          border: none;
          border-radius: 8px;
          font-size: 1.4rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .apply-now-btn .btn:hover {
          background-color: #ffcf66;
        }

        .header-action {
          border-left: none;
        }

      /* ✅ MOBILE RESPONSIVENESS */
@media (max-width: 768px) {

  /* Header always stays on top */
  .edu-header {
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 9999;
  }

  /* 🔹 Home Page — Transparent initially */
  .home-page .header-transparent {
    background: transparent !important;
    transition: background 0.3s ease-in-out;
  }

  /* 🔹 After Scroll — turns white for visibility */
  .home-page .header-transparent.scrolled {
    background: #ffffff !important;
  }

  /* Logo behavior */
  .header-transparent .logo-light {
    display: block;
  }

  .header-transparent.scrolled .logo-light {
    display: none;
  }

  .header-transparent .logo-dark {
    display: none;
  }

  .header-transparent.scrolled .logo-dark {
    display: block;
  }

  /* Menu link color */
  .header-transparent
    .mainmenu-nav
    :global(.mainmenu)
    :global(> li)
    :global(> a) {
    color: #fff; /* White on transparency */
  }

  .header-transparent.scrolled
    .mainmenu-nav
    :global(.mainmenu)
    :global(> li)
    :global(> a) {
    color: #333; /* Dark on white background */
  }
}
    .apply-now-btn .btn {
    font-size: 1.1rem;     
    padding: 8px 12px;   
    width: 100%;           
    border-radius: 5px;   
    display: block;
    text-align: center;
  }
        }
      `}</style>
    </>
  );
};

export default HeaderThree;