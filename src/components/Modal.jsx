import styles from "./Modal.module.css";
import {useNavigate} from 'react-router-dom';

const Modal = ({ children}) => {
  const navigate = useNavigate();
const closeHandler = () => {
  navigate('..');
}
  return (

    <>
      <div className={styles.backdrop} onClick={closeHandler} />
      <dialog open className={styles.modal}>
        {children}
      </dialog>
    </>
  );
};

export default Modal;
