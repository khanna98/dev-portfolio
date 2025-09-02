import React, {useContext} from "react";
import "./WorkExperience.scss";
import ExperienceCard from "../../components/experienceCard/ExperienceCard";
import {workExperiences} from "../../portfolio";
import { motion } from "framer-motion"
import StyleContext from "../../contexts/StyleContext";

export default function WorkExperience() {
  const {isDark} = useContext(StyleContext);
  if (workExperiences.display) {
    return (
      <motion.div
        id="experience"
        // 2. Define the initial state (before animation)
        initial={{ opacity: 0, y: 20 }}
        // 3. Define the animation state (when in view)
        whileInView={{ opacity: 1, y: 0 }}
        // 4. Add a transition
        transition={{ duration: 0.5 }}
        // 5. Ensure it only runs once
        viewport={{ once: true }}
      >
          <div className="experience-container" id="workExperience">
            <div>
              <h1 className="experience-heading">Experiences</h1>
              <div className="experience-cards-div">
                {workExperiences.experience.map((card, i) => {
                  return (
                    <ExperienceCard
                      key={i}
                      isDark={isDark}
                      cardInfo={{
                        company: card.company,
                        desc: card.desc,
                        date: card.date,
                        companylogo: card.companylogo,
                        role: card.role,
                        descBullets: card.descBullets
                      }}
                    />
                  );
                })}
              </div>
            </div>
          </div>
      </motion.div>
    );
  }
  return null;
}
