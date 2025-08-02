import React from "react";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.pageWrapper}>
      <div className={styles.contactContainer}>
        <h2 className={styles.heading}>Contact Us</h2>
        <p className={styles.description}>
          Have questions, suggestions, or feedback? We'd love to hear from you.
        </p>
        <div className={styles.details}>
          <p>
            <strong>📧 Email:</strong> shecanfoundation@gmail.com
          </p>
          <p>
            <strong>📍 Address:</strong> Kolahpur, Maharashtra, India
          </p>
          <p>
            <strong>📞 Phone:</strong> +91-8421783582
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
