import { Link } from "react-router-dom";

const AboutNav = () => {
  return (
    <nav style={{ width: "15%" }}>
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

export default AboutNav;
