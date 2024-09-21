import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGuestPage from "./pages/Guest/MainGuestPage";
import Bookings from "./pages/Guest/Bookings";
import Deals from "./pages/Guest/Deals";
import SignupForm from "./components/auth/SignupForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SigninForm from "./components/auth/SigninForm";
import PassportForm from "./components/GuestComponents/PassportForm";
import PaymentPage from "./pages/Guest/PaymentPage";
import Temp from "./pages/Guest/Temp";

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
          path="/passportsetup"
          element={
            <ProtectedRoute>
              <PassportForm />
            </ProtectedRoute>
          }
        />
        <Route path="/book" element={<PaymentPage />} />
        <Route path="/temp" element={<Temp />} />
      </Routes>
    </Router>
  );
}

export default App;
