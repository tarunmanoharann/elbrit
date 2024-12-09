import React from 'react';
import styles from '../../styles/maincontainer.module.css';

// import capsulebox from "../../../public/capsulebox.jpg"

const MainContainer = () => {
  return (
    <div className={styles.mainContainer}>
      {/* Left Side */}
      <div className={styles.leftContainer}>
        <p className={styles.smallHeading}>Online Medical Supplies</p>
        <h2 className={styles.leftContainerH2}>Get Your Vitamins & Minerals</h2>
        <button className={styles.exploreButton}>Explore</button>
      </div>

      {/* Middle */}
      <div className={styles.middleContainer}>
        <div className={styles.imageBackground}>
          <img src="/capsulebox.png" alt="Probiotics" className={styles.mainImage} loading='lazy'/>
        </div>
      </div>

      {/* Right Side */}
      <div className={styles.rightContainer}>
        <div className={styles.infoItem}>
          <img src="/vitamin.jpg" alt="Vitamins Icon" className={styles.infoItemImg} loading='lazy'/>
          <div>
            <h3 className={styles.infoItemH3}>Vitamins</h3>
            <p className={styles.infoItemP}>Increased vitamins and minerals in your diet</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <img src="/waightloss.png" alt="Weight Loss Icon" className={styles.infoItemImg} loading='lazy' />
          <div>
            <h3 className={styles.infoItemH3}>Weight Loss</h3>
            <p className={styles.infoItemP}>Weight Loss <br></br>Find scientifically proven solutions</p>
          </div>
        </div>
        <div className={styles.infoItem}>
          <img src="/food.png" alt="Functional Foods Icon" className={styles.infoItemImg} loading='lazy'/>
          <div>
            <h3 className={styles.infoItemH3}>Functional Foods</h3>
            <p className={styles.infoItemP}>Functional Foods <br></br>From protein powders to baby formula</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContainer;
