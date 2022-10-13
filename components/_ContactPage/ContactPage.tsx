import React, { useState } from "react";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const handleSubmit = () => {};
  return (
    <div className={styles.contact} id="contact">
      <div className={styles.whiteTriangle}></div>
      <div className={styles.contactInner}>
        <h1 className={styles.pageTitle}>contact.</h1>
        <h2 className={styles.pagePreTitle}>
          Have a question or want to work together ?
        </h2>
        <form name="contact" method="POST" data-netlify="true">
          <input type="hidden" name="form-name" value="contact" />
          <div className={styles.name_emailWrapper}>
            <div className={styles.label_inputWrapper}>
              <label htmlFor="name">Your Name</label>
              <input
                type="text"
                name="name"
                id="name"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div className={styles.label_inputWrapper}>
              <label htmlFor="email">Your Email</label>
              <input
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
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
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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
