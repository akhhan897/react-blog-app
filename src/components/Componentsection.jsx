import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";

function CommentForm({ comments, setComments }) {
  const { user } = useAuth();

  const [name, setName] = useState("");
  const [text, setText] = useState("");

  useEffect(() => {
    if (user?.username) {
      setName(user.username);
    }
  }, [user]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (text.trim() === "") return;

    const newComment = {
      id: Date.now(),
      name: name,
      text: text,
    };

    setComments([...comments, newComment]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h3>Leave a Comment</h3>

      <label>Name:</label>
      <input
        type="text"
        value={name}
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