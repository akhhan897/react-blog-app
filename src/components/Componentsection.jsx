import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function CommentSection() {
  const [comment, setComment] = useState("");
  const { isAuthenticated, user } = useAuth();

  const [comments, setComments] = useState([
    { text: "Comment 1", user: "Guest" },
    { text: "Comment 2", user: "Guest" },
    { text: "Comment 3", user: "Guest" },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();

    const newComment = {
      text: comment,
      user: user.username,
    };

    setComments([...comments, newComment]);
    setComment("");
  };

  return (
    <section className="comment-section">
      <h3>Comments</h3>

      {isAuthenticated ? (
        <form onSubmit={handleSubmit}>
          <textarea
            placeholder="Add a comment"
            value={comment}
            onChange={(event) => setComment(event.target.value)}
          ></textarea>

          <button type="submit">Submit</button>
        </form>
      ) : (
        <p>Please log in to leave a comment.</p>
      )}

      <div className="existing-comments">
        <h4>Existing Comments:</h4>
        <ul>
          {comments.map((item, index) => (
            <li key={index}>
              <strong>{item.user}:</strong> {item.text}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CommentSection;