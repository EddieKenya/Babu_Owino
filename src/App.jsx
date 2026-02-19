import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop"; // Import the helper
import Home from "./components/Home";
import About from "./components/About";
import Vision from "./components/Vision";
import Contact from "./components/Contact";
import Support from "./components/Support";

function App() {
  return (
    <Router>
      <ScrollToTop /> {/* 1. Add this here */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/vision" element={<Vision />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;