import React from "react";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.whiteTriangle}></div>
      <div className={styles.contactInner}>
        <h1 className={styles.pageTitle}>contact.</h1>
        <h2 className={styles.pagePreTitle}>
          Have a question or want to work together ?
        </h2>
        <form action="">
          <div className={styles.name_emailWrapper}>
            <div className={styles.label_inputWrapper}>
              <label htmlFor="name">Your Name</label>
              <input type="text" name="name" id="name" required />
            </div>
            <div className={styles.label_inputWrapper}>
              <label htmlFor="email">Your Email</label>
              <input type="email" name="email" id="email" required />
            </div>
          </div>
          <div className={styles.label_inputWrapper}>
            <label className={styles.labelTArea} htmlFor="message">
              Your Message
            </label>
            <textarea
              name="message"
              id="message"
              cols={30}
              rows={10}
              required
            ></textarea>
          </div>
          <button className={styles.submitBtn} type="submit">
            Submit
          </button>
        </form>

      </div>
    </div>
  );
};

export default ContactPage;
