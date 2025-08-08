import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  threejs,
  flexos,
  secureApp,
} from "../assets";


export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "Experience",
    title: "Experience",
  },
  {
    id: "Projects",
    title: "Projects",
  },
  // {
  //   id: "Achievements",
  //   title: "Achievements",
  // },
  {
    id: "Education",
    title: "Education",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Full Stack Developer",
    icon: web,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Java Developer",
    icon: creator,
  },
  {
    title: "Problem Solver",
    icon: mobile,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "Git",
    icon: git,
  },
  {
    name: "Docker",
    icon: docker,
  },
];
const experiences = [
  {
  title: "Full Stack Web Developer Intern",
  company_name: "Phoenix InfoTech - Computer Training Institute - Pune",
  icon: meta,
  iconBg: "#E6DEDD",
  date: "Mar 2025 - Aug 2025",
  points: [
    "Worked as a Full Stack Web Developer Intern in a 6-month internship program.",
    "Built responsive web applications using HTML, CSS, JavaScript, and React.js.",
    "Worked with databases like MongoDB and MySQL for backend data handling.",
    "Collaborated on real-world projects in an on-site working environment in Pune, Maharashtra."
  ],
},
  {
    title: "Web Developer",
    company_name: "Om Sai Traders Pvt Ltd, Dhule",
    icon: meta,
    iconBg: "#E6DEDD",
    date: "Apr 2023 - May 2023",
    points: [
      "Worked as a Web Developer in a 6-week internship program.",
      "Developed an application using Django, Mediapipe, and SQLite.",
    ],
  },
];


const projects = [
  {
    name: "FarmTech_-Rental-System-For-Agriculture-Equipment ",
    description:
      "FarmTech: Rent agri‑equipment—browse, book, pay. Providers list; admin controls. Built with HTML/CSS/JS, PHP & MySQL.",
    tags: [
      {
        name: "FrontEnd Devlopement",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/300",
    source_code_link: "/",
  },
  {
    name: "Secure Exam App",
    description:
      "A secure, AI-driven examination application that uses real-time face and gesture recognition to monitor users during online exams.",
    tags: [
      {
        name: "django",
        color: "blue-text-gradient",
      },
      {
        name: "mediapipe",
        color: "green-text-gradient",
      },
      {
        name: "opencv",
        color: "pink-text-gradient",
      },
    ],
    image: secureApp,
    source_code_link: "/",
  },
  {
    name: "Online-Movie-Booking-System",
    description:
      "MovieBook: Streamlined ticketing—browse movies, choose seats, pay securely. Admins handle showtimes. Built with HTML/CSS/JS, PHP & MySQL.",
    tags: [
      {
        name: "Frontend Development",
        color: "blue-text-gradient",
      },
      {
        name: "PHP",
        color: "green-text-gradient",
      },
      {
        name: "MySql",
        color: "pink-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/300",
    source_code_link: "/",
  },
  {
    name: "Om Sai Traders Web Application",
    description:
      "Developed a secure, scalable Django web app for efficient data storage and management using HTML, CSS, JavaScript, SQL, and multithreading",
    tags: [
      {

        name: "Django",
        color: "blue-text-gradient",
      },
      {
        name: "SqlLite",
        color: "green-text-gradient",
      },
      {
        name: "multithreading",
        color: "blue-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/300",
    source_code_link: "/",
  },
  
  {
    name: "Coaching-Institute-Websit",
    description:
      "Together Academy: Coaching institute website—explore courses, view syllabus, contact, testimonials, admin panel. Built with HTML/CSS/JS and Web3Forms Integration",
    tags: [
      {

        name: "HTML",
        color: "blue-text-gradient",
      },
      {
        name: "CSS",
        color: "green-text-gradient",
      },
      {
        name: "javaScript",
        color: "blue-text-gradient",
      },
    ],
    image: "https://via.placeholder.com/300",
    source_code_link: "https://github.com/sujalchavan03/TogetherAcademy.git",
  }
  
];


// const achievements = [
//   {
//     title: "Grand India Challenge",
//     description: "Winner",
//     level: "national",
//     rank: "1st",
//     competition: "GIC at NIMMS Navi Mumbai",
//     date: "Jan 2025",
//   },
//   {
//     title: "XZIBIT",
//     description: "Winner",
//     level: "National",
//     rank: "1st",
//     competition: "National‑Level Project Competition at KC College of Engineering Thane" ,
//     date: "Apr 2025",
//   },
 
// ];

export { services, technologies, experiences,projects };
