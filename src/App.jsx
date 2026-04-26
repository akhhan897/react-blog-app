import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HomePage from "./components/HomePage";
import BlogPostsPage from "./components/BlogPostsPage";
import IndividualPostPage from "./components/IndividualPostPage";
import ContactPage from "./components/ContactPage";
import LoginPage from "./components/LoginPage";
import { ThemeProvider, useTheme } from "./components/ThemeContext";
import "./App.css";

function AppContent() {
  const { theme } = useTheme();

  return (
    <div className={`${theme} app-wrapper`}>
      <Router>
        <NavBar />

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogPostsPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/posts/:id" element={<IndividualPostPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>

        <Footer />
      </Router>
    </div>
  );
}

function App() {
  return (
    <ThemeProvider>
      <AppContent />
    </ThemeProvider>
  );
}

export default App;