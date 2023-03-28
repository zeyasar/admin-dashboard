import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  Outlet,
} from "react-router-dom";
import Dashboard from "../pages/Dashboard";
import LoginPage from "../pages/LoginPage";
import Profile from "../components/Profile";
import Users from "../components/Users";
import React from "react";

const PrivateRouter = () => {
  const user = sessionStorage.getItem("user");
  return user ? <Outlet /> : <Navigate to="/login" />;
};

function AppRouter() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/login" element={<LoginPage />} />
          <Route element={<PrivateRouter />}>
            <Route path="/" element={<Dashboard />}>
              <Route path="/users" element={<Users />} />
              <Route path="/profile/:id" element={<Profile />} />
            </Route>
          </Route>
        </Routes>
      </Router>
    </>
  );
}

export default AppRouter;
