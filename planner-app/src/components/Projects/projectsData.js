import imagespace from "../../assets/images/ImageSpace-demo-pic.png";
import img1 from "../../assets/images/img1.png";
import img2 from "../../assets/images/img2.png";
import img3 from "../../assets/images/img3.png";
import img4 from "../../assets/images/img4.png";
import img5 from "../../assets/images/img5.png";
import img6 from "../../assets/images/img6.png";
import job1 from "../../assets/images/jobseeker1.jpeg";
import job2 from "../../assets/images/jobseeker2.jpeg";
import job3 from "../../assets/images/jobseeker3.jpeg";
import pos1 from "../../assets/images/pos1.jpg";
import pos2 from "../../assets/images/pos2.jpg";
import pos3 from "../../assets/images/pos3.jpg";
import pos4 from "../../assets/images/pos4.jpg";
import pos5 from "../../assets/images/pos5.jpg";
import oot1 from "../../assets/images/oot-1.png";
import oot2 from "../../assets/images/oot-2.png";
import oot3 from "../../assets/images/oot-3.png";
import oot4 from "../../assets/images/oot-4.png";
import oot5 from "../../assets/images/oot-5.png";
import oot6 from "../../assets/images/oot-6.png";

export const PROJECTS = {
  image: {
    about: `Imagespace is a Full Stack Flickr clone with 5 CRUD features built using a React frontend with a Flask backend. Imagespace features an auto-tagging feature by implementing the AI image recognition API Imagga. Users can sign up for accounts, follow and unfollow other users, both like and comment on photos, and upload their own! Imagespace also features a search bar that allows users to search for other users, images, and tags. Users can also edit their own profiles and delete their own images and comments. This website was built with a 'mobile first' approach, and is fully responsive for mobile, tablet, and desktop.`,
    githubLink: "https://github.com/Sleightttt/AA-Captstone-Project",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg",
    ],
    images: [imagespace, img1, img2, img3, img4, img5, img6],
    liveLink: "https://imagespace.onrender.com/",
  },
  ootify: {
    about:
      "After learning about this company I absolutely loved their website design as well as their layout and was determined to replicate it. Originally made in webflow, I decided to recreate it using React, HTML, and CSS. Hosted on vercel, this application features small animations and a beautiful layout. I learned a lot about CSS and how to make a website responsive during this project.",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
    ],
    images: [oot1, oot2, oot3, oot4, oot5, oot6],
    githubLink: "https://github.com/Sleightttt/ootify-clone",
    liveLink: "https://ootify-clone.vercel.app/",
  },
  proof: {
    about:
      "Proofofshred is a skateboarding application that is currently in development. It will feature a map that displays skate spots, a user profile, and a social media aspect. Users will be able to upload their own skate spots, and follow other users. Users will also be able to like and comment on skate spots. This application is being built with a 'mobile first' approach, and will be fully responsive for mobile, tablet, and desktop. Using React Native paired with Expo, the app will be available on both the App Store and Google Play.",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongoose/mongoose-original.svg",
    ],
    images: [pos1, pos2, pos3, pos4, pos5],
    githubLink: "https://github.com/DangerWill/proofofshred",
    liveLink: "http://dev.proofofshred.com:50080/",
  },
  job: {
    about:
      "I developed a sophisticated job-seeking app using React Native, featuring a seamless UI for an optimized job search. Utilizing the Axios library and Jsearch API from RapidApi, the app integrates real-time and accurate job data. Prioritizing clean code architecture, I implemented best practices for scalability and performance, employing modularization, code reusability, and responsive design. This project showcases my expertise in software engineering, API integration, and mobile app development, from crafting pixel-perfect UI components to managing asynchronous data fetching and state.",
    techIcons: [
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/axios/axios-plain.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
      "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodemon/nodemon-original.svg",
    ],
    images: [job1, job2, job3],
    githubLink: "https://github.com/Sleightttt/Geist",
  },
};
