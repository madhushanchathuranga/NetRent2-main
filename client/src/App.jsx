import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Business from "./pages/Business/Business";
import Residential from "./pages/Residential/Residential";

function App() {
  return (
    <>
      <NavBar />
      <div className="app">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/business" element={<Business />} />
          <Route path="/residential" element={<Residential />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
