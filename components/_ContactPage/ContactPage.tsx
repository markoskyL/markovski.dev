import React, { FormEvent, useState } from "react";

import { F_arialBlack } from "../../assets/fonts/appFonts";
import SuccessModal from "./SuccessModal/SuccessModal";
import axios from "axios";
import styles from "./ContactPage.module.scss";

const ContactPage = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [success, setSuccess] = useState<boolean>(false);
  const [sending, setSending] = useState<boolean>(false);

  const handleSuccess = () => {
    setSuccess(true);
    document.body.classList.add("preventScroll");
    setName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = (e: FormEvent) => {
    setSending(true);
    axios.defaults.headers.post["Content-Type"] = "application/json";
    axios
      .post("https://formsubmit.co/ajax/markovski.dev@gmail.com", {
        name: name,
        email: email,
        message: message,
      })
      .then(() => {
        handleSuccess();
        setSending(false);
      })

      .catch(() => {
        alert(
          "There was a problem sending your message please try again later"
        );
        setSending(false);
      });

    e.preventDefault();
  };

  return (
    <div className={styles.contact} id="contact">
      <div className={styles.whiteTriangle}></div>
      {success && (
        <SuccessModal setSuccess={(value: boolean) => setSuccess(value)} />
      )}
      <div className={`${styles.contactInner} ${F_arialBlack.className}`}>
        <h1 className={styles.pageTitle}>contact.</h1>
        <h2 className={styles.pagePreTitle}>
          Have a question or want to work together ?
        </h2>
        <form
          name="contact"
          method="POST"
          action="https://formsubmit.co/53bd66fed9f637fc3c585b451100113e"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="_contact" value="New submission!" />
          <input type="hidden" name="_template" value="table"></input>
          <input type="hidden" name="_captcha" value="false"></input>
          <input type="text" name="_honey" style={{ display: "none" }}></input>
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
          <button className={styles.submitBtn} type="submit" disabled={sending}>
            {!sending ? "Submit" : "Sending..."}
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactPage;
