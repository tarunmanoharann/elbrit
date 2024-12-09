import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  const contactData = [
    {
      id: 1,
      image: "/phone.png",
      title: "Get In Touch",
      description: "We would love to hear from you. Reach out with any questions or concerns."
    },
    {
      id: 2,
      image: "/email.png",
      title: "Our Office",
      description: "Visit us at our office location for a face-to-face conversation."
    },
    {
      id: 3,
      image: "/locatipon.png",
      title: "Customer Support",
      description: "Our support team is here to assist you with any inquiries."
    }
  ];

  return (
    <div className={styles.container}>
        <div className={styles.contactCont}>

       
      {contactData.map((item) => (
        <div key={item.id} className={styles.contactItem}>
          <div className={styles.imageContainer}>
            <img src={item.image} className={styles.img}/>
          </div>
          <div className={styles.textContainer}>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.description}>{item.description}</p>
          </div>
        </div>
      ))}
       </div>
       <div className={styles.companyLogo}>
        <img src="/company.png"  alt="logo" loading="lazy"/>
        <p className={styles.description}>Your health, physical and emotional well-being is important to us. <br></br>We are always by your side and have made it even easier for you to find the necessary vitamins.</p>
       </div>
       <div className={styles.copyCont}>
        <img src="/locationicon.png" loading="lazy"/>
        <p>Elbrit Life Sciences Private Limited. C20, BKC, G Block, Mumbai 400051</p>
       </div>

    </div>
  );
};

export default ContactUs;
