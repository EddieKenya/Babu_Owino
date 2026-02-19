import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Vision from "./components/Vision";
import Contact from "./components/Contact"; // 1. Import Contact
import Support from "./components/Support"; // 2. Import Support

function App() {
  return (
    <Router>
      <Routes>
        {/* Base URL */}
        <Route path="/" element={<Home />} />
        
        {/* About Page */}
        <Route path="/about" element={<About />} />

        {/* Vision Page */}
        <Route path="/vision" element={<Vision />} />

        {/* 3. Added the Contact route */}
        <Route path="/contact" element={<Contact />} />

        {/* 4. Added the Support route */}
        <Route path="/support" element={<Support />} />
      </Routes>
    </Router>
  );
}

export default App;