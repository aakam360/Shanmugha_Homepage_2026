"use client";
import React, { useEffect, useState, useRef } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  
  // Desktop Dropdown States
  const [instOpen, setInstOpen] = useState(false);
  const [contactOpen, setContactOpen] = useState(false);
  
  const [scrolled, setScrolled] = useState(false);
  
  // Ref to detect clicks outside
  const navRef = useRef(null);

  // Mock data
  const institutionsData = [
    { label: "Engineering College", icon: "🏛️", href: "https://engineering.shanmugha.edu.in/" },
    // { label: "Arts & Science", icon: "📚", href: "#" },
    { label: "Pharmacy", icon: "💊", href: "https://shanmughapharmacy.edu.in/" },
    { label: "Nursing", icon: "⚕️", href: "https://shanmughanursing.edu.in/" },
    { label: "Medical Science & Research", icon: "💼", href: "https://shanmugha-msr-website.onrender.com" },
    { label: "Allied Health Science", icon: "🎓", href: "https://shanmugha-ahs-website.onrender.com" },
  ];

  const contactLinks = [
    { label: "Email", href: "mailto:admissions@shanmugha.edu.in" },
    { label: "Phone", href: "tel:0428-335-9999" },
    { label: "Address", href: "#" },
  ];

  // Scroll detection
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 120);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Click Outside detection
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setInstOpen(false);
        setContactOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const closeAll = () => {
    setMenuOpen(false);
    setInstOpen(false);
    setContactOpen(false);
  };

  // Prevent scroll when mobile menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [menuOpen]);

  // Toggles for Desktop Click
  const toggleInst = (e) => {
    e.preventDefault();
    setInstOpen(!instOpen);
    setContactOpen(false);
  };

  const toggleContact = (e) => {
    e.preventDefault();
    setContactOpen(!contactOpen);
    setInstOpen(false);
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

          {/* NAV - DESKTOP */}
          <nav className="header-nav desktop-nav" ref={navRef}>
            <ul className="menu">
              <li>
                <a href="/" onClick={closeAll}>
                  Home
                </a>
              </li>

              {/* Institutions Dropdown */}
              <li 
                className={`dropdown ${instOpen ? "active" : ""}`}
                onMouseEnter={() => setInstOpen(true)}
                onMouseLeave={() => setInstOpen(false)}
              >
                <button 
                  className="dropdown-title"
                  onClick={toggleInst}
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

              {/* Contact Dropdown */}
              <li 
                className={`dropdown ${contactOpen ? "active" : ""}`}
                onMouseEnter={() => setContactOpen(true)}
                onMouseLeave={() => setContactOpen(false)}
              >
                <button 
                  className="dropdown-title"
                  onClick={toggleContact}
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
          <div className="header-actions desktop-actions">
            <div className="divider"></div>
            <button className="apply-btn" onClick={() => window.dispatchEvent(new Event('openAdmissionPopup'))}>
              Apply Now
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            className={`hamburger mobile-hamburger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        <nav className={`mobile-menu ${menuOpen ? "open" : ""}`}>
          <div className="mobile-menu-content">
            <div className="mobile-menu-section">
              <button
                className={`mobile-menu-item dropdown-btn ${instOpen ? "open" : ""}`}
                onClick={() => setInstOpen(!instOpen)}
              >
                <span>Our Institutions</span>
                <span className="arrow">▾</span>
              </button>
              {instOpen && (
                <div className="mobile-dropdown-content">
                  {institutionsData.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="mobile-dropdown-item"
                      onClick={closeAll}
                    >
                      <span className="icon">{item.icon}</span>
                      <span>{item.label}</span>
                    </a>
                  ))}
                </div>
              )}
            </div>

            <div className="mobile-menu-section">
              <a href="/" className="mobile-menu-item" onClick={closeAll}>
                Home
              </a>
            </div>

            <div className="mobile-menu-section">
              <a href="/about" className="mobile-menu-item" onClick={closeAll}>
                About Us
              </a>
            </div>

            <div className="mobile-menu-section">
              <button
                className={`mobile-menu-item dropdown-btn ${contactOpen ? "open" : ""}`}
                onClick={() => setContactOpen(!contactOpen)}
              >
                <span>Contact</span>
                <span className="arrow">▾</span>
              </button>
              {contactOpen && (
                <div className="mobile-dropdown-content">
                  {contactLinks.map((item, i) => (
                    <a
                      key={i}
                      href={item.href}
                      className="mobile-dropdown-item"
                      onClick={closeAll}
                    >
                      {item.label}
                    </a>
                  ))}
                </div>
              )}
            </div>

            <button className="apply-btn mobile-apply-btn" onClick={() => { setMenuOpen(false); window.dispatchEvent(new Event('openAdmissionPopup')); }}>
              Apply Now
            </button>
          </div>
        </nav>
      </header>

      <style jsx>{`
        /* ================= BASE ================= */
        .edu-header {
          position: fixed;
          top: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          background: transparent;
        }

        .edu-header.scrolled {
          background: #ffffff;
          box-shadow: 0 6px 20px rgba(0, 0, 0, 0.15);
        }

        .header-container {
          height: 80px;
          max-width: 100%;
          margin: 0 auto;
          padding: 0 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
        }

        /* ================= LOGO ================= */
        .header-logo {
          flex-shrink: 0;
          height: 80px;
          display: flex;
          align-items: center;
        }

        .header-logo img {
          max-width: 300px;
          height: auto;
          object-fit: contain;
        }

        /* ================= DESKTOP NAV ================= */
        .desktop-nav {
          flex: 1;
          display: flex;
          justify-content: flex-end; /* Pushes menu right */
          padding-right: 30px;
        }

        .menu {
          display: flex;
          gap: 40px;
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
          transition: color 0.2s ease;
          padding: 10px 0; /* Added padding to help hover area */
          position: relative;
        }

        .edu-header.scrolled .menu a,
        .edu-header.scrolled .dropdown-title {
          color: #1a458e;
        }

        .menu a:hover,
        .dropdown-title:hover {
          opacity: 0.8;
        }

        .arrow {
          font-size: 12px;
        }

        /* ================= DROPDOWNS ================= */
        .dropdown {
          position: relative;
          height: 100%;
          display: flex;
          align-items: center;
        }

        /* Combined Logic: Show if Hovered OR Active (clicked) 
        */
        .dropdown:hover .institutions-menu,
        .dropdown:hover .contact-menu,
        .dropdown.active .institutions-menu,
        .dropdown.active .contact-menu {
          opacity: 1;
          visibility: visible;
          transform: translateX(-50%) translateY(0);
          pointer-events: auto;
        }

        /* Institutions Dropdown Box */
        .institutions-menu {
          position: absolute;
          top: 100%; /* Sits exactly below parent */
          left: 50%;
          transform: translateX(-50%) translateY(10px); /* Initial slide state */
          background: #ffffff;
          padding: 24px 28px;
          border-radius: 14px;
          box-shadow: 0 18px 45px rgba(0, 0, 0, 0.15);
          width: 900px;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 26px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease;
          z-index: 2000;
          border-bottom: 3px solid #1e63e9;
          margin-top: 0px; 
        }

        /* THE BRIDGE: 
           This transparent pseudo-element fills the gap between the nav item 
           and the dropdown box so the cursor doesn't "fall through".
        */
        .institutions-menu::before,
        .contact-menu::before {
          content: '';
          position: absolute;
          top: -20px; /* Extends upwards to meet the nav */
          left: 0;
          width: 100%;
          height: 20px;
          background: transparent;
        }

        /* Institution Items */
        .institution-item {
          display: flex;
          align-items: center;
          gap: 14px;
          /* Changed to Gray as requested */
          color: #4b5563 !important; 
          font-size: 15px;
          font-weight: 700;
          text-decoration: none;
          padding: 8px;
          transition: all 0.2s ease;
          border-radius: 8px;
        }

        .institution-item:hover {
          color: #1e63e9 !important; /* Blue on hover */
          background: #f0f4f8;
        }

        .institution-item img {
          width: 30px;
          height: 30px;
          object-fit: contain;
          flex-shrink: 0;
        }

        /* Contact Dropdown Box */
        .contact-menu {
          position: absolute;
          top: 100%;
          left: 50%;
          transform: translateX(-50%) translateY(10px);
          background: #ffffff;
          padding: 10px 0;
          border-radius: 10px;
          box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
          min-width: 220px;
          opacity: 0;
          visibility: hidden;
          transition: all 0.25s ease;
          z-index: 2000;
          list-style: none;
        }

        .contact-menu li {
          list-style: none;
        }

        .contact-menu a {
          display: block;
          padding: 12px 18px;
          font-size: 15px;
          font-weight: 600;
          /* Changed to Gray as requested */
          color: #4b5563 !important;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .contact-menu a:hover {
          color: #1e63e9 !important;
          background: #f0f4f8;
        }

        /* ================= ACTIONS ================= */
        .header-actions {
          display: flex;
          align-items: center;
          gap: 20px;
          flex-shrink: 0;
        }

        .divider {
          width: 1px;
          height: 35px;
          background: rgba(255, 255, 255, 0.8);
        }

        .edu-header.scrolled .divider {
          background: rgba(0, 0, 0, 0.15);
        }

        .apply-btn {
          background: #ffb703;
          color: #1f2f54;
          border: none;
          padding: 10px 24px;
          font-weight: 700;
          font-size: 14px;
          border-radius: 6px;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .apply-btn:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
        }

        /* ================= HAMBURGER ================= */
        .mobile-hamburger {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
          padding: 8px;
          z-index: 1001;
        }

        .mobile-hamburger span {
          width: 24px;
          height: 2.5px;
          background: #ffffff;
          border-radius: 2px;
          transition: all 0.3s ease;
        }

        .edu-header.scrolled .mobile-hamburger span {
          background: #1a458e;
        }

        .mobile-hamburger.open span:nth-child(1) {
          transform: rotate(45deg) translate(8px, 8px);
        }

        .mobile-hamburger.open span:nth-child(2) {
          opacity: 0;
        }

        .mobile-hamburger.open span:nth-child(3) {
          transform: rotate(-45deg) translate(7px, -7px);
        }

        /* ================= MOBILE MENU ================= */
        .mobile-menu {
          display: none;
          position: fixed;
          top: 80px;
          left: 0;
          right: 0;
          bottom: 0;
          background: #ffffff;
          overflow-y: auto;
          transform: translateX(-100%);
          transition: transform 0.3s ease;
          z-index: 999;
        }

        .mobile-menu.open {
          transform: translateX(0);
        }

        .mobile-menu-content {
          padding: 20px 0;
        }

        .mobile-menu-section {
          border-bottom: 1px solid #e5e7eb;
        }

        .mobile-menu-item {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          padding: 16px 20px;
          background: none;
          border: none;
          font-size: 16px;
          font-weight: 600;
          color: #1a458e;
          text-decoration: none;
          text-align: left;
        }

        .mobile-dropdown-content {
          background: #f8fafc;
          padding: 8px 0;
          display: flex;
          flex-direction: column;
        }

        .mobile-dropdown-item {
          display: flex;
          align-items: center;
          gap: 12px;
          padding: 14px 20px;
          font-size: 15px;
          color: #4b5563;
          text-decoration: none;
          border-bottom: 1px solid #e5e7eb;
        }

        .mobile-apply-btn {
          margin: 20px;
          width: calc(100% - 40px);
        }

        /* ================= RESPONSIVE ================= */
        @media (max-width: 1024px) {
          .desktop-nav,
          .desktop-actions {
            display: none !important;
          }
          .mobile-hamburger {
            display: flex;
          }
          .mobile-menu {
            display: block;
          }
          .header-container {
            padding: 0 16px;
          }
          .header-logo img {
            max-width: 220px;
          }
        }

        @media (max-width: 768px) {
          .header-container {
            height: 70px;
            padding: 0 12px;
          }
          .header-logo img {
            max-width: 180px;
          }
          .mobile-menu {
            top: 70px;
          }
        }
      `}</style>
    </>
  );
};

export default Header;