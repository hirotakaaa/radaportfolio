import "../css/contact.css";
import woodsImage from "../assets/images/woods.jpg";
import Navbar from "./navbar";

const Contact = () => {
  return (
    <div className="contact-page" style={{ backgroundImage: `url(${woodsImage})` }}>
      <Navbar />
      <div className="contact-content">
        <h3>Get in Touch</h3>
        <h1>Contact Me</h1>
        <p>Connect with me through social media for collaboration or inquiries.</p>
        <div className="social-links">
          <a href="https://www.facebook.com/rhenden.rada.9" target="_blank" rel="noopener noreferrer" className="btn social-btn">Facebook</a>
          <a href="https://github.com/hirotakaaa" target="_blank" rel="noopener noreferrer" className="btn social-btn">GitHub</a>
        </div>
      </div>
    </div>
  );
};

export default Contact;