const Accent = ({ children }) => <span className="accent-text">{children}</span>;

export const JOBS = [
  {
    key: "life",
    company: "Lifescience Media",
    roleTitle: "Software Engineer",
    dateRange: "August 2023 - Present",
    website: "https://www.lifesciencemedia.com/",
    paragraphs: [
      <>
        I have been employed by Lifescience Media for many contract's as of
        date including building <Accent>mobile applications</Accent> from the
        ground up using various technologies such as{" "}
        <Accent>React Native</Accent> and <Accent>Expo GO</Accent>,
        interactive maps used as trade shows and conventions using basic{" "}
        <Accent>HTML </Accent>
        and <Accent>CSS</Accent>, and interactive games using{" "}
        <Accent>Unity</Accent>. Most of these projects are under NDA, aside
        from my most recent endevour, the mobile companion application for
        the Teleflex Arrow EZ-IO Arrow.
      </>,
      <>
        My time with the company has allowed me to grow exponentiallly as a
        developer. <Accent>Cross-functional</Accent> teams have allowed me to
        work with other developers, designers, and project managers to
        create a product that is not only functional, but also visually
        appealing. Working with clients directly to understand their needs
        and create a product that meets their expectations has been a
        rewarding experience.
      </>,
      <>
        Utilizing the <Accent>Agile methodology</Accent>, I have been able to
        work in a fast-paced environment, adapting to changes in both project
        scope and requirements. This has allowed me to work on multiple
        projects at once and has allowed me to keep challenging myself to
        become a better developer.
      </>,
    ],
  },
  {
    key: "big",
    company: "Big Deal Digital",
    roleTitle: "Full Stack SWE",
    dateRange: "April 2023 - December 2023",
    website: "https://www.bigdealdigital.com/",
    paragraphs: [
      <>
        Big Deal Digital is a digital marketing company that specializes in
        creating tools for SCRUM masters and practitioners of the agile
        methodology. I was employed by Big Deal Digital to create a{" "}
        <Accent>AI chatbot</Accent> that would help SCRUM masters and
        practitioners of the agile methodology to better understand the
        methodology and to help them with any questions they may have. The
        chatbot was built using <Accent>React</Accent> and{" "}
        <Accent>Redux</Accent> and was deployed using{" "}
        <Accent>AWS Amplify</Accent>.
      </>,
      <>
        <Accent>Daily standups</Accent> and bi-weekly sprints helped me
        develop a workflow that was necessary for the demanding project. I
        was able to work with other developers and project managers, as well
        as the CEO to create a tool that would be benificial to any team that
        is practicing the <Accent>agile methodology</Accent>. The project was
        a success and is currently being marketed to teams such as Nike. I am
        proud to have been a part of the project.
      </>,
      <>
        This project used <Accent>React</Accent>, <Accent>HTML</Accent>,{" "}
        <Accent>CSS</Accent>, <Accent>MongoDB</Accent>,{" "}
        <Accent>Mongoose</Accent>, and <Accent>Flask</Accent> while
        interfacing with ChatGPT to create a seamless user experience.{" "}
        <Accent>CSS</Accent> animations and minimal styling were at the heart
        of the project, focusing on the user experience and the
        functionality of the chatbot.
      </>,
    ],
  },
];
