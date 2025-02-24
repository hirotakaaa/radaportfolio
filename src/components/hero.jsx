import "../css/hero.css";
import heroImage from "../assets/images/woods.jpg";
import Navbar from "./navbar";

const Hero = () => {
  return (
    <div className="hero" style={{ backgroundImage: `url(${heroImage})` }}>
      <Navbar />
      <div className="hero-content">
        <h3>Rhenden Rada</h3>
        <h1>Portfolio</h1>
        <p>An aspiring developer.</p>
        <button className="btn">Resume</button>
      </div>
    </div>
  );
};

export default Hero;