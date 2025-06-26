import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";

import Navbar from "./components/Navbar";
import LoginModal from "./components/LoginModal";
import SignupModal from "./components/SignupModal";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import Profile from "./pages/Profile";
import StageSelection from "./pages/StageSelection";

import CareerFormSSLC from "./components/CareerFormSSLC";
import CareerFormPUC from "./components/CareerFormPUC";
import CareerFormUG from "./components/CareerFormUG";
import CareerFormDiploma from "./components/CareerFormDiploma";

function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const openLogin = () => setShowLogin(true);
    const openSignup = () => setShowSignup(true);
    const handleLogoutEvent = () => handleLogout();

    window.addEventListener("open-login", openLogin);
    window.addEventListener("open-signup", openSignup);
    window.addEventListener("logout", handleLogoutEvent);

    return () => {
      window.removeEventListener("open-login", openLogin);
      window.removeEventListener("open-signup", openSignup);
      window.removeEventListener("logout", handleLogoutEvent);
    };
  }, []);

  const handleLogout = () => {
    setUser(null);
    alert("Logged out successfully");
    navigate("/");
  };

  return (
    <div>
      <Navbar user={user} onLogout={handleLogout} />

      {showLogin && (
        <LoginModal
          onClose={() => setShowLogin(false)}
          onSwitch={() => {
            setShowLogin(false);
            setShowSignup(true);
          }}
          onLogin={(userData) => {
            setUser(userData);
            setShowLogin(false);
            navigate("/dashboard");
          }}
        />
      )}

      {showSignup && (
        <SignupModal
          onClose={() => setShowSignup(false)}
          onSwitch={() => {
            setShowSignup(false);
            setShowLogin(true);
          }}
        />
      )}

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/stage-selection" element={<StageSelection />} />
        <Route path="/career-form/sslc" element={<CareerFormSSLC />} />
        <Route path="/career-form/puc" element={<CareerFormPUC />} />
        <Route path="/career-form/ug" element={<CareerFormUG />} />
        <Route path="/career-form/diploma" element={<CareerFormDiploma />} />
      </Routes>
    </div>
  );
}

export default App;
