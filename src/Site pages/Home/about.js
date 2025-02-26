import React from 'react';
import styles from '../../styles/About.module.css';

function About() {
  return (
    <div className={styles.aboutMissionSection}>
      <div className={styles.aboutBox}>
        <h3 className={styles.sectionTitle}>ABOUT US</h3>
        <h2 className={styles.aboutTitle}>
          We are a community of content writers who share their learnings
        </h2>
        <p className={styles.aboutText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <a href="#" className={styles.readMoreLink}>Read More {'>'}</a>
      </div>

      <div className={styles.missionBox}>
        <h3 className={styles.sectionTitle}>OUR MISSION</h3>
        <h2 className={styles.missionTitle}>
          Creating valuable content for creatives all around the world
        </h2>
        <p className={styles.missionText}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
        </p>
      </div>
    </div>
  );
}

export default About;