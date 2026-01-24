// "use client";

// import FacebookIcon from "@mui/icons-material/Facebook";
// import XIcon from "@mui/icons-material/X";
// import InstagramIcon from "@mui/icons-material/Instagram";
// import LinkedInIcon from "@mui/icons-material/LinkedIn";
// import YouTubeIcon from "@mui/icons-material/YouTube";

// import React from "react";

// const Footer = () => {
//   return (
//     <>
//       <footer className="footer">
//         <div className="footer-container">
//           {/* LEFT */}
//           <div className="footer-brand">
//             <div className="logo">
//               <img src="/assets/images/logo/logo-dark.png" alt="logo" />
//             </div>

//             <p>
//               Established in 2010, Sri Shanmugha Educational Institutions has
//               been a beacon of excellence in higher education, fostering
//               innovation, research, and holistic development of students across
//               multiple disciplines.
//             </p>

//             <div className="stats">
//               <div className="stat">
//                 <strong>NAAC A+</strong>
//                 <span>Accredited</span>
//               </div>
//               <div className="stat">
//                 <strong>5000+</strong>
//                 <span>Students</span>
//               </div>
//             </div>

//             <div className="socials">
//               <a href="https://facebook.com" target="_blank">
//                 <FacebookIcon />
//               </a>
//               <a href="https://x.com" target="_blank">
//                 <XIcon />
//               </a>
//               <a
//                 href="https://www.instagram.com/shanmughainstitutions/?hl=en"
//                 target="_blank"
//               >
//                 <InstagramIcon />
//               </a>
//               <a
//                 href="https://www.linkedin.com/company/sri-shanmugha-educational-institutions/"
//                 target="_blank"
//               >
//                 <LinkedInIcon />
//               </a>
//               <a
//                 href="https://www.youtube.com/@shanmughalive3140"
//                 target="_blank"
//               >
//                 <YouTubeIcon />
//               </a>
//             </div>
//           </div>

//           {/* LINKS */}
//           <div className="row-tab">
//             <div className="row">
//               <div className="col-6">
//                 <div className="footer-links">
//                   <h4>Quick Links</h4>
//                   <a>About Us</a>
//                   <a>Admissions</a>
//                   {/* <a>Academics</a>
//                   <a>Placements</a>
//                   <a>Research</a>
//                   <a>Campus Life</a> */}
//                 </div>
//               </div>
//               <div className="col-6">
//                 <div className="footer-links">
//                   <h4>Institution</h4>
//                   <a>Engineering & Technology</a>
//                   <a>Pharmacy</a>
//                   <a>Nursing</a>
//                   <a>Allied Health Sciences</a>
//                 </div>
//               </div>
//             </div>

//             {/* <div className="footer-links">
//               <h4>Resources</h4>
//               <a>Students</a>
//               <a>Faculty</a>
//               <a>Parents</a>
//               <a>Alumni</a>
//               <a>Visitors</a>
//               <a>Career Centre</a>

//               <div className="contact">
//                 <p>📍 Tiruchengode, Salem District, Tamil Nadu - 637211</p>
//                 <p>📞 0428-335-9999</p>
//                 <p>✉ info@shanmugha.edu.in</p>
//                 <p>🕘 Mon - Fri: 9:00 AM - 5:00 PM</p>
//               </div>
//             </div> */}
//           </div>
//         </div>

//         {/* SUBSCRIBE */}
//         <div className="footer-subscribe">
//           <div>
//             <h4>Stay Updated</h4>
//             <p>Get the latest news and updates</p>
//           </div>
//           <div className="subscribe-box">
//             <input placeholder="Enter your email" />
//             <button>Subscribe</button>
//           </div>
//         </div>

//         {/* BOTTOM */}
//         <div className="footer-bottom">
//           <span>© 2025 Sri Shanmugha Educational Institutions</span>
//           <div className="bottom-links">
//             <a>Privacy Policy</a>
//             <a>Terms of Service</a>
//             <a>Sitemap</a>
//           </div>
//           <div className="badges">
//             <span className="badge green">NAAC A+ Accredited</span>
//             <span className="badge blue">ISO Certified</span>
//           </div>
//         </div>
//       </footer>

//       <style jsx>{`
//         .footer {
//           background: linear-gradient(180deg, #0b1424, #0a1220);
//           color: #cbd5e1;
//           padding: 70px 24px 20px;
//         }

//         .footer-container {
//           max-width: 1300px;
//           margin: auto;
//           display: grid;
//           gap: 20px;
//           grid-template-columns: 2fr 2.5fr 1.2fr; 
//         }

//         .logo {
//           width: 220px; /* adjust as needed */
//         }

//         .row {
//   display: flex;
//   justify-content: flex-start; 
//   align-items: flex-start;    
//   margin-right: 0;             
//   gap: 40px;                   
// }

//         .logo img {
//           width: 100%;
//           height: auto;
//           display: block;
//         }

//         .footer-brand p {
//           margin: 16px 0;
//           line-height: 1.6;
//         }

