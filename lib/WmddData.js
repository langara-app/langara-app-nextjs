import oneLight from '../assets/img/wmdd/1light.png';
import twoLight from '../assets/img/wmdd/2light.png';
import threeLight from '../assets/img/wmdd/3light.png';
import yellow_arrow from '../assets/img/wmdd/arrow-yellow.png';
import oneDark from '../assets/img/wmdd/1dark.png';
import twoDark from '../assets/img/wmdd/2dark.png';
import threeDark from '../assets/img/wmdd/3dark.png';
import dark_arrow from '../assets/img/wmdd/arrow-dark.png';
import kickStart from '../assets/img/wmdd/kickStart.svg';

export const WmddData = {
    header: {
        title: "Progam Overview",
        subtitle: "Web and Mobile App Design and Development",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et."
    },
    curriculum: [
        {
            description: "This two-year post graduate diploma program focuses on web and mobile app design and development, building both web and mobile applications from concept to deployment. The program encompasses visual aesthetics (including typography, color theory, and graphics), client and server-side programming, UI & UX design, and project management."
        },
        {
            description: "Students will complete several projects, both individually and in teams during the course. Throughout the semester, students will develop real-world applications which focus on both mobile and web design. Students will also develop digital portfolios and build industry connections during their time at Langara. WMDD is a 4-term program, but also includes an optional work experience term where students receive valuable industry work experience."
        },
        {
            description: "After completing the WMDD post graduate diploma, design and development students will possess the technical and communication skills necessary for jobs in freelance, small business, or corporate environments."
        }
    ],
    button: {
        title: "See Full Program Here"
    },

    developer_details: [
        {
            number: oneLight,
            title: "Frontend Development",
            description: "Students will become comfortable with the fundamentals of Full Stack Development. Developers start from learning the basics of HTML, CSS, JavaScript and jQuery in the earlier semesters. Developers will then start working with different frameworks, such as React and React Native to build web and mobile applications.",
            arrow: yellow_arrow
        },
        {
            number: twoLight,
            title: "Mobile Development",
            description: "Students will have several courses related to programming in Java, which get students comfortable and familiar with the fundamentals of object-oriented programming. Developers start by taking an introductory Object-Oriented Programming & Design course, focusing on programming in Java. Students will also get experience working with Native Android & iOS development, creating apps in both Android Studio and Xcode.",
            arrow: yellow_arrow
        },
        {
            number: threeLight,
            title: "Backend Development",
            description: "Developers will work throughout the program on projects requiring databases and server side scripting. They will also be introduced to cloud and security technologies, learning how to set up their own AWS servers to host their projects.",
            arrow: yellow_arrow
        },

    ],
    designer_details: [
        {
            number: oneDark,
            title: "Web Design",
            description: "Designers will study and utilize design theories, design elements and methodologies throughout the program, in both individual and group projects. Students will also apply advanced color theory and typography techniques to their projects. Designers will also be introduced to the software and techniques used to create and modify 3D graphics.",
            arrow: dark_arrow
        },
        {
            number: twoDark,
            title: "UI & UX Design",
            description: "Designers will focus on mobile and web design, learning how to  work with the principles of UX design for different types of applications. The concepts that will be covered include information architecture, user research, interaction design, usability testing, wireframes and mockups. Designers will also build functional and interactive prototypes, and evaluate them with different methods such as observations, interviews, questionnaires, and videos.",
            arrow: dark_arrow
        },
        {
            number: threeDark,
            title: "Audio & Video Production",
            description: "Designers will learn the skills needed to build multimedia components, including video, audio, soundtracks. dynamic graphics, and 3D prototyping. Students will create different multimedia content for both marketing and communication strategies, while incorporating UX design principles.",
            arrow: dark_arrow
        }
    ],

    complete_program: {
        title: "After Completing the WMDD Program",
        description: "After completing the WMDD program, designers and developers will have lots of hands-on experience creating real-world, professional web and mobile applications. Students gain extensive experience working in teams, collaborating with group members, practicing project management skills and working in a busy and fast paced environment. Students will also have a professional online portfolio to show off and industry connections to help with their future careers. WMDD students will receive a post-baccalaureate diploma in Web and Mobile Design and Development upon course completion."
    },
    kickStart: {
        image: kickStart,
        title: "Kick-start your career in tech",
        desc: "For those looking for co-op experience, the program offers an optional semester experiential work term in which valuable industry work experience will be gained."
    },
    nextStep: {
        title: 'Take the next step',
        desc: 'Put your career in motion and apply for the Web and Mobile App Design and Development program at Langara College.'
    }

}