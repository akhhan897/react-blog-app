import { useState } from "react";

function CommentForm({ comments, setComments }) {
  const [name, setName] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    if (name.trim() === "" || comment.trim() === "") {
      return;
    }

    const newComment = {
      id: Date.now(),
      name: name,
      text: comment,
    };

    setComments([...comments, newComment]);
    setName("");
    setComment("");
  };

  return (
    <div>
      <h3>Leave a Comment</h3>

      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          value={name}
          onChange={(event) => setName(event.target.value)}
          placeholder="Enter your name"
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