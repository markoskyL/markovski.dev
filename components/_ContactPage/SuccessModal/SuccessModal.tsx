import React from "react";
import styles from "./SuccessModal.module.scss";
const SuccessModal: React.FC<{ setSuccess: (value: boolean) => void }> = ({
  setSuccess,
}) => {
  const handleClick = () => {
    setSuccess(false);
    document.body.classList.remove("preventScroll");
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };
  return (
    <div className={styles.successModal}>
      <i>📨</i>
      <h1>Thank you for contacting me! 🙌</h1>
      <p>I will reach you out as soon as possible</p>
      <span onClick={handleClick}>Back to home</span>
    </div>
  );
};

export default SuccessModal;
