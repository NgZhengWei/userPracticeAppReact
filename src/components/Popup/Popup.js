import styles from './Popup.module.css';

const Popup = (props) => {
  const closePopupHandler = (e) => {
    props.setShowErrorPopup(false);
  };

  return (
    <div className={styles.popup}>
      <div className={styles.backdrop} onClick={closePopupHandler}></div>
      <div className={styles['popup-content']}>
        <span className={styles.close} onClick={closePopupHandler}>
          &times;
        </span>
        <p>{props.errorContent}</p>
      </div>
    </div>
  );
};

export default Popup;
