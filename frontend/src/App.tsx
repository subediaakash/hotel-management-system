import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGuestPage from "./pages/Guest/MainGuestPage";
import Bookings from "./pages/Guest/Bookings";
import Deals from "./pages/Guest/Deals";
import Payments from "./pages/Guest/Payments";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainGuestPage />} />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/payments" element={<Payments />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
