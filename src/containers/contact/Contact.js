import React, {useContext} from "react";
import "./Contact.scss";
import SocialMedia from "../../components/socialMedia/SocialMedia";
import {illustration, contactInfo} from "../../portfolio";
import {motion} from "framer-motion";
import email from "../../assets/lottie/email";
import DisplayLottie from "../../components/displayLottie/DisplayLottie";
import StyleContext from "../../contexts/StyleContext";

export default function Contact() {
  const {isDark} = useContext(StyleContext);
  return (
    <motion.div
      className="main contact-margin-top"
      id="contact"
      // 2. Define the initial state (before animation)
      initial={{opacity: 0, y: 20}}
      // 3. Define the animation state (when in view)
      whileInView={{opacity: 1, y: 0}}
      // 4. Add a transition
      transition={{duration: 0.5}}
      // 5. Ensure it only runs once
      viewport={{once: true}}
    >
      <div className="contact-div-main">
        <div className="contact-header">
          <h1 className="heading contact-title">{contactInfo.title}</h1>
          <p
            className={
              isDark
                ? "dark-mode contact-subtitle"
                : "subTitle contact-subtitle"
            }
          >
            {contactInfo.subtitle}
          </p>
          <div
            className={
              isDark ? "dark-mode contact-text-div" : "contact-text-div"
            }
          >
            {contactInfo.number && (
              <>
                <a
                  className="contact-detail"
                  href={"tel:" + contactInfo.number}
                >
                  {contactInfo.number}
                </a>
                <br />
                <br />
              </>
            )}
            <a
              className="contact-detail-email"
              href={"mailto:" + contactInfo.email_address}
            >
              {contactInfo.email_address}
            </a>
            <br />
            <br />
            <SocialMedia />
          </div>
        </div>
        <div className="contact-image-div">
          {illustration.animated ? (
            <DisplayLottie animationData={email} />
          ) : (
            <img
              alt="Man working"
              src={require("../../assets/images/svg/contactMailDark.svg")}
            ></img>
          )}
        </div>
      </div>
    </motion.div>
  );
}
