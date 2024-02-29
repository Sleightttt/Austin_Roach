import "./Projects.css";
import imagespace from "../../assets/images/ImageSpace-demo-pic.png";

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
        <div className="image-cont">
          <img alt="imagespace" className="project-image" src={imagespace} />
        </div>

        <div className="about-body minus-one">
          A Flickr clone with 5 working CRUD features built using a React
          frontend with a Flask backend. Imagespace features an auto-tagging
          feature by implementing the AI image recognition API Imagga. Users can
          sign up for accounts, follow and unfollow other users, both like and
          comment on photos, and upload their own! Imagespace also features a
          search bar that allows users to search for other users, images, and
          tags. Users can also edit their own profiles and delete their own
          images and comments. This website was built with a 'mobile first'
          approach, and is fully responsive for mobile, tablet, and desktop.
        </div>
        <div className="tech-cont">
          <img
            alt="aws-icon"
            className="tech-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/amazonwebservices/amazonwebservices-original-wordmark.svg"
          />

          <img
            alt="sqlaclhemy-icon"
            className="tech-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlalchemy/sqlalchemy-original.svg"
          />

          <img
            alt="sqlite-icon"
            className="tech-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/sqlite/sqlite-original.svg"
          />

          <img
            alt="python-icon"
            className="tech-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg"
          />

          <img
            alt="react-icon"
            className="tech-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg"
          />

          <img
            alt="css-icon"
            className="tech-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg"
          />

          <img
            alt="flask-icon"
            className="tech-icon"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/flask/flask-original.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
