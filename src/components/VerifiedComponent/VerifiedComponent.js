import React from "react";
import styles from '../../styles/VerifiedComponent.module.css';
const VerifiedComponent = () => {
  const data = [
    {
      image: "/clinical.png",
      heading: "Clinically Studied",
      paragraph: "All products that we offer have undergone lab and safety tests",
    },
    {
      image: "/vegitarian.png",
      heading: "Vegetarian Friendly",
      paragraph: "We have a wide selection of vegetarian products to meet your needs",
    },
    {
      image: "/madeindia.png",
      heading: "Made in India",
      paragraph: "Shop local and explore health products made right here in India",
    },
    {
      image: "/freeship.png",
      heading: "Free shipping",
      paragraph: "We deliver to your door with no shipping costs on your orders",
    },
    {
      image: "/norisk.png",
      heading: "No Risk",
      paragraph: "We ensure that all products are safe and within their use-by date",
    },
    {
      image: "/gmo.png",
      heading: "GMO Free",
      paragraph: "Natural, no modified products and derivatives for those who need it",
    },
  ];

  return (
    <div className={styles.backgroundContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.cardContainer}>
        {data.map((item, index) => (
          <div className={styles.card} key={index}>
            <img src={item.image} alt={item.heading} className={styles.image} loading="lazy"/>
            <h3 className={styles.heading}>{item.heading}</h3>
            <p className={styles.paragraph}>{item.paragraph}</p>
          </div>
        ))}
        </div>
      </div>
    </div>
  );
};

export default VerifiedComponent;
