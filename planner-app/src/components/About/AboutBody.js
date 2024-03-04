import { Link } from "react-router-dom";
import icons from "../../assets/icons";
const AboutBody = () => {
  return (
    <div className="about-body">
      <p style={{ marginTop: "7px" }}>
        <span style={{ fontWeight: "bold", color: "#009bef" }}>Thank you</span>{" "}
        for checking out my portfolio! I am a{" "}
        <span style={{ fontWeight: "bold", color: "#009bef" }}>
          software engineer
        </span>{" "}
        with experience in building web applications from the ground up, who
        always finds zeal in debugging errors and finding more efficient
        approach to problems.
      </p>

      <p>
        {" "}
        I graduated from App Academy, a highly selective software engineer
        program, where I spent more than 60 hours per week learning and
        mastering my skills in different technologies and computer languages.
        Though challenging, it invigorated my passion for problem solving and
        the desire to keep learning and building my knowledge to become the most
        optimal problem-solver as a programmer. Since graduating I've worked two
        contract roles, one developing an Agile Chatbot for Scrummasters and
        another developing solutions for a medical marketing company. I am
        looking for a full-time opportunity to keep this flame going!
      </p>

      <p>
        When I am not coding, I love to indulge myself with horror films, watch
        and play hockey, go on camping adventures to various mountainous
        terrains, game on all systems, and discover new restaurants that awaken
        my palate.
      </p>
      <div className="about-icon-cont">
        <img className="about-icon" src={icons.ghost} alt="Ghost icon" />
        <img className="about-icon" src={icons.forest} alt="Forest icon" />
        <img className="about-icon" src={icons.console} alt="Gaming icon" />
        <img className="about-icon" src={icons.hockey} alt="Hockey icon" />
      </div>
    </div>
  );
};

export default AboutBody;
