import { useState } from "react";

function CommentSection() {
  const [comment, setComment] = useState("");

  const staticComments = ["Comment 1", "Comment 2", "Comment 3"];

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(`Submitted comment: ${comment}`);
    setComment("");
  };

  return (
    <section className="comment-section">
      <h3>Comments</h3>

      <form onSubmit={handleSubmit}>
        <textarea
          placeholder="Add a comment"
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        ></textarea>

        <button type="submit">Submit</button>
      </form>

      <div className="existing-comments">
        <h4>Existing Comments:</h4>
        <ul>
          {staticComments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default CommentSection;