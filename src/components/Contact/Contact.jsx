import React from "react";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";
import emailIcon from "./emailIcon.png";
import githubIcon from "./githubIcon.png";
import linkedinIcon from "./linkedinIcon.png";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:abhinavjha0239@gmail.com">abhinavjha0239@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/abhinav-jha-b56b572a3">linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};
