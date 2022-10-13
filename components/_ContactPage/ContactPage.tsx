import React, { FormEvent, useState } from "react";
import styles from "./ContactPage.module.scss";
import SuccessModal from "./SuccessModal/SuccessModal";

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);

  interface dataProps {
    [key: string]: string;
    name: string;
    email: string;
    message: string;
  }

  const data: dataProps = {
    name: name,
    email: email,
    message: message,
  };
  const encode = (data: dataProps) => {
    return Object.keys(data)
      .map(
        (key) => encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSuccess = () => {
    setSuccess(true);
    document.body.classList.add("preventScroll");
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e: FormEvent) => {
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...data }),
    })
      .then(handleSuccess)
      .catch((error) => alert(error));

    e.preventDefault();
  };

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.whiteTriangle}></div>
      {success && (
        <SuccessModal setSuccess={(value: boolean) => setSuccess(value)} />
      )}
      <div className={styles.contactInner}>
        <h1 className={styles.pageTitle}>contact.</h1>
        <h2 className={styles.pagePreTitle}>
          Have a question or want to work together ?
        </h2>
        <form
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
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
