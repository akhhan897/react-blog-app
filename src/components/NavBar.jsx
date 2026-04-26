import { Link } from "react-router-dom";
import { useTheme } from "./ThemeContext";
import { useAuth } from "../context/AuthContext";

function NavBar() {
  const { theme, toggleTheme } = useTheme();
  const { isAuthenticated, user, logout } = useAuth();

  return (
    <nav className="navbar">
      <div className="nav-links">
        <Link to="/">Home</Link>
        <Link to="/blog">Blog</Link>
        <Link to="/contact">Contact</Link>

        {!isAuthenticated && <Link to="/login">Login</Link>}
      </div>

      <div>
        {isAuthenticated && (
          <>
            <span style={{ marginRight: "10px" }}>
              Welcome, {user.username}
            </span>
            <button onClick={logout}>Logout</button>
          </>
        )}

        <button className="theme-btn" onClick={toggleTheme}>
          Switch to {theme === "light" ? "Dark" : "Light"} Mode
        </button>
      </div>
    </nav>
  );
}

export default NavBar;