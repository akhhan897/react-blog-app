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
      name: user.username, 
      text: text,
    };

    setComments([...comments, newComment]);
    setText("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <p>
        Commenting as: <strong>{user?.username}</strong>
      </p>

      <textarea
        placeholder="Add a comment"
        value={text}
        onChange={(e) => setText(e.target.value)}
      ></textarea>

      <button type="submit">Submit</button>
    </form>
  );
}

export default CommentForm;