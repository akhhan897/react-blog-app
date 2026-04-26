import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import blogPosts from "../data/blogdata";
import CommentForm from "./CommentForm";

function IndividualPostPage() {
  const { id } = useParams();
  const post = blogPosts.find((post) => post.id === parseInt(id));

  const [comments, setComments] = useState([]);

  if (!post) {
    return (
      <div className="single-post">
        <h2>Post Not Found</h2>
        <Link className="back-link" to="/">
          Back to Blog Posts
        </Link>
      </div>
    );
  }

  return (
    <div className="single-post">
      <h2>{post.title}</h2>
      <p>{post.content}</p>

      <div className="comment-form">
        <CommentForm comments={comments} setComments={setComments} />
      </div>

      <div className="comments-section">
        <h3>Comments</h3>

        {comments.length === 0 ? (
          <p>No comments yet. Be the first to comment!</p>
        ) : (
          comments.map((comment) => (
            <div key={comment.id} className="comment-box">
              <h4>{comment.name}</h4>
              <p>{comment.text}</p>
            </div>
          ))
        )}
      </div>

      <Link className="back-link" to="/">
        Back to Blog Posts
      </Link>
    </div>
  );
}

export default IndividualPostPage;