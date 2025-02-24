import { Link } from "react-router-dom";
import "../css/navbar.css";
import logo from "../assets/images/logo.jpg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <img src={logo} alt="Logo" />
      </div>
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><a href="#">Resume</a></li>
        <li><a href="#">Portfolio</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;