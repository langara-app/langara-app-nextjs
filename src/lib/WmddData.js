import kickStart from "../assets/img/wmdd/kickStart.png";

export const WmddData = {
  handbook_url: "https://api.langara-app.ca/wp-content/uploads/2024/04/2024-20_WMDD_Handbook_v1.4.pdf",
  header: {
    title: "Program Overview",
    subtitle: "Web and Mobile App Design and Development",
    description:
      "Get a glimpse of the incredible experiences and knowledge awaiting you at WMDD program.",
  },
  programInfo: [
    {
      field: "Basic Requirement",
      value: "Bachelor's Degree",
    },
    {
      field: "Credential",
      value: "Post-Degree Diploma",
    },
    {
      field: "Start Dates",
      value: "September, January, May",
    },
    {
      field: "Duration",
      value: "2-year program (16 months)",
    },
    {
      field: "Experience",
      value: "No experience required",
    },
    {
      field: "Location",
      value: "Vancouver, BC (Canada)",
    },
  ],
  complete_program: {
    title: "After Completing the WMDD Program",
    description:
      "After completing the WMDD program, designers and developers will have lots of hands-on experience creating real-world, professional web and mobile applications. Students gain extensive experience working in teams, collaborating with group members, practicing project management skills and working in a busy and fast paced environment. Students will also have a professional online portfolio to show off and industry connections to help with their future careers. WMDD students will receive a post-baccalaureate diploma in Web and Mobile Design and Development upon course completion.",
  },
  kickStart: {
    image: kickStart,
    title: "Kick-start your career in tech",
    desc: "For those looking for co-op experience, the program offers an optional semester experiential work term in which valuable industry work experience will be gained.",
  },
  nextStep: {
    title: "Take the next step",
    desc: "Put your career in motion and apply for the Web and Mobile App Design and Development program at Langara College.",
  },
  programDetails: {
    title: "What will you learn?",
    description:
      "Be prepared to work on individual and team projects. Our curriculum helps you develop a <strong>digital portfolio</strong> and build <strong>industry connections.</strong> Interested in <strong>artificial intelligence</strong>? Our courses include in-depth AI modules, equipping you with essential skills for this innovative field.",
    types: ["Developer", "Designer"],
    courses: [
      "Graphic Design for Web",
      "Graphics Techniques Fundamentals",
      "HTML/CSS I",
      "Introduction to Web Programming",
      "Introduction to User Experience Design",
      "HTML/CSS 2",
      "Content Management Systems",
      "Web Programming II",
      "Advanced Typography",
      "Integrated Project",
      "Communications for Technical Professions or Communications for Web and Mobile Designers",
    ],
    seeAllLink:
      "https://langara.ca/programs-and-courses/programs/web-and-mobile-app/program-curriculum.html",
    seeAll: "+ See all courses",
  },

  developerSubjects: [
    { term: 1, course: "Graphic Design for Web", common: true },
    { term: 1, course: "Graphics Techniques Fundamentals", common: true },
    { term: 1, course: "HTML/CSS I", common: true },
    { term: 1, course: "Introduction to Web Programming", common: true },
    { term: 1, course: "Introduction to User Experience Design", common: true },

    { term: 2, course: "HTML/CSS II", common: true },
    { term: 2, course: "Content Management Systems", common: true },
    { term: 2, course: "Web Programming II", common: false },
    { term: 2, course: "Integrated Project", common: true },
    {
      term: 2,
      course: "Communications for Technical Professions",
      common: true,
    },

    { term: 3, course: "Introduction to Database Technologies", common: false },
    {
      term: 3,
      course: "Object-Oriented Design and Programming",
      common: false,
    },
    { term: 3, course: "Full-Stack Web Development", common: false },
    { term: 3, course: "Industry and Business Strategies", common: true },
    { term: 3, course: "Project 2", common: true },

    { term: 4, course: "Native Android App Development", common: false },
    { term: 4, course: "Native iOS App Development", common: false },
    {
      term: 4,
      course: "Security and Cloud and Server Administration",
      common: false,
    },
    { term: 4, course: "Capstone Project", common: true },
    {
      term: 4,
      course: "Advanced Topics for Web and Mobile Developers",
      common: false,
    },
  ],
  designerSubjects: [
    { term: 1, course: "Graphic Design for Web", common: true },
    { term: 1, course: "Graphics Techniques Fundamentals", common: true },
    { term: 1, course: "HTML/CSS I", common: true },
    { term: 1, course: "Introduction to Web Programming", common: true },
    { term: 1, course: "Introduction to User Experience Design", common: true },

    { term: 2, course: "HTML/CSS II", common: true },
    { term: 2, course: "Content Management Systems", common: true },
    { term: 2, course: "Advanced Typography", common: false },
    { term: 2, course: "Integrated Project", common: true },
    {
      term: 2,
      course: "Communications for Technical Professions",
      common: true,
    },

    { term: 3, course: "Advanced Graphics Design", common: false },
    { term: 3, course: "3D Design and Prototyping", common: false },
    { term: 3, course: "Advanced User Experience Design", common: false },
    { term: 3, course: "Industry and Business Strategies", common: true },
    { term: 3, course: "Project 2", common: true },

    { term: 4, course: "Advanced Graphics Techniques", common: false },
    { term: 4, course: "Audio/Video Production", common: false },
    { term: 4, course: "Game Design Foundations", common: false },
    { term: 4, course: "Capstone Project", common: true },
    {
      term: 4,
      course: "Advanced Topics for Web and Mobile Designers",
      common: false,
    },
  ],

  featuredSubjects: [
    {
      term: "Term I",
      course: "Graphic Design for Web",
      stream: "Developers & Designers",
    },
    {
      term: "Term II",
      course: "Content Management Systems",
      stream: "Developers & Designers",
    },
    {
      term: "Term III",
      course: "Integrated Project 2",
      stream: "Developers & Designers",
    },
    {
      term: "Term IV",
      course: "Capstone Project",
      stream: "Developers & Designers",
    },
  ],
};
