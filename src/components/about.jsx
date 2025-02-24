import "../css/about.css";
import aboutBg from "../assets/images/woods.jpg";
import Navbar from "./navbar";

const About = () => {
  return (
    <div 
      className="about"
      style={{ backgroundImage: `url(${aboutBg})` }}
    >
      <Navbar />
      <div className="about-content">
        <h2>About Me</h2>
        <p>Hello! I'm Rhenden Rada, a beginner developer about UI/UX and front-end development.</p>
        
        <h3>Contests Entered</h3>
        <ul>
          <li>None</li>
        </ul>

        <h3>Skills</h3>
        <ul>
          <li>Front-end Development</li>
          <li>UI/UX Design</li>
          <li>Graphic Design</li>
        </ul>

        <h3>Career Goals</h3>
        <p>I aim to become a skilled front-end developer and UI/UX designer.</p>
           <p>My goal is to create intuitive, user-friendly web applications.</p>
           I am passionate about working on projects that challenge my creativity.
           In the future, <p>I hope to contribute to open-source projects,
           collaborate with professionals, merge design principles with technology.</p>

        <h3>Fun Fact</h3>
        <p>I enjoy riding motorcycle for fun, checking out beautiful sceneries and looking for better designs.</p>
        
      </div>
    </div>
  );
};

export default About;
