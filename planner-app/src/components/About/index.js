import AboutNav from "./AboutNav";
import AboutBody from "./AboutBody";
import "./About.css";

const About = ({ activeTheme }) => {
  return (
    <div className="about-cont">
      <AboutNav activeTheme={activeTheme} />
      <AboutBody activeTheme={activeTheme} />
    </div>
  );
};

export default About;
