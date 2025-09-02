import React, { useContext } from "react";
import { motion } from "motion/react"
import "./EducationCard.scss";
import StyleContext from "../../contexts/StyleContext";

// Defined outside to prevent re-creation on every render
const GetDescBullets = ({ descBullets }) => {
  return descBullets
    ? descBullets.map((item, i) => (
        <li key={i} className="subTitle">
          {item}
        </li>
      ))
    : null;
};

export default function EducationCard({ school }) {
  const { isDark } = useContext(StyleContext);

  return (
    <div>
      <motion.div
        className="education-card"
        // 2. Define the initial state (before animation)
        initial={{ opacity: 0, y: 20 }}
        // 3. Define the animation state (when in view)
        whileInView={{ opacity: 1, y: 0 }}
        // 4. Add a transition
        transition={{ duration: 0.5 }}
        // 5. Ensure it only runs once
        viewport={{ once: true }}
      >
        <div className="education-card-left">
          <img
            crossOrigin={"anonymous"}
            className="education-roundedimg"
            src={school.logo}
            alt={school.schoolName}
          />
        </div>
        <div className="education-card-right">
          <h5 className="education-text-school">{school.schoolName}</h5>

          <div className="education-text-details">
            <h5
              className={
                isDark
                  ? "dark-mode education-text-subHeader"
                  : "education-text-subHeader"
              }
            >
              {school.subHeader}
            </h5>
            <p
              className={`${
                isDark ? "dark-mode" : ""
              } education-text-duration`}
            >
              {school.duration}
            </p>
            <p className="education-text-desc">{school.desc}</p>
            <div className="education-text-bullets">
              <ul>
                <GetDescBullets descBullets={school.descBullets} />
              </ul>
            </div>
          </div>
        </div> 
      </motion.div>
      <motion.div className="education-card-border" ></motion.div>
      </div>
  );
}