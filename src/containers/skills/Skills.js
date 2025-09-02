import React, {useContext} from "react";
import "./Skills.scss";
import SoftwareSkill from "../../components/softwareSkills/SoftwareSkill";
import { skillsSection } from "../../portfolio";
import { motion } from "framer-motion"
// import codingPerson from "../../assets/lottie/what-i-do.json";
// import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Skills() {
  const {isDark} = useContext(StyleContext);
  if (!skillsSection.display) {
    return null;
  }
  return (
    <motion.div 
      className={isDark ? "dark-mode skills-main main" : "skills-main main"} id="skills"
      // 2. Define the initial state (before animation)
      initial={{ opacity: 0, y: 20 }}
      // 3. Define the animation state (when in view)
      whileInView={{ opacity: 1, y: 0 }}
      // 4. Add a transition
      transition={{ duration: 0.5 }}
      // 5. Ensure it only runs once
      viewport={{ once: true }}
    >
      <div className="skills-main-div">
        
          <div className="skills-text-div">
            <h1
              style={{marginBottom: 30}}
              className={isDark ? "dark-mode skills-heading" : "skills-heading"}
            >
              {skillsSection.title}{" "}
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode subTitle skills-text-subtitle"
                  : "subTitle skills-text-subtitle"
              }
            >
              {skillsSection.subTitle}
            </p>
              <SoftwareSkill />
            <div>
              {skillsSection.skills.map((skills, i) => {
                return (
                  <p
                    key={i}
                    className={
                      isDark
                        ? "dark-mode subTitle skills-text"
                        : "subTitle skills-text"
                    }
                  >
                    {skills}
                  </p>
                );
              })}
            </div>
          </div>
      </div>
    </motion.div>
  );
}