//         .stats {
//           display: flex;
//           gap: 16px;
//           margin: 20px 0;
//         }

//         .stat {
//           background: rgba(255, 255, 255, 0.05);
//           padding: 12px 16px;
//           border-radius: 10px;
//         }

//         .stat strong {
//           color: #facc15;
//         }

//         .socials {
//           display: flex;
//           flex-direction: row; /* horizontal icons */
//           gap: 12px;
//         }

//         .socials a {
//           width: 40px;
//           height: 40px;
//           border-radius: 50%;
//           background: rgba(255, 255, 255, 0.08);

//           display: flex;
//           align-items: center;
//           justify-content: center;

//           color: #cbd5e1;
//           transition: all 0.25s ease;
//         }

//         .socials a:hover {
//           background: #2563eb;
//           color: #ffffff;
//           transform: translateY(-2px);
//         }

//         .socials svg {
//           width: 20px;
//           height: 20px;
//           fill: currentColor;
//         }

//         .footer-links h4 {
//           color: #fff;
//           margin-bottom: 10px;
          
//         }

//         .footer-links a {
//           display: block;
//           margin-bottom: 10px;
//           cursor: pointer;
//         }

//         .footer-links a:hover {
//           color: #22c55e;
//         }

//         .contact {
//           margin-top: 16px;
//           font-size: 14px;
//           line-height: 1.8;
//         }

//         .footer-subscribe {
//           max-width: 1300px;
//           margin: 50px auto 0;
//           padding-top: 30px;
//           border-top: 1px solid rgba(255, 255, 255, 0.1);
//           display: flex;
//           justify-content: space-between;
//           gap: 20px;
//         }

//         .subscribe-box {
//           display: flex;
//         }

//         .subscribe-box input {
//           padding: 12px;
//           border-radius: 8px 0 0 8px;
//           border: none;
//           outline: none;
//           width: 240px;
//         }

//         .subscribe-box button {
//           padding: 12px 20px;
//           background: #2563eb;
//           color: #fff;
//           border: none;
//           border-radius: 0 8px 8px 0;
//           cursor: pointer;
//         }

//         .footer-bottom {
//           max-width: 1300px;
//           margin: 30px auto 0;
//           display: flex;
//           justify-content: space-between;
//           align-items: center;
//           font-size: 14px;
//           flex-wrap: wrap;
//           gap: 16px;
//         }

//         .bottom-links a {
//           margin: 0 10px;
//           cursor: pointer;
//         }

//         .badges {
//           display: flex;
//           gap: 10px;
//         }

//         .badge {
//           padding: 6px 12px;
//           border-radius: 999px;
//           font-size: 12px;
//           font-weight: 600;
//         }

//         .badge.green {
//           background: #16a34a;
//           color: #fff;
//         }

//         .badge.blue {
//           background: #2563eb;
//           color: #fff;
//         }

//         @media (max-width: 900px) {
//           .footer-container {
//             grid-template-columns: 1fr;
//           }

//           .footer-subscribe {
//             flex-direction: column;
//           }
//         }

//         @media (min-width: 393px) {
//           .row {
//             display: flex;
//           }

//           .col-6 {
//             margin-right: 40;
//             width: 280px;
//           }
//         }

//         @media (min-width: 820px) {
//           .footer-container {
//             display: flex;
//           }

//           .row {
//             display: flex;
//           }

//           .row-tab {
//             display: flex;
//           }

//           .col-6 {
//             margin-right: 90;
//           }
//         }

//         @media (min-width: 1559px) {
//           .footer-container {
//             display: flex;
//           }

//           .row {
//             display: flex;
//           }

//           .row-tab {
//             display: flex;
//           }

//           .col-6 {
//             margin-right: 90;
//           }

//           .contact {
//             width: calc(100% + 20rem);
//             margin-left: -17rem;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default Footer;



"use client";

import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import AboutUs from "./AboutUs";

