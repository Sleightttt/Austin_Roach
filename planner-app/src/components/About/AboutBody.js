import { Link } from "react-router-dom";

const AboutBody = () => {
  return (
    <nav style={{ width: "85%", backgroundColor: "blue" }}>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/about/team">Team</Link>
        </li>
        <li>
          <Link to="/about/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  );
};

export default AboutBody;
