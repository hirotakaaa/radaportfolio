import "../css/project.css";
import projectBg from "../assets/images/woods.jpg";
import calculatorImage from "../assets/images/scical.png";
import project2Image from "../assets/images/pokemon.png";
import Navbar from "./navbar";

const Project = () => {
  return (
    <div 
      className="project-page"
      style={{ backgroundImage: `url(${projectBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}
    >
      <Navbar />
      <div className="project-content">
        <h2>My Projects</h2>
        <p>Here are some of the projects I've worked on.</p>
        
        <div className="project-container">
          <div className="project-box">
            <h3>Scientific Calculator</h3>
            <div className="project-item">
              <img src={calculatorImage} alt="Scientific Calculator Screenshot" className="project-image" />
              <a href="https://sciencalu.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link web-link">
                Web
              </a>
              <a href="https://github.com/hirotakaaa/Sciencalcu" target="_blank" rel="noopener noreferrer" className="project-link github-link">
                GitHub
              </a>
            </div>
            <p>
              A fully functional scientific calculator built with HTML, CSS, and JavaScript. 
              It supports basic arithmetic operations, scientific functions. The design is sleek and user-friendly, 
              with a responsive layout for both desktop and mobile devices.
            </p>
          </div>

          <div className="project-box">
            <h3>Pokemon Simulation Game</h3>
            <div className="project-item">
              <img src={project2Image} alt="Project 2 Screenshot" className="project-image" />
              <a href="https://clever-custard-c3d08e.netlify.app/" target="_blank" rel="noopener noreferrer" className="project-link web-link">
                Web
              </a>
              <a href="https://github.com/yourusername/pokemon-battle" target="_blank" rel="noopener noreferrer" className="project-link github-link">
                GitHub
              </a>
            </div>
            <p>
              A System weekly project built with using reactjs, A pokemon simulation battle!.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project;