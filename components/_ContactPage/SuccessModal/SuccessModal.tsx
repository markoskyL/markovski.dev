import React from "react";
import styles from "./SuccessModal.module.scss";
import { Link as ScrollLink } from "react-scroll/modules";
const SuccessModal: React.FC<{ setSuccess: (value: boolean) => void }> = ({
  setSuccess,
}) => {
  const handleClick = () => {
    setSuccess(false);
    document.body.classList.remove("preventScroll");
  };
  return (
    <div className={styles.successModal}>
      <i>📨</i>
      <h1>Thank you for contacting me! 🙌</h1>
      <p>I will reach out to you as soon as possible.</p>
      <ScrollLink
        to="home"
        duration={500}
        spy={true}
        smooth={true}
        className={styles.homeLink}
        onClick={handleClick}
      >
        Back to home
      </ScrollLink>
    </div>
  );
};

export default SuccessModal;
