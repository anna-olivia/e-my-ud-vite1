import Post from "./Post";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
  const currentPosts = useLoaderData();
  return (
    <>
      {currentPosts.length > 0 && (
        <ul className={styles.posts}>
          {currentPosts.map((post) => (
            <Post
              key={post.message}
              author={post.author}
              message={post.message}
            />
          ))}
        </ul>
      )}
      {
      currentPosts.length === 0 && (
        <div className={styles.platzhalter}>
          <h2>Bis jetzt wurden noch keine Einträge gemacht.</h2>
        </div>
      )}
    </>
  );
};

export default PostsList;
