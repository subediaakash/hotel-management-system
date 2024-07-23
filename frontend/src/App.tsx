import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGuestPage from "./pages/Guest/MainGuestPage";
import Bookings from "./pages/Guest/Bookings";
import Deals from "./pages/Guest/Deals";
import Payments from "./pages/Guest/Payments";
import Conversation from "./pages/Guest/Conversation";
import SignupForm from "./components/auth/SignupForm";
import ProtectedRoute from "./components/auth/ProtectedRoute";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/signup" element={<SignupForm />} />
          <Route
            path="/"
            element={
              <ProtectedRoute>
                <MainGuestPage />
              </ProtectedRoute>
            }
          />
          <Route path="/bookings" element={<Bookings />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/payments" element={<Payments />} />
          <Route path="/conversations" element={<Conversation />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
