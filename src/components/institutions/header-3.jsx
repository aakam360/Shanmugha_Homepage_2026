"use client";
import React, { useEffect, useState } from "react";
import { institutionsData } from "../institutions/institutionsData";
import { contactLinks } from "../institutions/contactLinks";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [instOpen, setInstOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setInstOpen(false);
    setContactOpen(false);
  };

  return (
    <>
      <header className={`edu-header ${scrolled ? "scrolled" : ""}`}>
        <div className="header-container">
          {/* LOGO */}
          <div className="header-logo">
            <img
              src={
                scrolled
                  ? "/assets/images/logo/logo-white.png"
                  : "/assets/images/logo/logo-dark.png"
              }
              alt="Sri Shanmugha Educational Institutions"
            />
          </div>

          {/* NAV */}
          <nav className={`header-nav ${menuOpen ? "open" : ""}`}>
            <ul className="menu">
              <li>
                <a href="/" onClick={closeAll}>
                  Home
                </a>
              </li>

              <li className={`dropdown ${instOpen ? "open" : ""}`}>
                <button
                  className="dropdown-title"
                  onClick={() => setInstOpen(!instOpen)}
                >
                  Our Institutions <span className="arrow">▾</span>
                </button>

                <div className="institutions-menu">
                  {institutionsData.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="institution-item"
                      onClick={closeAll}
                    >
                      <img src={item.icon} alt={item.label} />
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              </li>

              <li>
                <a href="/about" onClick={closeAll}>
                  About Us
                </a>
              </li>

              <li className={`dropdown ${contactOpen ? "open" : ""}`}>
                <button
                  className="dropdown-title"
                  onClick={() => setContactOpen(!contactOpen)}
                >
                  Contact <span className="arrow">▾</span>
                </button>

                <ul className="contact-menu">
                  {contactLinks.map((item, i) => (
                    <li key={i}>
                      <a href={item.href} onClick={closeAll}>
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
            </ul>
          </nav>

          {/* ACTIONS */}
          <div className="header-actions">
            <div className="divider" />
            <button className="apply-btn">Apply Now</button>

            <div className="hamburger" onClick={() => setMenuOpen(!menuOpen)}>
              <span />
              <span />
              <span />
            </div>
          </div>
        </div>
      </header>

      {/* ================= CSS ================= */}
      <style jsx>{`
        /* ================= BASE ================= */
        .edu-header {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .edu-header.scrolled {
          background: #ffffff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        /* ================= CONTAINER ================= */
        .header-container {
          height: 80px;
          margin: 0 auto;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        /* ================= LOGO ================= */
        .header-logo img {
          max-width: 300px;
          margin-top: 20px;
          margin-left: 40px;
        }

        /* ================= NAV ================= */
        .header-nav {
          flex: 1;
          display: flex;
          justify-content: center;
          margin-right: -1000px;
        }

        .menu {
          display: flex;
          gap: 32px;
          list-style: none;
          margin: 0;
          padding: 0;
          align-items: center;
        }

        .menu a,
        .dropdown-title {
          font-size: 16px;
          font-weight: 600;
          color: #ffffff;
          background: none;
          border: none;
          cursor: pointer;
          text-decoration: none;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .edu-header.scrolled .menu a,
        .edu-header.scrolled .dropdown-title {
          color: #1a458e;
        }

        /* ================= DROPDOWNS ================= */
        .dropdown {
          position: relative;
        }

        /* Dropdown container */
        .institutions-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: #ffffff;
          padding: 24px 28px;
          border-radius: 14px;
          // box-shadow: 0 18px 45px rgba(0, 0, 0, 0.15);
          width: min(900px, 95vw);

          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;

          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease;
          z-index: 2000;

          border-bottom: 3px solid #1e63e9;
        }

        .dropdown:hover .institutions-menu {
          opacity: 1;
          visibility: visible;
        }

        /* ================= INSTITUTION ITEM ================= */
        .institution-item {
          display: flex;
          align-items: center;
          gap: 14px;
          color: #31962d;
          font-size: 15px;
          font-weight: 700;

          text-decoration: none;

          padding: 6px 4px;
          transition: color 0.2s ease;
        }

        /* Hover = text only changes */
        .institution-item:hover {
          color: #23c49e; /* ✅ green hover */
        }

        /* Icon fix */
        .institution-item img {
          width: 30px;
          height: 30px;
          object-fit: contain;
          flex-shrink: 0;

          /* Ensure visibility on all backgrounds */
          background: transparent;
        }

        .institutions-menu a.institution-item {
          color: #7b889a !important; /* force override */
          text-decoration: none;
        }

        .institutions-menu a.institution-item:hover {
          color: #23c49e !important;
        }

        /* ================= CONTACT MENU ================= */
        .contact-menu {
          position: absolute;
          top: calc(100% + 12px);
          left: 50%;
          transform: translateX(-50%);
          background: #ffffff;
          padding: 10px 0;
          border-radius: 10px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          min-width: 220px;

          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease;
        }

        .dropdown:hover .contact-menu {
          opacity: 1;
          visibility: visible;
        }

        .contact-menu li {
          list-style: none;
        }

        .contact-menu a {
          display: block;
          padding: 12px 18px;
          font-size: 15px;
          font-weight: 700;

          color: #7b889a !important; /* default */
          text-decoration: none;
        }

        .contact-menu a:hover {
          color: #23c49e !important; /* hover */
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1024px) {
          .institutions-menu {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 768px) {
          .institutions-menu {
            position: static;
            transform: none;
            box-shadow: none;
            border-bottom: none;
            grid-template-columns: 1fr;
            padding: 10px 0;
          }

          .institution-item {
            padding: 14px 20px;
            font-size: 16px;
          }
        }

        /* ================= ACTIONS ================= */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 14px;
        }

        .divider {
          width: 1px;
          height: 28px;
          background: rgba(255, 255, 255, 0.5);
        }

        .edu-header.scrolled .divider {
          background: rgba(0, 0, 0, 0.25);
        }

        .apply-btn {
          background: #ffb703;
          color: #1f2f54;
          border: none;
          padding: 8px 18px;
          font-weight: 700;
          border-radius: 6px;
          cursor: pointer;
        }

        /* ================= HAMBURGER ================= */
        .hamburger {
          display: none;
          flex-direction: column;
          gap: 4px;
          cursor: pointer;
        }

        .hamburger span {
          width: 22px;
          height: 2px;
          background: #ffffff;
        }

        .edu-header.scrolled .hamburger span {
          background: #1a458e;
        }

        /* ================= TABLET ================= */
        @media (max-width: 1024px) {
          .institutions-menu {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        /* ================= MOBILE ================= */
        @media (max-width: 768px) {
          .hamburger {
            display: flex;
          }

          .header-nav {
            position: fixed;
            inset: 0;
            background: #ffffff;
            display: none;
            padding-top: 80px;
            overflow-y: auto;
          }

          .header-nav.open {
            display: block;
          }

          .menu {
            flex-direction: column;
          }

          .menu li {
            border-bottom: 1px solid #e5e7eb;
          }

          .menu a,
          .dropdown-title {
            padding: 18px 20px;
            font-size: 18px;
            color: #1a458e;
            width: 100%;
            text-align: left;
          }

          .institutions-menu,
          .contact-menu {
            position: static;
            transform: none;
            box-shadow: none;
            display: none;
            background: #f8fafc;
            opacity: 1;
            visibility: visible;
            border-bottom: none;
          }

          .dropdown.open .institutions-menu,
          .dropdown.open .contact-menu {
            display: block;
          }
        }
      `}</style>
    </>
  );
};

export default Header;


