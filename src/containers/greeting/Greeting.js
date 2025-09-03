import React, {useContext} from "react";
import {motion} from "framer-motion";
import "./Greeting.scss";
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import profileImage from "../../assets/images/webp/mayank.webp";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import Button from "../../components/button/Button";

import {greeting} from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";

export default function Greeting() {
  const {isDark} = useContext(StyleContext);
  if (!greeting.displayGreeting) {
    return null;
  }
  return (
    <motion.div
      className="greet-main"
      id="greeting"
      // 2. Define the initial state (before animation)
      initial={{opacity: 0, y: 20}}
      // 3. Define the animation state (when in view)
      whileInView={{opacity: 1, y: 0}}
      // 4. Add a transition
      transition={{duration: 0.5}}
      // 5. Ensure it only runs once
      viewport={{once: true}}
    >
      <div className="greeting-main">
        <div className="greeting-text-div">
          <div>
            <h1
              className={isDark ? "dark-mode greeting-text" : "greeting-text"}
            >
              {" "}
              {greeting.title} <span className="wave-emoji">{"👋"}</span>
            </h1>
            <p
              className={
                isDark
                  ? "dark-mode greeting-text-p"
                  : "greeting-text-p subTitle"
              }
            >
              {greeting.subTitle}
            </p>
            <SocialMedia />
            <div className="button-greeting-div">
              <Button text="Contact me" href="#contact" />
              {greeting.resumeLink && (
                <Button
                  text="See my resume"
                  newTab={true}
                  href={greeting.resumeLink}
                />
              )}
            </div>
          </div>
        </div>
        <div className="greeting-image-div">
          <LazyLoadImage
            alt="Profile Picture"
            src={profileImage} 
            effect="blur"
            style={{
              width: "100%",
              height: "auto",
              borderRadius: "20%"
            }}
          />
        </div>
      </div>
    </motion.div>
  );
}
