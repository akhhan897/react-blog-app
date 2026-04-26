import CommentSection from "./Componentsection";
import { useState } from "react";

function BlogPost({ title, content, author, date }) {
    
    const [likes, setLikes] = useState(0);
  
    return (
    <main className="main-content">
      <article className="blog-card">
        <h2>{title}</h2>

        <p className="post-content">{content}</p>

        <p className="meta">
          <strong>Author:</strong> {author}
        </p>

        <p className="meta">
          <strong>Date:</strong> {date}
        </p>

        <button
            onClick={() => setLikes(likes + 1)}
            className="like-btn"
>
            ❤️ Like {likes}
        </button>

        <CommentSection />
      </article>
    </main>
  );
}

export default BlogPost;