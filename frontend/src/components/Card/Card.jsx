import React, { useEffect, useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";
import gokuImg from "../../assets/goku.png";

const Card = ({ image }) => {
  const cardRef = useRef(null);
  const containerRef = useRef(null);
  const gokuImgsRef = useRef([]);

  useEffect(() => {
    AOS.init();
    const card = cardRef.current;
    const container = containerRef.current;
    const handleMouseMove = (e) => {
      const cardRect = card.getBoundingClientRect();
      const xOffset = e.clientX - cardRect.left;
      const yOffset = e.clientY - cardRect.top;
      const xAxis = (xOffset / cardRect.width - 0.5) * 50;
      const yAxis = (yOffset / cardRect.height - 0.5) * -50;

      card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    };

    const handleMouseEnter = () => {
      card.classList.add("has-transform");
      gokuImgsRef.current.forEach((img) => img.classList.add("has-transform"));
    };

    const handleMouseLeave = () => {
      card.style.transform = "rotateY(0deg) rotateX(0deg)";
      card.classList.remove("has-transform");
      gokuImgsRef.current.forEach((img) =>
        img.classList.remove("has-transform")
      );
    };

    container.addEventListener("mousemove", handleMouseMove);
    container.addEventListener("mouseenter", handleMouseEnter);
    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mousemove", handleMouseMove);
      container.removeEventListener("mouseenter", handleMouseEnter);
      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);

  return (
    <div className="container" ref={containerRef}>
      <div className="card" ref={cardRef}>
        <div className="name">
          <img
            src={image || gokuImg}
            alt="image"
            style={{ width: "300px", height: "250px" }}
            ref={(el) => (gokuImgsRef.current[0] = el)}
          />
        </div>
      </div>
    </div>
  );
};

export default Card;
