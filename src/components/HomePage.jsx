import { Link } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import "./HomePage.css";

function HomePage() {
  const { isAuthenticated } = useAuth();

  return (
    <section className="home-page">
      <div className="home-content">
        <h1>Welcome to My Blog</h1>

        <p>
          Explore thoughtful posts, stories, and ideas all in one place.
          Log in to join the conversation and leave your own comments.
        </p>

        <div className="home-buttons">
          {!isAuthenticated && (
            <Link to="/login" className="home-btn primary">
              Login
            </Link>
          )}

          <Link to="/blog" className="home-btn secondary">
            Explore Blog
          </Link>
        </div>
      </div>
    </section>
  );
}

export default HomePage;