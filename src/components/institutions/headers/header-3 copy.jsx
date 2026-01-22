// // // import Link from 'next/link';
// // // import React, { useState } from 'react';
// // // import { useSelector } from 'react-redux';
// // // import SearchPopup from '../../components/common/popup-modal/search-popup';
// // // import OffCanvas from '../../components/common/sidebar/off-canvas';
// // // import useCartInfo from '../../hooks/use-cart-info';
// // // import useSticky from '../../hooks/use-sticky';
// // // import { wishlistItems } from '../../redux/features/wishlist-slice';
// // // import MainMenu from './component/main-menu';

// // // import InstituteMenu from './component/institute-menu';

// // // const HeaderThree = () => {
// // //     const { sticky } = useSticky();

// // //     const [isSearchOpen, setIsSearchOpen] = useState(false);
// // //     const [isOpen, setIsOpen] = useState(false);

// // //     return (
// // //         <>
// // //             <header className="edu-header header-style-3 header-fullwidth no-topbar">
// // //                 <div id="edu-sticky-placeholder"></div>
// // //                 <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
// // //                     <div className="container-fluid">
// // //                         <div className="header-navbar">
// // //                             <div className="header-brand">
// // //                                 <div className="logo">
// // //                                     <Link href="/">
// // //                                         <a>
// // //                                             <img className="logo-light" src="/assets/images/logo/logo-dark.png" alt=" Logo" />
// // //                                             <img className="logo-dark" src="/assets/images/logo/logo-white.png" alt=" Logo" />
// // //                                         </a>
// // //                                     </Link>
// // //                                 </div>
// // //                             </div>

// // //                             <div className="header-mainnav">
// // //                                 <nav className="mainmenu-nav">
// // //                                     <InstituteMenu />
// // //                                 </nav>
// // //                             </div>

// // //                            <div className="header-right">
// // //                                 <ul className="header-action">
// // //                                     {/* <li
// // //                                         className="icon search-icon"
// // //                                         onClick={() => setIsSearchOpen(true)}
// // //                                     >
// // //                                         <a style={{ cursor: "pointer" }} className="search-trigger">
// // //                                             <i className="icon-2"></i>
// // //                                         </a>
// // //                                     </li> */}

// // //                                     <li className="mobile-menu-bar d-block d-xl-none">
// // //                                         <button
// // //                                             className="hamberger-button"
// // //                                             onClick={() => setIsOpen(true)}
// // //                                         >
// // //                                             <i className="icon-54"></i>
// // //                                         </button>
// // //                                     </li>
// // //                                 </ul>
// // //                             </div>
// // //                         </div>
// // //                     </div>
// // //                 </div>
// // //                 {/* <!-- Start Search Popup  --> */}
// // //                 <SearchPopup
// // //                     isSearchOpen={isSearchOpen}
// // //                     setIsSearchOpen={setIsSearchOpen}
// // //                 />

// // //                 {/* <!-- End Search Popup  --> */}
// // //             </header>

// // //             {/* sidebar start */}
// // //             <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />
// // //             {/* sidebar end */}
// // //         </>
// // //     )
// // // }

// // // export default HeaderThree;

// // import Link from 'next/link';
// // import React, { useState } from 'react';
// // import { useSelector } from 'react-redux';
// // import SearchPopup from '../../components/common/popup-modal/search-popup';
// // import OffCanvas from '../../components/common/sidebar/off-canvas';
// // import useCartInfo from '../../hooks/use-cart-info';
// // import useSticky from '../../hooks/use-sticky';
// // import { wishlistItems } from '../../redux/features/wishlist-slice';
// // import MainMenu from './component/main-menu';
// // import InstituteMenu from './component/institute-menu';

// // const HeaderThree = () => {
// //     const { sticky } = useSticky();
// //     const [isSearchOpen, setIsSearchOpen] = useState(false);
// //     const [isOpen, setIsOpen] = useState(false);

