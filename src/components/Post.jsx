import styles from "./Post.module.css";
import { Link } from "react-router-dom";
const Post = ({ id, author, message }) => {
  // prop id weil id wie auch author und message anders sind je eintrag
  return (
    <li className={styles.post}>
      <Link to={id}>
      {/* das wird dann ein realtiver Pfad zu der id also dem eintrag der angezeigt wird damit man detailansicht sieht wenn man hier draufklickt */}
      <p className={styles.author}>{author}</p>
      <p className={styles.text}>{message}</p>
      </Link>
    </li>
  );
};
export default Post;