import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-container">
          {/* LEFT SECTION: BRANDING */}
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

          {/* RIGHT SECTION: LINKS */}
          <div className="footer-links-wrapper">
            <div className="footer-links">
              <h4>Quick Links</h4>
               <a href="/about" >
                  About Us
                </a>
              <a href="https://admissions.shanmugha.edu.in/">Admissions</a>
              {/* <a>Academics</a>
              <a>Placements</a>
              <a>Research</a>
              <a>Campus Life</a> */}

            </div>
            <div className="footer-links">
              <h4>Institution</h4>
              <a href="https://engineering.shanmugha.edu.in/" >Engineering & Technology</a>
              <a href="https://shanmughapharmacy.edu.in/">Pharmacy</a>
              <a href="https://shanmughanursing.edu.in/">Nursing</a>
              <a href="https://shanmugha-ahs-website.onrender.com">Allied Health Sciences</a>
              <a href="https://shanmugha-msr-website.onrender.com">Medical Science & Research</a>
            </div>
          </div>
        </div>

        {/* SUBSCRIBE SECTION */}
        <div className="footer-subscribe">
          <div className="subscribe-text">
            <h4>Stay Updated</h4>
            <p>Get the latest news and updates</p>
          </div>
          <div className="subscribe-box">
            <input placeholder="Enter your email" />
            <button>Subscribe</button>
          </div>
        </div>

        {/* BOTTOM BAR */}
        <div className="footer-bottom">
          <span>© 2026 Sri Shanmugha Educational Institutions</span>
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
          padding: 60px 24px 30px;
          font-family: sans-serif;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 40px;
        }

        /* Branding Section */
        .footer-brand {
          flex: 1;
          min-width: 300px;
          max-width: 650px;
        }

        .logo {
          width: 220px;
          margin-bottom: 20px;
        }

        .logo img {
          width: 100%;
          height: auto;
        }

        .footer-brand p {
          line-height: 1.6;
          font-size: 15px;
          margin-bottom: 24px;
        }

        /* Stats & Socials */
        .stats {
          display: flex;
          gap: 12px;
          margin-bottom: 24px;
        }

        .stat {
          background: rgba(255, 255, 255, 0.05);
          padding: 10px 16px;
          border-radius: 8px;
          display: flex;
          flex-direction: column;
        }

        .stat strong {
          color: #facc15;
          font-size: 16px;
        }

        .stat span {
          font-size: 14px;
        }

        .socials {
          display: flex;
          gap: 12px;
        }

        .socials a {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: rgba(255, 255, 255, 0.08);
          display: flex;
          align-items: center;
          justify-content: center;
          color: #cbd5e1;
          transition: 0.3s;
        }

        .socials a:hover {
          background: #2563eb;
          color: #fff;
          transform: translateY(-3px);
        }

        /* Link Grouping */
        .footer-links-wrapper {
          display: flex;
          gap: 60px;
          flex-wrap: wrap;
        }

        .footer-links h4 {
          color: #fff;
          margin-bottom: 20px;
          font-size: 18px;
        }

        .footer-links a {
          display: block;
          margin-bottom: 12px;
          font-size: 15px;
          text-decoration: none;
          color: inherit;
          transition: 0.2s;
          cursor: pointer;
        }

        .footer-links a:hover {
          color: #22c55e;
          padding-left: 4px;
        }

        /* Newsletter */
        .footer-subscribe {
          max-width: 1200px;
          margin: 60px auto 0;
          padding-top: 40px;
          border-top: 1px solid rgba(255, 255, 255, 0.1);
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 20px;
        }

        .subscribe-text h4 {
          color: #fff;
          margin-bottom: 4px;
        }

        .subscribe-box {
          display: flex;
          width: 100%;
          max-width: 400px;
        }

        .subscribe-box input {
          flex: 1;
          padding: 12px 16px;
          border-radius: 8px 0 0 8px;
          border: 1px solid rgba(255, 255, 255, 0.1);
          background: rgba(255, 255, 255, 0.05);
          color: #fff;
          outline: none;
        }

        .subscribe-box button {
          padding: 12px 24px;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 0 8px 8px 0;
          font-weight: 600;
          cursor: pointer;
          transition: 0.2s;
        }

        .subscribe-box button:hover {
          background: #1d4ed8;
        }

        /* Bottom Bar */
        .footer-bottom {
          max-width: 1200px;
          margin: 40px auto 0;
          padding-top: 20px;
          border-top: 1px solid rgba(255, 255, 255, 0.05);
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 13px;
          flex-wrap: wrap;
          gap: 20px;
        }

        .bottom-links a {
          margin-right: 20px;
          cursor: pointer;
        }

        .badges {
          display: flex;
          gap: 10px;
        }

        .badge {
          padding: 4px 12px;
          border-radius: 4px;
          font-weight: 600;
        }

        .badge.green { background: #16a34a; }
        .badge.blue { background: #2563eb; }

        /* RESPONSIVE BREAKPOINTS */
        
        /* Tablets (iPad, etc.) */
        @media (max-width: 1024px) {
          .footer-container {
            justify-content: flex-start;
          }
          .footer-links-wrapper {
            gap: 40px;
          }
        }

        /* Mobile Devices */
        @media (max-width: 768px) {
          .footer {
            padding: 40px 20px 20px;
          }

          .footer-container {
            flex-direction: column;
            gap: 40px;
          }

          .footer-brand {
            max-width: 100%;
          }

          .footer-links-wrapper {
            width: 100%;
            justify-content: space-between;
          }

          .footer-subscribe {
            flex-direction: column;
            align-items: flex-start;
          }

          .subscribe-box {
            max-width: 100%;
          }

          .footer-bottom {
            flex-direction: column;
            text-align: center;
          }

          .bottom-links a {
            margin: 0 10px;
          }
        }

        @media (max-width: 480px) {
          .footer-links-wrapper {
            flex-direction: column;
            gap: 30px;
          }
        }
      `}</style>
    </>
  );
};

export default Footer;