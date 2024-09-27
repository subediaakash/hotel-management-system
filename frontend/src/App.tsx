import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGuestPage from "./pages/Guest/MainGuestPage";
import Bookings from "./pages/Guest/Bookings";
import Deals from "./pages/Guest/Deals";
import SignupForm from "./components/auth/SignupForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SigninForm from "./components/auth/SigninForm";
import PaymentPage from "./pages/Guest/PaymentPage";
import HotelSearch from "./pages/Guest/HotelSearch";
import HotelBookingPage from "./pages/Guest/HotelBookingPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signup" element={<SignupForm />} />
        <Route path="/signin" element={<SigninForm />} />

        <Route
          path="/"
          element={
            <ProtectedRoute>
              <MainGuestPage />
            </ProtectedRoute>
          }
        />
        <Route
          path="/bookings"
          element={
            <ProtectedRoute>
              <Bookings />
            </ProtectedRoute>
          }
        />
        <Route
          path="/deals"
          element={
            <ProtectedRoute>
              <Deals />
            </ProtectedRoute>
          }
        />
        <Route
          path="/hotelSearch"
          element={
            <ProtectedRoute>
              <HotelSearch />
            </ProtectedRoute>
          }
        />

        <Route path="/book" element={<PaymentPage />} />
        <Route path="/hotelBook" element={<HotelBookingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
