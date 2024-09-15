import {
  mobile,
  backend,
  web,
  javascript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  python,
  web_dev,
  srm,
  expressJS,
  firebase
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "journey",
    title: "Journey",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "AI and ML",
    icon: mobile,
  },
  {
    title: "Frontend Developer",
    icon: backend,
  },
  {
    title: "Python",
    icon: python,
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
    name: "Python",
    icon: python,
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
    name: "ExpressJS",
    icon: expressJS,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Firebase",
    icon: firebase,
  },
];

const experiences = [
  {
    title: "Web Decelopment",
    icon: web_dev,
    iconBg: "#383E56",
    date: "Started - May 2020",
    points: [
      "Started with a comprehensive Udemy course, learning HTML, CSS, JavaScript, NodeJS, and ExpressJS.",
      "Developed skills in NodeJS and ExpressJS for server-side logic, and mastered SQL and MongoDB for efficient data management.",
      "Became proficient in ReactJS and utilized Bootstrap and TailwindCSS to create modern, responsive user interfaces.",
      "Gained experience integrating various APIs and using Firebase to build interactive, real-time applications.",
      "Currently deepening my expertise in ReactJS and exploring NextJS for enhanced server-side rendering.",
    ],
  },
  {
    title: "Python Programming",
    icon: python,
    iconBg: "#E6DEDD",
    date: "Started - February 2021",
    points: [
      "Mastered Python fundamentals and advanced topics, including OOP, with hands-on experience in diverse libraries and projects.",
      "Currently enhancing skills in data science, focusing on advanced data wrangling techniques, statistical analysis, and creating compelling visualizations to extract actionable insights from complex datasets.",
      "Gearing up to explore machine learning and artificial intelligence, with plans to dive into deep learning methodologies, including neural networks, and to gain hands-on experience with frameworks like TensorFlow and PyTorch.",
      "Committed to staying at the forefront of technology by continuously learning and applying cutting-edge techniques in AI and ML to solve real-world problems and drive innovation.",
    ],
  },
  {
    title: "SRMIST Chennai",
    icon: srm,
    iconBg: "#E6DEDD",
    date: "Joined - 2024",
    points: [
      "Enrolled at SRM Kattankulathur, pursuing a B.Tech in Computer Science and Engineering with a specialization in AI and ML.",  
      "Actively learning and exploring artificial intelligence and machine learning, with plans to gain hands-on experience with advanced technologies and frameworks.",
      "Enthusiastic about expanding knowledge in diverse areas, including Cyber Security, Graphic Design, and UI/UX.",
      "Committed to learning as much as possible across various technologies to drive innovation and personal growth",
    ],
  },
];

export { services, technologies, experiences };
