import React, { useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import statedata from "../../data/statedata.js";
import "./StateDetail.css";

const stateCodes = {
  andaman_and_nicobar_island: "IN-AN",
  andhra_pradesh: "IN-AP",
  arunachal_pradesh: "IN-AR",
  assam: "IN-AS",
  bihar: "IN-BR",
  chhattisgarh: "IN-CT",
  delhi: "IN-DL",
  goa: "IN-GA",
  gujarat: "IN-GJ",
  haryana: "IN-HR",
  himachal_pradesh: "IN-HP",
  jammu_and_kashmir: "IN-JK",
  jharkhand: "IN-JH",
  karnataka: "IN-KA",
  kerala: "IN-KL",
  lakshadweep_island: "IN-LD",
  madhya_pradesh: "IN-MP",
  maharashtra: "IN-MH",
  manipur: "IN-MN",
  meghalaya: "IN-ML",
  mizoram: "IN-MZ",
  nagaland: "IN-NL",
  odisha: "IN-OR",
  punjab: "IN-PB",
  rajasthan: "IN-RJ",
  sikkim: "IN-SK",
  tamil_nadu: "IN-TN",
  telangana: "IN-TG",
  tripura: "IN-TR",
  uttar_pradesh: "IN-UP",
  uttarakhand: "IN-UT",
  west_bengal: "IN-WB",
};

function StateDetail() {
  const { stateName, category } = useParams();
  const navigate = useNavigate();
  const normalizedState = stateName?.toLowerCase().replace(/[\s-]+/g, "_");
  const stateInfo = statedata[normalizedState];
  const stateCode = stateCodes[normalizedState];

  useEffect(() => {
    if (!category) {
      return;
    }
    const body = document.body;
    body.classList.remove("culture-bg", "cuisine-bg", "sights-bg");
    if (category === "culture") {
      body.classList.add("culture-bg");
    } else if (category === "cuisine") {
      body.classList.add("cuisine-bg");
    } else if (category === "sights") {
      body.classList.add("sights-bg");
    }
    return () => {
      body.classList.remove("culture-bg", "cuisine-bg", "sights-bg");
    };
  }, [category]);

  const { text, images } = stateInfo[category];
  const textChunks = text.split("  ").map((chunk, i) => chunk.trim());
  const { scrollY } = useScroll();
  const isMobile = window.innerWidth <= 656;

  return (
    <>
      <button
        className="close-button"
        onClick={() => navigate(`/map?state=${stateCode}`)}
      >
        <span className="close-icon">✖</span>
      </button>
      <div className={`background-blur-bg ${category}-bg`}></div>
      <div className={`state-detail-container ${category}`}>
        <motion.h1
          className="state-title"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {stateName.toUpperCase()}
        </motion.h1>
        <motion.h2
          className="state-category"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          {category.toUpperCase()}
        </motion.h2>
        <div className="state-content">
          {textChunks.map((chunk, index) => {
            const scrollRange = 300;
            const maxYMovement = isMobile ? 0 : 100;
            const y = useTransform(
              scrollY,
              [index * scrollRange, (index + 1) * scrollRange],
              [maxYMovement, -maxYMovement]
            );
            const isEven = index % 2 === 0;
            const animationDistance = isMobile ? 50 : 500;

            return (
              <motion.div
                key={index}
                className={`state-section ${isEven ? "even" : "odd"}`}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: false, amount: 0.1 }}
              >
                <motion.div
                  style={{ y: isMobile ? 0 : y }}
                  className="state-text"
                  initial={{
                    opacity: 0,
                    x: isEven ? animationDistance : -animationDistance,
                  }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8, delay: isMobile ? 0.2 : 0.5 }}
                  viewport={{ once: false, amount: 0.2 }}
                >
                  {chunk}
                </motion.div>
                {images[index] && (
                  <motion.img
                    key={`img-${index}`}
                    src={images[index]}
                    alt={`${stateName} ${category} ${index}`}
                    className="state-image"
                    style={{ y: isMobile ? 0 : y }}
                    initial={{
                      opacity: 0,
                      x: isEven ? -animationDistance : animationDistance,
                    }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.8, delay: isMobile ? 0.2 : 0.5 }}
                    viewport={{ once: false, amount: 0.2 }}
                  />
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default StateDetail;
