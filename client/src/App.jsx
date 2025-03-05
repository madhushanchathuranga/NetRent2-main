import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer/Footer";
import NavBar from "./components/NavBar/NavBar";
import About from "./pages/About/About";
import Business from "./pages/Business/Business";
import Residential from "./pages/Residential/residential";
import Signup from "./pages/Signup/Signup";
import Frame861 from "./pages/Frame861/Frame861";
import BookingPage from "./pages/booking/BookingPage";

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/frame861" element={<Frame861 />} />
          <Route path="/bookingpage" element={<BookingPage />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
