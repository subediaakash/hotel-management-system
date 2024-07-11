import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MainGuestPage from "./pages/Guest/MainGuestPage";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<MainGuestPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