// //     return (
// //         <>
// //             {/* Top Announcement Bar */}
// //             <div className="top-announcement-bar">
// //                 <div className="container-fluid">
// //                     <div className="announcement-content">
// //                         <span className="admission-text">Admissions Open 2025-26</span>
// //                         <span className="contact-info">
// //                             <span className="phone">Q123-335-9999</span>
// //                             <span className="email">admissions@Shanmugha.edu</span>
// //                         </span>
// //                     </div>
// //                 </div>
// //             </div>

// //             <header className="edu-header header-style-3 header-fullwidth no-topbar">
// //                 <div id="edu-sticky-placeholder"></div>
// //                 <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
// //                     <div className="container-fluid">
// //                         <div className="header-navbar">
// //                             <div className="header-brand">
// //                                 <div className="logo">
// //                                     <Link href="/">
// //                                         <a>
// //                                             <img className="logo-light" src="/assets/images/logo/logo-dark.png" alt=" Logo" />
// //                                             <img className="logo-dark" src="/assets/images/logo/logo-white.png" alt=" Logo" />
// //                                         </a>
// //                                     </Link>
// //                                 </div>
// //                             </div>

// //                             <div className="header-mainnav">
// //                                 <nav className="mainmenu-nav">
// //                                     <InstituteMenu />
// //                                 </nav>
// //                             </div>

// //                             <div className="header-right">
// //                                 <ul className="header-action">
// //                                     <li className="apply-now-btn">
// //                                         <button className="btn btn-primary">Apply Now</button>
// //                                     </li>
// //                                     <li className="mobile-menu-bar d-block d-xl-none">
// //                                         <button
// //                                             className="hamberger-button"
// //                                             onClick={() => setIsOpen(true)}
// //                                         >
// //                                             <i className="icon-54"></i>
// //                                         </button>
// //                                     </li>
// //                                 </ul>
// //                             </div>
// //                         </div>
// //                     </div>
// //                 </div>

// //                 <SearchPopup
// //                     isSearchOpen={isSearchOpen}
// //                     setIsSearchOpen={setIsSearchOpen}
// //                 />
// //             </header>

// //             <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />

// //             <style jsx>{`
// //                 .top-announcement-bar {
// //                     background-color: #000059;
// //                     color: white;
// //                     padding: 8px 0;
// //                     font-size: 0.9rem;
// //                 }

// //                 .announcement-content {
// //                     display: flex;
// //                     justify-content: space-between;
// //                     align-items: center;
// //                 }

// //                 .admission-text {
// //                     font-weight: bold;
// //                 }

// //                 .contact-info {
// //                     display: flex;
// //                     gap: 20px;
// //                 }

// //                 .apply-now-btn .btn {
// //                     padding: 8px 20px;
// //                     background-color: #000059;
// //                     color: white;
// //                     border: none;
// //                     border-radius: 4px;
// //                     font-weight: 600;
// //                     cursor: pointer;
// //                 }

// //                 @media (max-width: 768px) {
// //                     .announcement-content {
// //                         flex-direction: column;
// //                         gap: 5px;
// //                         text-align: center;
// //                     }

// //                     .contact-info {
// //                         flex-direction: column;
// //                         gap: 5px;
// //                     }
// //                 }
// //             `}</style>
// //         </>
// //     )
// // }

// // export default HeaderThree;

// import Link from "next/link";
// import React, { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
// import SearchPopup from "../../components/common/popup-modal/search-popup";
// import OffCanvas from "../../components/common/sidebar/off-canvas";
// import useSticky from "../../hooks/use-sticky";
// import InstituteMenu from "./component/institute-menu";

// const HeaderThree = () => {
//   const { sticky } = useSticky();
//   const [isSearchOpen, setIsSearchOpen] = useState(false);
//   const [isOpen, setIsOpen] = useState(false);
//   const [isTransparent, setIsTransparent] = useState(true);

//   useEffect(() => {
//     const handleScroll = () => {
//       const heroSection = document.querySelector(".hero-banner");
//       if (heroSection) {
//         const heroHeight = heroSection.offsetHeight;
//         setIsTransparent(window.scrollY < heroHeight - 100);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);
//     return () => window.removeEventListener("scroll", handleScroll);
//   }, []);

