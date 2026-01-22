const institute_menu_data = [
  {
    title: "Home",
    link: "/",
    mega_menu: false,
    single_menu: true,
  },

  {
    title: "Our Institutions",
    link: "#",
    mega_menu: true,
    single_menu: false,
    submenus: [
      {
        title: "Engineering",
        link: "/Engineering_College",
        icon: true,
        icon_name: "safety_divider_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Pharmacy",
        link: "https://shanmughapharmacy.edu.in/",
        icon: true,
        icon_name: "vaccines_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Nursing for women",
        link: "https://shanmughanursing.edu.in/",
        icon: true,
        icon_name: "health_and_safety_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Medical Science & research",

        icon: true,
        icon_name: "biotech_black_48dp.svg",
        link: "/Medical_Science&Research_College",
        mega_submenu: [],
      },

      {
        title: "Allied Health Science",
        icon: true,
        icon_name: "medical_information_black_48dp.svg",
        link: "/DHI_College",
        mega_submenu: [],
      },
      
    ],
  },

  {
    title: "About Us",
    link: "/about/about-us",
    mega_menu: false,
    single_menu: true,
  },

  {
    title: "Contact",
    link: "#",
    mega_menu: false,
    submenus: [
      { title: "FAQs", link: "/contact/faq", icon: true },
      { title: "Quick Link", link: "/contact/quick-link" },
      { title: "Contact Us", link: "/contact-us" },
    ],
  },
];

export default institute_menu_data;
