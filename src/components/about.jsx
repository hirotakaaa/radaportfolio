import "../css/about.css";
import aboutBg from "../assets/images/woods.jpg";
import Navbar from "./navbar";

const About = () => {
  return (
    <div 
      className="about" style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <Navbar />
      <div className="about-content">
        <div className="content-section about-me">
          <h2>About Me</h2>
          <p>Hello! I'm Rhenden Rada, a beginner developer about UI/UX and front-end development.</p>
        </div>
        
        <div className="content-row">
          <div className="content-section">
            <h3>Contests Entered</h3>
            <ul>
              <li>None</li>
            </ul>
          </div>
          <div className="content-section">
            <h3>Skills</h3>
            <ul>
              <li>Front-end Development</li>
              <li>UI/UX Design</li>
              <li>Graphic Design</li>
            </ul>
          </div>
        </div>

        <div className="content-row">
          <div className="content-section">
            <h3>Career Goals</h3>
            <p>I aim to become a skilled front-end developer and UI/UX designer.</p>
            <p>My goal is to create intuitive, user-friendly web applications.</p>
            <p>I am passionate about working on projects that challenge my creativity.</p>
            <p>In the future, I hope to contribute to open-source projects, collaborate with professionals, merge design principles with technology.</p>
          </div>
          <div className="content-section">
            <h3>Fun Fact</h3>
            <p>I enjoy riding motorcycle for fun, checking out beautiful sceneries and looking for better designs.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;