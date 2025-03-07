import { Link } from "react-router-dom";
import { assets } from "../../assets/assets";
import JoinUsAgent from "../StyledComponents/JoinUsAgent/JoinUsAgent";
import "./NavBar.scss";
import residential from "../../pages/Residential/residential";

function NavBar() {
  return (
    <nav className="navbar">
      {/* Logo */}
      <div className="navbar-logo">
        <img src={assets.logo} alt="NetRent Logo" />
      </div>

      {/* Navigation Menu */}
      <ul className="navbar-menu">
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About Us</Link>
        </li>
        <li>
          <Link to="/residential">Residential</Link>
        </li>
        <li>
          <Link to="/commercial">Commercial</Link>
        </li>
        <li>
          <Link to="/business">Business</Link>
        </li>
      </ul>

      {/* Join Us Button */}
      <div className="navbar-right">
        <JoinUsAgent />
      </div>
    </nav>
  );
}

export default NavBar;
