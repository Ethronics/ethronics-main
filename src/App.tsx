import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar } from "./components/layout/Navbar";
import { Footer } from "./components/layout/footer/Footer";
import { Home } from "./pages/Home";// Placeholder
import { Manufacturing } from "./pages/manufacturing";
import { Academics } from "./pages/Academics";
import { ResearchAndDevelopment } from "./pages/ResearchAndDevelopment";
import Contact from "./pages/Contact";
import { AboutUs } from "./pages/AboutUs";

function App() {
  return (
    <Router>
      <div className="App flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            {/* <Route path="/academics" element={<Academics />} />
            <Route path="/research" element={<Research />} /> */}
            <Route path="/manufacturing" element={<Manufacturing />} />
            <Route path="/academics" element={<Academics />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/research-development" element={<ResearchAndDevelopment />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;