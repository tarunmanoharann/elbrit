import MainContainer from "./MainContainer";

import styles from "../../styles/Home.module.css";

const TopComponent = () => {
    return (
      <div className={styles.header}>
        <h1 className={styles.headerH1}>Essential Vitamins</h1>
        <MainContainer/>
        
      </div>
    );
  };
  
export default TopComponent;
  