import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects-cont">
      <div className="project-nav">
        <div className="entry-box entry-box-image active-entry">
          <div className="nav-text">
            <span style={{ color: "#06cbfc" }}>Image</span>
            <span style={{ color: "#bb00ff" }}>space</span>
          </div>
        </div>
        <div className="entry-box entry-box-proof ">
          <div className="nav-text">
            <span style={{ color: "#e867ff" }}>proofofshred</span>
          </div>
        </div>
        <div className="entry-box entry-box-job">
          <div className="nav-text">
            {" "}
            <span style={{ color: "#90eafe" }}>Jobseeker</span>
          </div>
        </div>
      </div>
      <div className="about-box">
        <div>About header</div>
        <div>About technologies</div>
        <div>About image</div>
        <div>About body</div>
      </div>
    </div>
  );
};

export default Projects;
