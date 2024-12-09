import React from "react";
import styles from "./LatestNews.module.css";

const LatestNewsComponent = () => {
  const newsData = [
    { id: 1, image: "/gingerturmeric.png", title: "20 APR", description: "The Covid-19 Epidemic In 2022 is Back" },
    { id: 2, image: "/handcapsule.png", title: "21 APR", description: "This is the second breaking news." },
    { id: 3, image: "/gingerturmeric.png", title: "22 APR", description: "The Covid-19 Epidemic In 2022" },
    { id: 4, image: "/handcapsule.png",  description: "This is the fourth breaking news." },
    { id: 5, image: "/gingerturmeric.png", title: "24 APR", description: "The Covid-19 Epidemic In 2022" },
    { id: 6, image: "/handcapsule.png", title: "25 APR", description: "This is the sixth breaking news." },
    { id: 7, image: "/gingerturmeric.png", title: "26 APR", description: "The Covid-19 Epidemic In 2022" },
    { id: 8, image: "/handcapsule.png", title: "27 APR", description: "This is the eighth breaking news." },
  ];

  const heights = ["60%", "40%", "40%", "60%", "60%", "40%", "40%", "60%"];

  const groupedNews = Array.from({ length: 4 }, (_, i) => newsData.slice(i * 2, i * 2 + 2));

  return (
    <div className={styles.container}>
      {groupedNews.map((group, index) => (
        <div
          key={index}
          className={`${styles.parentContainer} ${index > 0 ? styles.hideOnMobile : ""}`} /* Show only the first parent on mobile */
        >
          {group.map((item, idx) => (
            <div
              key={item.id}
              className={styles.childContainer } 
              style={{ height: heights[index * 2 + idx] }}
            >
              <div
                className={styles.imageBackground}
                style={{ backgroundImage: `url(${item.image})` }}
                
              >
                <p className={styles.title}>{item.title}</p>
                <p className={styles.description}>{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default LatestNewsComponent;