//   return (
//     <>
//       <header
//         className={`edu-header header-style-3 header-fullwidth no-topbar ${
//           isTransparent ? "header-transparent" : ""
//         }`}
//       >
//         <div id="edu-sticky-placeholder"></div>
//         <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
//           <div className="container-fluid">
//             <div className="header-navbar">
//               <div className="header-brand">
//                 <div className="logo">
//                   <Link href="/">
//                     <a>
//                       {/* Use white logo for transparent header, dark for solid */}
//                       <img
//                         className="logo-light"
//                         src="/assets/images/logo/logo-dark.png"
//                         alt="Logo"
//                       />
//                       <img
//                         className="logo-dark"
//                         src="/assets/images/logo/logo-white.png"
//                         alt="Logo"
//                       />
//                     </a>
//                   </Link>
//                 </div>
//               </div>

//               <div className="header-mainnav">
//                 <nav className="mainmenu-nav">
//                   <InstituteMenu />
//                 </nav>
//               </div>

//               <div className="header-right">
//                 <ul className="header-action">
//                   <li className="apply-now-btn">
//                     {/* <button className="btn btn-primary">Apply Now</button> */}
//                     <button
//                       className="btn btn-primary btn-apply"
//                       onClick={() => {
//                         window.location.href =
//                           "https://admissions.shanmugha.edu.in/";
//                       }}
//                     >
//                       Apply Now
//                     </button>
//                   </li>
//                   <li className="mobile-menu-bar d-block d-xl-none">
//                     <button
//                       className="hamberger-button"
//                       onClick={() => setIsOpen(true)}
//                     >
//                       <i className="icon-54"></i>
//                     </button>
//                   </li>
//                 </ul>
//               </div>
//             </div>

//             <header className="edu-header header-style-3 header-fullwidth no-topbar">
//                 <div id="edu-sticky-placeholder"></div>
//                 <div className={`header-mainmenu ${sticky ? 'edu-sticky' : ''}`}>
//                     <div className="container-fluid">
//                         <div className="header-navbar">
//                             <div className="header-brand">
//                                 <div className="logo">
//                                     <Link href="/">
//                                         <a>
//                                             <img className="logo-light" src="/assets/images/logo/logo-dark.png" alt=" Logo" />
//                                             <img className="logo-dark" src="/assets/images/logo/logo-white.png" alt=" Logo" />
//                                         </a>
//                                     </Link>
//                                 </div>
//                             </div>

//                             <div className="header-mainnav">
//                                 <nav className="mainmenu-nav">
//                                     <InstituteMenu />
//                                 </nav>
//                             </div>

//                             <div className="header-right">
//                                 <ul className="header-action">
//                                     <li className="apply-now-btn">
//                                         <button className="btn btn-primary">Apply Now</button>
//                                     </li>
//                                     <li className="mobile-menu-bar d-block d-xl-none">
//                                         <button
//                                             className="hamberger-button"
//                                             onClick={() => setIsOpen(true)}
//                                         >
//                                             <i className="icon-54"></i>
//                                         </button>
//                                     </li>
//                                 </ul>
//                             </div>
//                         </div>
//                     </div>
//                 </div>

//                 <SearchPopup
//                     isSearchOpen={isSearchOpen}
//                     setIsSearchOpen={setIsSearchOpen}
//                 />
//             </header>

//             <OffCanvas isOpen={isOpen} setIsOpen={setIsOpen} />

//             <style jsx>{`
//                 .top-announcement-bar {
//                     background-color: #000059;
//                     color: white;
//                     padding: 8px 0;
//                     font-size: 0.9rem;
//                 }

//         .edu-header:not(.header-transparent)
//           .mainmenu-nav
//           :global(.mainmenu)
//           :global(> li)
//           :global(> a) {
//           color: #333;
//         }

//         .edu-header:not(.header-transparent)
//           .header-action
//           :global(.hamberger-button) {
//           color: #333;
//         }

