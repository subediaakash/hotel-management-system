import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGuestPage from "./pages/Guest/MainGuestPage";
import Bookings from "./pages/Guest/Bookings";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainGuestPage />} />
          <Route path="/bookings" element={<Bookings />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
