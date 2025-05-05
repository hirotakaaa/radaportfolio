import "../css/hero.css";
import heroImage from "../assets/images/woods.jpg";
import { Link } from "react-router-dom";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div className="page-container">
      <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
        <Navbar />
        <div className="hero-content">
          <h3>Rhenden Rada</h3>
          <h1>Portfolio</h1>
          <p>An aspiring developer.</p>
          <Link to="/about">
            <button className="btn">About</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;