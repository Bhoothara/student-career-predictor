import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Career Prediction");

  const handleNavClick = (name, route) => {
    setActive(name);
    if (route) navigate(route);
  };

  return (
    <div style={styles.container}>
      {/* Sidebar */}
      <aside style={styles.sidebar}>
        <div style={styles.logoBox}>
          <h2 style={styles.logo}>🎓</h2>
          <span style={styles.brand}>Career Predictor</span>
        </div>
        <nav style={styles.nav}>
          <div
            style={{
              ...styles.navItem,
              ...(active === "Career Prediction" ? styles.activeItem : {}),
            }}
            onClick={() => handleNavClick("Career Prediction", "/stage-selection")}
          >
            <span style={styles.navIcon}>📈</span>
            <span>Career Prediction</span>
          </div>
          <div
            style={{
              ...styles.navItem,
              ...(active === "Reports" ? styles.activeItem : {}),
            }}
            onClick={() => handleNavClick("Reports")}
          >
            <span style={styles.navIcon}>📊</span>
            <span>Reports</span>
          </div>
          <div
            style={{
              ...styles.navItem,
              ...(active === "Settings" ? styles.activeItem : {}),
            }}
            onClick={() => handleNavClick("Settings")}
          >
            <span style={styles.navIcon}>⚙️</span>
            <span>Settings</span>
          </div>
        </nav>
      </aside>

      {/* Main */}
      <main style={styles.main}>
        <div style={styles.topbar}>
          <h1 style={styles.heading}>Welcome, Student!</h1>
          <img
            src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
            alt="User Avatar"
            style={styles.avatar}
            onClick={() => navigate("/profile")}
          />
        </div>

        <div style={styles.grid}>
          <div style={styles.card} onClick={() => navigate("/stage-selection")}>
            <h2>Career Prediction</h2>
            <p>Predict the best career path for your future.</p>
          </div>
          <div style={styles.card}>
            <h2>Reports</h2>
            <p>View your past prediction history and analysis.</p>
          </div>
          <div style={styles.card}>
            <h2>Settings</h2>
            <p>Manage account preferences and personal details.</p>
          </div>
        </div>
      </main>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f8f9fb",
  },
  sidebar: {
    width: "260px",
    backgroundColor: "#0f172a",
    color: "#fff",
    display: "flex",
    flexDirection: "column",
    padding: "1.5rem 1rem",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "2rem",
    paddingLeft: "10px",
  },
  logo: {
    fontSize: "2rem",
    margin: 0,
  },
  brand: {
    fontSize: "1.2rem",
    fontWeight: "bold",
  },
  nav: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "12px",
    padding: "10px 16px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
  },
  navIcon: {
    fontSize: "1.2rem",
  },
  activeItem: {
    backgroundColor: "#1e293b",
    transform: "translateX(5px)",
  },
  main: {
    flex: 1,
    padding: "2rem",
    backgroundColor: "#f3f4f6",
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
  },
  heading: {
    fontSize: "1.8rem",
    fontWeight: "600",
  },
  avatar: {
    width: "48px",
    height: "48px",
    borderRadius: "50%",
    border: "2px solid #ccc",
    cursor: "pointer",
  },
  grid: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
    gap: "1.5rem",
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: "10px",
    padding: "1.5rem",
    boxShadow: "0 6px 16px rgba(0,0,0,0.05)",
    cursor: "pointer",
    transition: "transform 0.2s ease, box-shadow 0.2s ease",
  },
};

export default Dashboard;
