import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import vid from "../../assets/vid.mp4";
import qr from "../../assets/qr.jpg";
import img from "../../assets/img.jpeg";
import img1 from "../../assets/img1.jpeg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import user1 from "../../assets/user1.png";
import user2 from "../../assets/user2.png";
import user3 from "../../assets/user3.png";
import user4 from "../../assets/user4.png";
import "./HomePage.css";
import Card from "../Card/Card.jsx";
import {
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
} from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

function HomePage() {
  const videoRef = useRef(null);

  const skipVideoSections = () => {
    if (videoRef.current) {
      let currentTime = videoRef.current.currentTime;
      if (currentTime >= 3 && currentTime < 7) {
        videoRef.current.currentTime = 8;
      }
      else if(currentTime >= 11 && currentTime < 15){
        videoRef.current.currentTime = 15;
      }
      else if(currentTime >= 21 && currentTime < 22){
        videoRef.current.currentTime = 23;
      }
      else if(currentTime >= 44 && currentTime < 50){
        videoRef.current.currentTime = 50;
      }
      else if(currentTime >= 68){
        videoRef.current.currentTime = 0;
      }
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const [currentImage, setCurrentImage] = useState(0);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: false,
      easing: "ease-out-cubic",
      offset: 250,
    });
    const interval = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % 4);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("timeupdate", skipVideoSections);
    }
    return () => {
      if (videoRef.current) {
        videoRef.current.removeEventListener("timeupdate", skipVideoSections);
      }
    };
  }, []);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.85;
    }
  }, []);

  return (
    <>
      <div className="video-container">
        <video
          ref={videoRef}
          src={vid}
          autoPlay
          loop
          muted
          id="background-video"
        ></video>
        <motion.div
          className="homepage-container"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.h1
            className="heading"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            BHARAT EXPLORER
          </motion.h1>
          <motion.p
            className="para"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Discover the cultural richness, heritage, cuisine, and sights of
            India — designed for students, tourists, and curious minds alike.
          </motion.p>
          <motion.div
            className="link-container"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <Link to="/map" className="link">
              Explore India
            </Link>
            <Link to="/login" className="link">
              Take The Quiz
            </Link>
          </motion.div>
          <motion.div
            className="hollow-text"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 1.4 }}
          >
            BHARAT
          </motion.div>
        </motion.div>
      </div>

      <div className="box">
        <div className="highlights" data-aos="fade-up">
          <h2 className="subheading">Why Choose Bharat Explorer?</h2>
          <ul className="features-list">
            <li data-aos="fade-right">
              Explore iconic cuisine, traditions & festivals across all states
            </li>
            <li data-aos="fade-left">
              Real stories and testimonials from visitors and locals
            </li>
            <li data-aos="fade-right">
              A one-stop platform for culture, sights, and interactive learning
            </li>
          </ul>
        </div>

        <div className="image-showcase" data-aos="zoom-in">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImage}
              src={[img, img1, img2, img3][currentImage]}
              alt="Bharat Explorer Showcase"
              className="showcase-img"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 1 }}
            />
          </AnimatePresence>
        </div>

        <div className="about-section" data-aos="fade-up">
          <h2 className="subheading">Meet the Team Behind Bharat Explorer</h2>
          <p className="about-text" data-aos="fade-right">
            Bharat Explorer is not just a website—it is a passion project
            created to celebrate the incredible diversity of India. From the
            snow-capped peaks of the Himalayas to the serene beaches of Kerala,
            from the fiery flavors of Rajasthani cuisine to the soulful dance
            traditions of Tamil Nadu, our vision is to bring together every
            aspect of India’s cultural and historical identity into a single
            interactive platform.
            <br />
            <br />
            Behind this initiative is a dedicated team of young enthusiasts who
            believe in making knowledge fun, engaging, and accessible to
            everyone—students, travelers, or anyone curious about India’s vast
            heritage. Each member of our team contributes unique skills, from
            research and design to coding and storytelling, ensuring Bharat
            Explorer remains both informative and enjoyable.
          </p>
        </div>

        <div className="about">
          <div data-aos="fade-right">
            <Card image={user1} />
          </div>
          <div data-aos="fade-up">
            <Card image={user2} />
          </div>
          <div data-aos="fade-up">
            <Card image={user3} />
          </div>
          <div data-aos="fade-left">
            <Card image={user4} />
          </div>
        </div>

        <div className="team-panel">
          <div className="team-member">
            <h4>Divanshi</h4>
            <div className="icons">
              <a
                href="mailto:ddivanshi_be23@thapar.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/divanshi-a16204295?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app "
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/divanshi_1805?igsh=cTlmcnV0OHV4YXR3"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="team-member">
            <h4>Danish</h4>
            <div className="icons">
              <a
                href="mailto:dsingh3_be23@thapar.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/danishveer-singh-5a2a8a382"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/danishveer007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="team-member">
            <h4>Ishant</h4>
            <div className="icons">
              <a
                href="mailto:isingh3_be23@thapar.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/ishantsinghh"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/danishveer007"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
          <div className="team-member">
            <h4>Sarvpreet</h4>
            <div className="icons">
              <a
                href="mailto:skaur5_be23@thapar.edu"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope />
              </a>
              <a
                href="https://www.linkedin.com/in/sarvpreet-kaur-68608a2b1"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedinIn />
              </a>
              <a
                href="https://www.instagram.com/_sarv31_?igsh=djVwaDVzNzNqa2pz"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        <footer className="footer" data-aos="fade-up">
          <div className="footer-container">
            <div className="footer-section logo">
              <h2 className="logo-text">
                <span className="incredible">Bharat</span>{" "}
                <span className="india">Explorer</span>
              </h2>
            </div>
            <div className="footer-section quick-links">
              <h3 className="quick-links">Quick links</h3>
              <ul>
                <li>
                  <Link to="/map">Visit the Map</Link>
                </li>
                <li>
                  <Link to="/login">Login for Quiz</Link>
                </li>
                <li>
                  <Link to="/register">Register for Quiz</Link>
                </li>
              </ul>
            </div>

            <div className="footer-section qr">
              <h3>Scan to chat</h3>
              <img src={qr} alt="QR Code" />
            </div>
          </div>

          <div className="footer-bottom">
            <p>Terms of Use | Privacy Policy | Contact Us</p>
            <p>
              © {new Date().getFullYear()} Bharat Explorer. A student-driven
              project celebrating India’s culture and diversity.
            </p>
          </div>

          <div className="footer-link" onClick={scrollToTop}>
            Back to Top ↑
          </div>
        </footer>
      </div>
    </>
  );
}

export default HomePage;
