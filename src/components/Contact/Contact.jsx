import React from "react";

import styles from "./Contact.module.css";
// import { getImageUrl } from "../../utils";


export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={"emailIcon.png"} alt="Email icon" />
          <a href="mailto:abhinavjha0239@gmail.com">abhinavjha0239@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={"emailIcon.png"}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/abhinav-jha-b56b572a3">linkedin</a>
        </li>
        <li className={styles.link}>
          <img src={"emailIcon.png"} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/myname</a>
        </li>
      </ul>
    </footer>
  );
};
