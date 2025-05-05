import "../css/blog.css";
import backgroundImage from "../assets/images/woods.jpg";
import Navbar from "./navbar";
import blogImage1 from "../assets/images/SE.jpg";
import blogImage2 from "../assets/images/capstone.jpg";
import blogImage3 from "../assets/images/ecommerce.jpg";
import blogImage4 from "../assets/images/Appdev.jpg";
import blogImage5 from "../assets/images/pandemic.webp";
import blogImage6 from "../assets/images/BOTB.jpg"; 
import blogImage7 from "../assets/images/portfolio.png";

const Blog = () => {
  return (
    <div className="page-container">
      <div className="blog" style={{ backgroundImage: `url(${backgroundImage})` }}>
        <Navbar />
        <div className="blog-content">
          <h2>My Blogs</h2>
          <div className="blog-posts">
            <div className="post-section">
              <h3>Software Engineering</h3>
              <h5>May 3 2024</h5>
              <img src={blogImage1} alt="Software Engineering Blog" className="post-image" />
              <p>Reflecting on my journey in software engineering and key projects.</p>
              <p>The challenges of task and difficulties of in a Team.</p>
            </div>
            <div className="post-section">
              <h3>Capstone</h3>
              <h5>May 3 2024</h5>
              <img src={blogImage2} alt="Capstone Blog" className="post-image" />
              <p>LibroCompartir.</p>
              <p>A capstone journey system features the book sharing platform</p>
            </div>
            <div className="post-section">
              <h3>E-Commerce</h3>
              <h5>May 3 2024</h5>
              <img src={blogImage3} alt="E-Commerce Blog" className="post-image" />
              <p>How the ecommerce influenced my learning and project development.</p>
              <p>Creating an e-commerce system, I gained web development skills, from designing interfaces. It enhanced my understanding of user experience and complex system management.</p>
            </div>
            <div className="post-section">
              <h3>Application Development</h3>
              <h5>May 5 2024</h5>
              <img src={blogImage4} alt="Appdev Blog" className="post-image" />
              <p>First PHP project that i really invested on developing.</p>
              <p>Exploring new ways and their impact on my development.</p>
            </div>
            <div className="post-section">
              <h3>Pandemic Quiz</h3>
              <h5>May 5 2024</h5>
              <img src={blogImage5} alt="Pandemic Blog" className="post-image" />
              <p>Early days pandemic, Ready to take the quiz online.</p>
              <p>Realize the big impact of technology in daily basis and pandemic era.</p>
            </div>
            <div className="post-section">
              <h3>University BOTB!</h3>
              <h5>May 5 2024</h5>
              <img src={blogImage6} alt="Botb blog" className="post-image" />
              <p>The excitement of each Band performing.</p>
              <p>Learned to appreciate events in University.</p>
            </div>
            <div className="post-section">
              <h3>React Portfolio</h3>
              <h5>May 5 2024</h5>
              <img src={blogImage7} alt="Porfolio Blog" className="post-image" />
              <p>My first ever portfolio using reactjs.</p>
              <p>Faced many challenges as first time learning using react.</p>
              <p>Learn to use and utilize github.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;