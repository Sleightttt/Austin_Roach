import icons from "../../assets/icons";

const AboutBody = ({ activeTheme }) => {
  console.log(activeTheme, "----");

  const themeFixer = () => {
    if (activeTheme === "snow") {
      return "#009bef";
    } else if (activeTheme === "summer") {
      return "#F4653E";
    } else if (activeTheme === "spring") {
      return "#C9A100";
    } else if (activeTheme === "fall") {
      return "#CA0000";
    }
  };

  return (
    <div className="about-body">
      <div className="about-p">
        <span style={{ fontWeight: "bold", color: themeFixer() }}>
          Thank you
        </span>{" "}
        for checking out my portfolio! I am a{" "}
        <span style={{ fontWeight: "bold", color: themeFixer() }}>
          software engineer
        </span>{" "}
        with experience in building web applications from the ground up, who
        always finds zeal in debugging errors and finding more efficient
        approach to problems.
      </div>

      <div className="about-p">
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
      </div>

      <div className="about-p">
        When I am not coding, I love to indulge myself with horror films, watch
        and play hockey, go on camping adventures to various mountainous
        terrains, game on all systems, and discover new restaurants that awaken
        my palate.
      </div>
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
