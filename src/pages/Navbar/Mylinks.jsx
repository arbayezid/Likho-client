import { FaBlenderPhone, FaCalendarMinus, FaClone, FaCloudDownloadAlt, FaCommentDollar, FaDochub, FaEdit, FaFacebook, FaFileExport, FaFilePdf, FaFileWord, FaHandsHelping, FaHockeyPuck, FaPager, FaPenSquare, FaReadme, FaSimplybuilt, FaSpellCheck, FaStreetView, FaSuitcaseRolling, FaTwitter, FaUserCog } from "react-icons/fa"
// dhur
//kkkk
export const links = [
  {
    name: "LikhoEditor  7.1",
    submenu: true,
    sublinks: [
      {
        Head: "LikhoEditor 7.1 Overview",
        sublink: [
          { icon: <FaHockeyPuck />, name: "Products Tour", link: "/" },
          { icon: <FaEdit />, name: "Features", link: "/features" },
          { icon: <FaPager />, name: "Demo Pages", link: "/" },
          { icon: <FaSimplybuilt />, name: "Online Builder", link: "/" },
          { icon: <FaDochub />, name: "Documentation", link: "/" },
          { icon: <FaCloudDownloadAlt />, name: "Download", link: "/" },
        ],
      },
      {
        Head: "Ultra Features",
        sublink: [
          { icon: <FaUserCog />, name: "Collaboration", link: "/" },
          { icon: <FaFilePdf />, name: "Export to PDF/Word", link: "/" },
          { icon: <FaFileWord />, name: "Import from Word", link: "/" },
          { icon: <FaFileExport />, name: "File Management", link: "/" },
          { icon: <FaSpellCheck />,name: "Spell and Grammar Check", link: "/" },
        ],
      },
      {
        Head: "Demo",
        sublink: [
          { img: "https://i.ibb.co/8rbKVY1/image.png", link: "/" },

          { name: "...", link: "/" },
        ],
      },



    ],
  },
  {
    name: "Likho Special",
    submenu: true,
    sublinks: [
      {
        Head: "Likho Special Overview",
        sublink: [
       
          { icon: <FaClone />, name: "Live Demo", link: "/" },
        
          { icon: <FaCommentDollar />,name: "Pricing", link: "/" },
          { icon: <FaDochub />, name: "Documentation", link: "/" },
        ],
      },
      {
        Head: "Demo",
        sublink: [
          // { name: "img", link: "/" },
          // { name: "btn", link: "/" },

        ],
      },

    ],
  },
  {
    name: "Resources",
    submenu: true,
    sublinks: [
      {
        Head: "Resources Overview",
        sublink: [
          { icon: <FaPenSquare />, name: "Blog", link: "/blog" },
          { icon: <FaSuitcaseRolling />, name: "Likho studies", link: "/" },
          { icon: <FaReadme />, name: "Solutions", link: "/" },
          // { name: "Documentation", link: "/" },
          { icon: <FaStreetView />, name: "Insights", link: "/" },
        ],
      },
      {
        Head: "Learn More",
        sublink: [
          { icon: <FaCalendarMinus />, name: "Learn More", link: "/" },

        ],
      },

    ],
  },

  {
    name: "Support",
    submenu: true,
    sublinks: [
      {
        Head: "Support Center 7.1",
        sublink: [
          // { name: "Documentation", link: "/" },
          { icon: <FaHandsHelping />, name: "Help", link: "/" },
          { icon: <FaBlenderPhone />, name: "Contact Us", link: "/" },

        ],
      },
      {
        Head: "Get started ",
        sublink: [
          { name: "Learn More", link: "/" },

        ],
      },

    ],
  },
];