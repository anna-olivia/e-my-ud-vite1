import { MdPostAdd, MdBeachAccess } from "react-icons/md";
import styles from "./MainHeader.module.css";
import { Link } from "react-router-dom";
const MainHeader = ({ onCreatePost }) => {
  return (
    <header className={styles.header}>
      <h1 className={styles.logo}>
        <span className={styles.icon}>
          <MdBeachAccess />
        </span>
        <span className={styles.heading}> Annas Pinnwand</span>
      </h1>
      <div> <Link to="/create-post" className={styles.button} >
          <MdPostAdd size={18} />
          Neuer Eintrag
        </Link>
      </div>
    </header>
  );
};

export default MainHeader;
