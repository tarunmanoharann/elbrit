import React from "react";
import styles from "./IngredientsComponent.module.css";

const IngredientsComponent = () => {
  const rowOneItems = [
    {
      heading: "Vitamin C",
      paragraph: "Vitamin C as ascorbic acid",
      backgroundImage: "/vitc.png",
      width: "20%", // Custom width for this item
    },
    {
      heading: "Vitamin B3",
      paragraph: "Niacin for healthy gut and skin",
      backgroundImage: "/vitb3.png",
      width: "20%", // Custom width for this item
    },
  

  
    {
      heading: "Magnesium",
      paragraph: "Boost energy and support muscle function",
      backgroundImage: "/magnisium.png",
      width: "20%",
    },
    {
      heading: "Hyaluronic Acid",
      paragraph: "For smooth, supple and soft skin!",
      backgroundImage: "/hydrocloric.png",
      width: "20%",
    },
    {
      heading: "Lactobacillus",
      paragraph: "Invigorate your gut microbiome",
      backgroundImage: "/lactobacillos.png",
      width: "20%",
    }
  ];

  const renderItems = (items) =>
    items.map((item, index) => (
      <div
        key={index}
        className={styles.item}
        style={{
          backgroundImage: `url(${item.backgroundImage})`,
          flexBasis: item.width,
        }}
      >
        <div>
        <h3 className={styles.heading}>{item.heading}</h3>
        <p className={styles.paragraph}>{item.paragraph}</p>
        </div>
        
        <a href="#" className={styles.viewMore}>
          View More
        </a>
      </div>
    ));

  return (
    <div className={styles.container}>
        <div className={`${styles.item} ${styles.item1}`}>
            <h3 className={styles.card1Heading1}>INGREDIENTS</h3>
        <h3 className={styles.card1heading2}>Better Ingredients</h3>
        <p className={styles.card1para}>Only the best when you choose products offered on our platform - high-quality ingredients for high quality products! </p>
        </div>
      {renderItems(rowOneItems)}
      <div className={styles.lastitem}>
        <img src="./lastitem.png" alt="lastitem" loading="lazy"/>
    </div>
    </div>
  );
};

export default IngredientsComponent;
