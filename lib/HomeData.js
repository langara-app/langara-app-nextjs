// import fetch from "node-fetch";

// export async function getHomeData() {
//   // Instead of the file system,
//   // fetch post data from an external API endpoint
//   const res = await fetch(
//     "http://api.openweathermap.org/data/2.5/weather?q=vancouver&appid=29bb16926eb538df82bf182f6f62f42f&units=metric"
//   );

//   return JSON.parse(JSON.stringify(res));
// }

export const HomeData = {
  header: {
    title: "Web & Mobile App Development & Design",
    description:
      "The Web and Mobile Design & Development post graduate diploma at Langara College is located in beautiful Vancouver, Canada. WMDD is an intensive 4-term program that prepares students with no previous experience for a career in the industry. During your time at Langara you will take a series of web design courses and web development courses. While taking these courses you will learn how to design and develop real world applications from start to finish, focusing on web and mobile app development.",
  },
  summary: {
    title: "WMDD offers 2 Streams of Study",
    contents: [
      {
        title: "Design Stream",
        tag: "design",
        description:
          "Designers will take a series of web design courses which will focus on web and mobile app development, throughout their time in the WMDD program. Designers will start the program by first learning the basics of both design and development, including colour theory and typography, intro to UX design, along with the basics of HTML, CSS and JavaScript. Some more advanced courses include graphic design for the web, UX and UI design, 3D design and prototyping, audio and video production, as well as game design foundations.",
        color: true,
      },
      {
        title: "Developer Stream",
        tag: "development",
        description:
          "Developers will take a series of web development courses which also focus on web and mobile app development. To start, developers will first learn the basics of HTML, CSS, JavaScript and Content Management Systems. They will then move on to learn about full stack web development, including database technologies, Object-oriented programming and design, Native Android & iOS development and get an introduction to DevOps. Developers will also use React and React Native throughout various terms.",
        color: false,
      },
    ],
  },
  projects: {
    title: "Student Web & Mobile App Development Projects",
    description:
      "Our students work together in teams of developers and designers to produce amazing applications, solving real world problems. In each term, students create an application from concept to deployment, with guidance from their instructors. Check them out below!",
  },
  alumni: {
    title: "Alumni Success",
    description:
      "We take pride in celebrating the success of our Alumni. The WMDD program prepares our post graduate diploma students to start a career in the design and development industry, without any prior experience. Get to know some of our Alumni and see how Langara College helped them reach their career goals.",
  },
  lastMessage: {
    title: "Join WMDD Now",
    description:
      "You’ve seen a glimpse of the incredible experiences awaiting you at WMDD. Now, take the next step and join us.",
  },
  footer: {
    contactDesc: "Want to ask something? Click here",
    contactLink: "https://langara-app.ca",
  },
};
