import Post from "./Post";
import styles from "./PostsList.module.css";
import { useLoaderData } from "react-router-dom";

const PostsList = () => {
  const currentPosts = useLoaderData();
  const addPostHandler = (postData) => {
    fetch("http://localhost:8080/posts", {
      method: "POST",
      body: JSON.stringify(postData),
      headers: { "Content-Type": "application/json" },
    });
    setCurrentPosts((posts) => [postData, ...posts]);
  };

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