//                 .apply-now-btn .btn {
//                     padding: 8px 20px;
//                     background-color: #000059;
//                     color: white;
//                     border: none;
//                     border-radius: 4px;
//                     font-weight: 600;
//                     cursor: pointer;
//                 }

//         .edu-header:not(.header-transparent) .apply-now-btn .btn:hover {
//           background-color: #3e8e41;
//         }

//         @media (max-width: 768px) {
//           .edu-header {
//             position: relative;
//           }

//           .header-transparent {
//             background: white;
//           }

//           .header-transparent .logo-light {
//             display: none;
//           }

//           .header-transparent .logo-dark {
//             display: block;
//           }

//           .header-transparent
//             .mainmenu-nav
//             :global(.mainmenu)
//             :global(> li)
//             :global(> a) {
//             color: #333;
//           }
//         }
//       `}</style>
//     </>
//   );
// };

// export default HeaderThree;


import Link from "next/link";
import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
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
      if (heroSection) {
        const heroHeight = heroSection.offsetHeight;
        setIsTransparent(window.scrollY < heroHeight - 100);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`edu-header header-style-3 header-fullwidth no-topbar ${
          isTransparent ? "header-transparent" : ""
        }`}
      >
        <div id="edu-sticky-placeholder"></div>
        <div className={`header-mainmenu ${sticky ? "edu-sticky" : ""}`}>
          <div className="container-fluid">
            <div className="header-navbar">
              <div className="header-brand">
                <div className="logo">
                  <Link href="/">
                    <a>
                      {/* Use white logo for transparent header, dark for solid */}
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

              <div className="header-mainnav">
                <nav className="mainmenu-nav">
                  <InstituteMenu />
                </nav>
              </div>

              <div className="header-right">
                <ul className="header-action">
                  <li className="apply-now-btn">
                    {/* <button className="btn btn-primary">Apply Now</button> */}
                    <button
                      className="btn btn-primary btn-apply"
                      onClick={() => {
                        window.location.href =
                          "https://admissions.shanmugha.edu.in/";
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

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600&display=swap');

        .edu-header {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          transition: all 0.3s ease;
          font-family: 'Poppins', sans-serif; /* Apply Poppins font here */
        }

        .header-transparent {
          background: transparent;
        }

        .header-transparent .header-mainmenu {
          background: transparent;
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
          color: white;
        }

        .header-transparent .header-action :global(.hamberger-button) {
          color: white;
        }

        .header-transparent .apply-now-btn .btn {
          background-color: rgba(255, 255, 255, 0.2);
          border: 1px solid white;
          color: white;
        }

        .header-transparent .apply-now-btn .btn:hover {
          background-color: white;
          color: #000059;
        }

        /* Solid header styles */
        .edu-header:not(.header-transparent) {
          background: white;
          box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
        }

        .edu-header:not(.header-transparent) .logo-light {
          display: none;
        }

        .edu-header:not(.header-transparent) .logo-dark {
          display: block;
          width: 250px; /* desired width */
          height: 100px; /* desired height */
          object-fit: contain; /* ensures logo doesn’t stretch */
        }

        .edu-header:not(.header-transparent)
          .mainmenu-nav
          :global(.mainmenu)
          :global(> li)
          :global(> a) {
          color: #333;
        }

        .edu-header:not(.header-transparent)
          .header-action
          :global(.hamberger-button) {
          color: #333;
        }

        .apply-now-btn .btn {
          padding: 8px 20px;
          background-color: #000059;
          color: white;
          border: none;
          border-radius: 4px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .edu-header:not(.header-transparent) .apply-now-btn .btn:hover {
          background-color: #3e8e41;
        }

        @media (max-width: 768px) {
          .edu-header {
            position: relative;
          }

          .header-transparent {
            background: white;
          }

          .header-transparent .logo-light {
            display: none;
          }

          .header-transparent .logo-dark {
            display: block;
          }

          .header-transparent
            .mainmenu-nav
            :global(.mainmenu)
            :global(> li)
            :global(> a) {
            color: #333;
          }
        }
      `}</style>
    </>
  );
};

export default HeaderThree;