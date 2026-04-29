import { useState } from "react";

function CommentForm({ comments, setComments, username }) {
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (comment.trim() === "") return;

    const newComment = {
      id: Date.now(),
      name: username,
      text: comment,
    };

    setComments((prev) => [...prev, newComment]);
    setComment("");
  };

  return (
    <div>
      <h3>Leave a Comment</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={username}
          readOnly
        />

        <label>Comment:</label>
        <textarea
          value={comment}
          onChange={(event) => setComment(event.target.value)}
          placeholder="Enter your comment"
          rows="4"
        ></textarea>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default CommentForm;