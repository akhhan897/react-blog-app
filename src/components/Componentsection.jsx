import { useState } from "react";
import { useAuth } from "../context/AuthContext";

function CommentForm({ comments, setComments }) {
  const [text, setText] = useState("");
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const newComment = {
      id: Date.now(),
      name: user?.username || "Guest",
      text: text,
    };

    setComments([...comments, newComment]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave a Comment</h3>

      <p>DEBUG USER: {user?.username || "No user found"}</p>

      <label>Name:</label>
      <input
        type="text"
        value={user?.username || ""}
        readOnly
      />

      <label>Comment:</label>
      <textarea
        placeholder="Enter your comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;