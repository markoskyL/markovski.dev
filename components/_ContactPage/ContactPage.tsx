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
              <label htmlFor="">Your Name</label>
              <input type="text" name="" id="" />
            </div>
            <div className={styles.label_inputWrapper}>
              <label htmlFor="">Your Email</label>
              <input type="text" name="" id="" />
            </div>
          </div>
          <div className={styles.label_inputWrapper}>
            <label htmlFor="">Your Message</label>
            <textarea name="" id="" cols={30} rows={10}></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
