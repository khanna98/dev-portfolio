import React, {useContext} from "react";
import "./Footer.scss";
import {motion} from "framer-motion";

import emoji from "react-easy-emoji";
import StyleContext from "../../contexts/StyleContext";

export default function Footer() {
  const {isDark} = useContext(StyleContext);
  return (
    <motion.div
      className="footer-div"
      // 2. Define the initial state (before animation)
      initial={{opacity: 0, y: 20}}
      // 3. Define the animation state (when in view)
      whileInView={{opacity: 1, y: 0}}
      // 4. Add a transition
      transition={{duration: 0.5}}
      // 5. Ensure it only runs once
      viewport={{once: true}}
    >
      <p className={isDark ? "dark-mode footer-text" : "footer-text"}>
        {emoji("Made with 🫶 by Mayank Khanna")}
      </p>
    </motion.div>
  );
}
