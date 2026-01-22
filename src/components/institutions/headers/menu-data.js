const menu_data = [
  {
    title: "Home",
    link: "/",
    mega_menu: false,
    single_menu: true,
  },
  {
    title: "Admission",
    link: "/admission",
    mega_menu: false,
    single_menu: true,
  },
  {
    title: "About Us",
    link: "/about_us",
    mega_menu: false,
    single_menu: true,
  },

  {
    title: "Our Institutions",
    link: "/",
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
      // {
      //   title: "Our Trust",
      //   icon: true,
      //   icon_name: "logo-dark.png",
      //   link: "/Trust",
      //   mega_submenu: [],
      // },
    ],
  },
  {
    title: "Departments",
    link: "#",
    mega_menu: true,
    single_menu: false,
    submenus: [
      {
        title: "Mechanical Engineering",
        link: "/Engineering/Department/Mechanical",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Computer Science & Engineering",
        link: "/Engineering/Department/ComputerScience",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Cyber Security",
        link: "/Engineering/Department/CS",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Electronics & Communication Engineering",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        link: "/Engineering/Department/Ece",
        mega_submenu: [],
      },
      {
        title: "Agricultural Engineering",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        link: "/Engineering/Department/Agri",
        mega_submenu: [],
      },
      {
        title: "Biomedical Engineering",
        link: "/Engineering/Department/Biomedical",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Artificial Intelligence & Data Science",
        link: "/Engineering/Department/AI&DS",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Information Technology",
        link: "/Engineering/Department/InformationTechnology",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Science & Humanities",
        link: "/Engineering/Department/S&H",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
    ],
    mobile_pages_menu: [
      {
        title: "Mechanical Engineering",
        link: "/Engineering/Department/Mechanical",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Computer Science & Engineering",
        link: "/Engineering/Department/ComputerScience",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Cyber Security",
        link: "/Engineering/Department/CS",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Electronics & Communication Engineering",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        link: "/Engineering/Department/Ece",
        mega_submenu: [],
      },
      {
        title: "Agricultural Engineering",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        link: "/Engineering/Department/Agri",
        mega_submenu: [],
      },
      {
        title: "Biomedical Engineering",
        link: "/Engineering/Department/Biomedical",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Artificial Intelligence & Data Science",
        link: "/Engineering/Department/AI&DS",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Information Technology",
        link: "/Engineering/Department/InformationTechnology",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      {
        title: "Science & Humanities",
        link: "/Engineering/Department/S&H",
        icon: true,
        icon_name: "history_edu_black_48dp.svg",
        mega_submenu: [],
      },
      // { title: "About Us ", link: "/about/about-us" },

      // { title: "Faq's", link: "/faq" },
      // { title: "404 Error", link: "/404" },
      // { title: "Coming Soon", link: "/coming-soon" },

      // { title: "Terms & Condition", link: "/terms-condition" },
      // { title: "Sign In", link: "/sign-in" },
    ],
  },
  {
    title: "Features",
    link: "#",
    mega_menu: false,
    submenus: [
      { title: "Facilities", link: "/features/facilities", icon: true },
      { title: "Placements", link: "/features/placements" },

      { title: "Activities", link: "/features/activities" },
      { title: "Library", link: "/features/lib" },

      { title: "Exam Cell", link: "/features/exam-cell" },
      { title: "COE", link: "/features/coe" },

      { title: "Careers", link: "/features/career" },
      { title: "Research", link: "/features/research" },
      { title: "Scholarships", link: "/features/scholarships" },
      { title: "Guest Corner", link: "/features/guest" },
      { title: "Alumini", link: "/alumni" },

      { title: "NAAC-IQAC", link: "/naac-iqac" },
      { title: "Commitees", link: "/about/committee" },
    ],
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

export default menu_data;
