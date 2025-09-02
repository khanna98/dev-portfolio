import React, {useContext} from "react";
import "./Podcast.scss";
import {podcastSection} from "../../portfolio";
import { motion } from "framer-motion"
import StyleContext from "../../contexts/StyleContext";

export default function Podcast() {
  const {isDark} = useContext(StyleContext);
  if (!podcastSection.display) {
    return null;
  }
  return (
      <motion.div 
        className="main"
        // 2. Define the initial state (before animation)
        initial={{ opacity: 0, y: 20 }}
        // 3. Define the animation state (when in view)
        whileInView={{ opacity: 1, y: 0 }}
        // 4. Add a transition
        transition={{ duration: 0.5 }}
        // 5. Ensure it only runs once
        viewport={{ once: true }}
      >
        <div className="podcast-header">
          <h1 className="podcast-header-title">{podcastSection.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode podcast-header-subtitle"
                : "subTitle podcast-header-subtitle"
            }
          >
            {podcastSection.subtitle}
          </p>
        </div>
        <div className="podcast-main-div">
          {podcastSection.podcast.map((podcastLink, i) => {
            return (
              <div key={i}>
                <iframe
                  className="podcast"
                  src={podcastLink}
                  frameBorder="0"
                  scrolling="no"
                  title="Podcast"
                ></iframe>
              </div>
            );
          })}
        </div>
      </motion.div>
  );
}
