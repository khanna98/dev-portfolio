import React from "react";
import "./Progress.scss";
import {illustration, techStack} from "../../portfolio";
import {motion} from "framer-motion";
import Build from "../../assets/lottie/build";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";

export default function StackProgress() {
  if (techStack.viewSkillBars) {
    return (
      <motion.div
        className="skills-container"
        // 2. Define the initial state (before animation)
        initial={{opacity: 0, y: 20}}
        // 3. Define the animation state (when in view)
        whileInView={{opacity: 1, y: 0}}
        // 4. Add a transition
        transition={{duration: 0.5}}
        // 5. Ensure it only runs once
        viewport={{once: true}}
      >
        <div className="skills-bar">
          <h1 className="skills-heading">Proficiency</h1>
          {techStack.experience.map((exp, i) => {
            const progressStyle = {
              width: exp.progressPercentage
            };
            return (
              <div key={i} className="skill">
                <p>{exp.Stack}</p>
                <div className="meter">
                  <span style={progressStyle}></span>
                </div>
              </div>
            );
          })}
        </div>

        <div className="skills-image">
          {illustration.animated ? (
            <DisplayLottie animationData={Build} />
          ) : (
            <img alt="Skills" src={require("../../assets/images/skill.svg")} />
          )}
        </div>
      </motion.div>
    );
  }
  return null;
}
