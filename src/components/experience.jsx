import "../css/experience.css";
import woodsImage from "../assets/images/woods.jpg";
import Navbar from "./navbar";

const Experience = () => {
  return (
    <div className="experience-page" style={{ backgroundImage: `url(${woodsImage})` }}>
      <Navbar />
      <h1>My Experience</h1>
      <div className="experience-content">
        <div className="speech-container">
          <h3>Company Details</h3>
          <div className="company-info">
            <ul>
            <p><strong>Company:</strong> TranscendEdge Enterprise</p>
            <p><strong>Role:</strong> Tester</p>
            <p><strong>Duration:</strong> 2023 - 2024</p>
            </ul>
          </div>
          <h3>Experience</h3>
          <p>
            <ul>
              As an IT student, I collaborated with my groupmates to create TranscendEdge Enterprise, a software company for our Software Engineering project. It aims to provide software products that align with the vision, goals, and challenges of our clients.
            </ul>
            <ul>
              Our four-person team split roles: Lead Programmer, Project Manager, Quality Assurance, and Tester.
            </ul>
            <ul>
              We faced difficulties such as feature errors, clashing schedules, and lagging app performance. By focusing on critical tasks, improving communication, and optimizing our system, we overcame these challenges and received excellent feedback.
            </ul>
            <ul>
              My experience with TranscendEdge taught me the value of teamwork, clear communication, and understanding each team member's strengths, which led to the project's success. I thoroughly enjoyed working with this team.
            </ul>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Experience;