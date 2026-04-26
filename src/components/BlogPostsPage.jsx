import { Link } from "react-router-dom";
import blogPosts from "../data/blogdata";

function BlogPostsPage() {
  return (
    <div>
      <h2 className="page-title">All Blog Posts</h2>

      <div className="post-list">
        {blogPosts.map((post) => (
          <div key={post.id} className="post-card">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <Link className="read-more" to={`/posts/${post.id}`}>
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPostsPage;