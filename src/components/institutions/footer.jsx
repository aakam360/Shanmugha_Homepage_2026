"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* LEFT */}
          <div className="footer-brand">
            <div className="logo">
              <img src="/assets/images/logo/logo-dark.png" alt="logo" />
            </div>

            <p>
              Established in 2010, Sri Shanmugha Educational Institutions has
              been a beacon of excellence in higher education, fostering
              innovation, research, and holistic development of students across
              multiple disciplines.
            </p>

            <div className="stats">
              <div className="stat">
                <strong>NAAC A+</strong>
                <span>Accredited</span>
              </div>
              <div className="stat">
                <strong>5000+</strong>
                <span>Students</span>
              </div>
            </div>

            <div className="socials">
              <a href="https://facebook.com" target="_blank">
                <FacebookIcon />
              </a>
              <a href="https://x.com" target="_blank">
                <XIcon />
              </a>
              <a
                href="https://www.instagram.com/shanmughainstitutions/?hl=en"
                target="_blank"
              >
                <InstagramIcon />
              </a>
              <a
                href="https://www.linkedin.com/company/sri-shanmugha-educational-institutions/"
                target="_blank"
              >
                <LinkedInIcon />
              </a>
              <a
                href="https://www.youtube.com/@shanmughalive3140"
                target="_blank"
              >
                <YouTubeIcon />
              </a>
            </div>
          </div>

          {/* LINKS */}
          <div className="row-tab">
            <div className="row">
              <div className="col-6">
                <div className="footer-links">
                  <h4>Quick Links</h4>
                  <a>About Us</a>
                  <a>Admissions</a>
                  <a>Academics</a>
                  <a>Placements</a>
                  <a>Research</a>
                  <a>Campus Life</a>
                </div>
              </div>
              <div className="col-6">
                <div className="footer-links">
                  <h4>Institution</h4>
                  <a>Engineering & Technology</a>
                  <a>Pharmacy</a>
                  <a>Nursing</a>
                  <a>Allied Health Sciences</a>
                </div>
              </div>
            </div>

            <div className="footer-links">
              <h4>Resources</h4>
              <a>Students</a>
              <a>Faculty</a>
              <a>Parents</a>
              <a>Alumni</a>
              <a>Visitors</a>
              <a>Career Centre</a>

              <div className="contact">
                <p>📍 Tiruchengode, Salem District, Tamil Nadu - 637211</p>
                <p>📞 0428-335-9999</p>
                <p>✉ info@shanmugha.edu.in</p>
                <p>🕘 Mon - Fri: 9:00 AM - 5:00 PM</p>
              </div>
            </div>
          </div>
        </div>

        {/* SUBSCRIBE */}
        <div className="footer-subscribe">
          <div>
            <h4>Stay Updated</h4>
            <p>Get the latest news and updates</p>
          </div>
          <div className="subscribe-box">
            <input placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="footer-bottom">
          <span>© 2025 Sri Shanmugha Educational Institutions</span>
          <div className="bottom-links">
            <a>Privacy Policy</a>
            <a>Terms of Service</a>
            <a>Sitemap</a>
          </div>
          <div className="badges">
            <span className="badge green">NAAC A+ Accredited</span>
            <span className="badge blue">ISO Certified</span>
          </div>
        </div>
      </footer>

      <style jsx>{`
        .footer {
          background: linear-gradient(180deg, #0b1424, #0a1220);
          color: #cbd5e1;
          padding: 70px 24px 20px;
        }

        .footer-container {
          max-width: 1300px;
          margin: auto;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr 1.2fr;
          gap: 50px;
        }

        .logo {
          width: 220px; /* adjust as needed */
        }

        .logo img {
          width: 100%;
          height: auto;
          display: block;
        }

        .footer-brand p {
          margin: 16px 0;
          line-height: 1.6;
        }

        .stats {
          display: flex;
          gap: 16px;
          margin: 20px 0;
        }

        .stat {
          background: rgba(255, 255, 255, 0.05);
          padding: 12px 16px;
          border-radius: 10px;
        }

        .stat strong {
          color: #facc15;
        }

        .socials {
          display: flex;
          flex-direction: row; /* horizontal icons */
          gap: 12px;
        }

        .socials a {
          width: 40px;
          height: 40px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);

          display: flex;
          align-items: center;
          justify-content: center;

          color: #cbd5e1;
          transition: all 0.25s ease;
        }

        .socials a:hover {
          background: #2563eb;
          color: #ffffff;
          transform: translateY(-2px);
        }

        .socials svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }

        .footer-links h4 {
          color: #fff;
          margin-bottom: 14px;
        }

        .footer-links a {
          display: block;
          margin-bottom: 10px;
          cursor: pointer;
        }

        .footer-links a:hover {
          color: #22c55e;
        }

        .contact {
          margin-top: 16px;
          font-size: 14px;
          line-height: 1.8;
        }

        .footer-subscribe {
          max-width: 1300px;
          margin: 50px auto 0;
          padding-top: 30px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          gap: 20px;
        }

        .subscribe-box {
          display: flex;
        }

        .subscribe-box input {
          padding: 12px;
          border-radius: 8px 0 0 8px;
          border: none;
          outline: none;
          width: 240px;
        }

        .subscribe-box button {
          padding: 12px 20px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 0 8px 8px 0;
          cursor: pointer;
        }

        .footer-bottom {
          max-width: 1300px;
          margin: 30px auto 0;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 14px;
          flex-wrap: wrap;
          gap: 16px;
        }

        .bottom-links a {
          margin: 0 10px;
          cursor: pointer;
        }

        .badges {
          display: flex;
          gap: 10px;
        }

        .badge {
          padding: 6px 12px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 600;
        }

        .badge.green {
          background: #16a34a;
          color: #fff;
        }

        .badge.blue {
          background: #2563eb;
          color: #fff;
        }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr;
          }

          .footer-subscribe {
            flex-direction: column;
          }
        }

        @media (min-width: 393px) {
          .row {
            display: flex;
          }

          .col-6 {
            margin-right: 90;
          }
        }

        @media (min-width: 820px) {
          .footer-container {
            display: flex;
          }

          .row {
            display: flex;
          }

          .row-tab {
            display: flex;
          }

          .col-6 {
            margin-right: 90;
          }
        }

        @media (min-width: 1559px) {
          .footer-container {
            display: flex;
          }

          .row {
            display: flex;
          }

          .row-tab {
            display: flex;
          }

          .col-6 {
            margin-right: 90;
          }

          .contact {
            width: calc(100% + 20rem);
            margin-left: -17rem;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;
