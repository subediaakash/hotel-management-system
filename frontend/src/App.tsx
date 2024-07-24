import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGuestPage from "./pages/Guest/MainGuestPage";
import Bookings from "./pages/Guest/Bookings";
import Deals from "./pages/Guest/Deals";
import Payments from "./pages/Guest/Payments";
import Conversation from "./pages/Guest/Conversation";
import SignupForm from "./components/auth/SignupForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import SigninForm from "./components/auth/SigninForm";
import PassportForm from "./components/GuestComponents/PassportForm";

function App() {
  return (
    <div>
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
          <Route path="/payments" element={<Payments />} />
          <Route path="/conversations" element={<Conversation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
