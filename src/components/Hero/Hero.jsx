import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Abhinav Kumar Jha</h1>
        <p className={styles.description}>
        As an emerging Full-Stack Developer and Data Analyst, I am skilled in utilizing React and NodeJS, complemented by my proficiency in data analysis tools. I’m eager to connect and contribute to projects that embrace both development and data analytics.
        </p>
        <a href="mailto:abhinavjha0239@gmail.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={getImageUrl("hero/heroImage.png")}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
