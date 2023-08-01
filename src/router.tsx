import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import LandingPage from "./pages/landingPage";

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<LandingPage />}
        />
      </Routes>
    </Router>
  );
};

export default AppRouter;
