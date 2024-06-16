import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import cursorIcon from "./cursorIcon.png";
import aboutImage from "./aboutImage.png";
import serverIcon from "./serverIcon.png";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={aboutImage}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={cursorIcon} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
              As a Frontend Developer, my expertise lies in creating websites that are both responsive and optimized, ensuring a seamless user experience across various devices and platforms.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={serverIcon} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
              I possess expertise in crafting rapid and efficient backend infrastructures, as well as developing application programming interfaces (APIs) that prioritize performance and speed.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={cursorIcon } alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>Data Analyst</h3>
              <p>
              With a keen eye for detail, I specialize in analyzing and interpreting complex datasets to drive efficiency and optimization. My expertise lies in designing and implementing robust data analysis strategies that inform and enhance business decision-making processes.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
