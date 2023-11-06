import azu from "../assets/img/about-this-site/azu.jpeg";
import ken from "../assets/img/about-this-site/ken.png";
import kristen from "../assets/img/about-this-site/kristen.jpg";
import shen from "../assets/img/about-this-site/shen.png";

export const AboutThisSiteData = {
  header: {
    title: "About This Website",
    description:
      "In 2020, WMDD decided to revamp its website to give people a better look at the curriculum and see the outstanding success of its students throughout the program. The website needed a change in visual design and user experience to improve the usability and efficiency of user interaction with the current site. Chloe Bui, Ken Tauchi and Hiteshri Nanda, three students from the WMDD program worked together from September 2020 to December 2020 to implement the new changes.",
    description2:
      "From January 2021 to April 2021 Ken Tauchi continued working on the website, joined by Kristen Ingelman, Azusa Nakahashi and Shen Gianni. These WMDD students worked together to further improve the WMDD website, giving the website a whole new look. From the start of this project, starting in September 2020, all weekly team meetings have been held fully remote, on Zoom.",
  },
  team: [
    {
      image: azu,
      name: "Azusa Nakahashi",
      title: "UI/UX designer",
      year: "Fall 2020 - Fall 2021",
      linkedIn: "https://www.linkedin.com/in/azusa-nakahashi-26754b1b6/",
    },
    {
      image: ken,
      name: "Ken Tauchi",
      title: "Full-stack Developer",
      year: "Spring 2020 - Spring 2021",
      linkedIn: "https://www.linkedin.com/in/kentauchi/",
    },
    {
      image: kristen,
      name: "Kristen Ingelman",
      title: "Front-end Developer",
      year: "Spring 2020 - Spring 2021",
      linkedIn: "https://www.linkedin.com/in/kristen-ingelman/",
    },
    {
      image: shen,
      name: "Shen Gianni",
      title: "UI/UX designer",
      year: "Spring 2020 - Spring 2021",
      linkedIn: "https://www.linkedin.com/in/shengianni/",
    },
  ],
  wireframe: {
    title: "Wireframe & Mockup",
    description:
      "When creating the new design for the WMDD website, Azusa thought a lot about the colour scheme and decided to choose bright and cheerful colours, providing the users with a welcoming and fun vibe. Azusa made sure to pay close attention to the readability of the site, making sure to choose a font that was easy to read and had high colour contrast between the fonts and background. Azusa also gave close attention to both UI and UX design, making it clear to see what parts of the site were interactive, for example which buttons or links were clickable. Shen organized different parts of the design to improve both context and hierarchy. Shen also created whimsical illustrations to match the current website’s design direction. Shen and Azuza worked closely together to refine the website design throughout the duration of the project.",
    button:
      "https://drive.google.com/file/d/1i2FdYtyJrPTIfyZ_T53l_Qj963rNW3QS/view",
  },
  development: {
    title: "Development",
    description:
      "This website was built with a headless CMS and the frontend has been developed with Next.js. In fall of 2020 Ken enabled the website to dynamically get up-to-date data through the WordPress API. All of the student projects, as well as news and events data are dynamically fetched from WordPress, making it easy for people without programming knowledge to add new content to the WordPress site directly. Kristen joined the project in January 2021 and worked closely with Ken to convert the website to use the React framework Next.js. The conversion from regular React.js to Next.js allowed for much faster loading times within the site, as well as better SEO implementation. Ken and Kristen also worked closely with the designers to work on updating old content.",
    button: "https://github.com/KenTauchi/langara-app-nextjs",
  },
};
