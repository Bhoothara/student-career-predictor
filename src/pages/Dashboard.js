import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const navigate = useNavigate();
  const [active, setActive] = useState("Career Prediction");
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleNavClick = (name, route) => {
    setActive(name);
    if (route) navigate(route);
  };

  return (
    <div style={isMobile ? styles.containerMobile : styles.container}>
      {/* Sidebar */}
      <aside style={isMobile ? styles.sidebarMobile : styles.sidebar}>
        <div style={styles.logoBox}>
          <h2 style={styles.logo}>🎓</h2>
          <span style={styles.brand}>Career Predictor</span>
        </div>
        <nav style={isMobile ? styles.navMobile : styles.nav}>
          {["Career Prediction", "Reports", "Settings"].map((name) => (
            <div
              key={name}
              style={{
                ...styles.navItem,
                ...(active === name ? styles.activeItem : {}),
              }}
              onClick={() =>
                handleNavClick(name, name === "Career Prediction" ? "/stage-selection" : "")
              }
            >
              <span style={styles.navIcon}>
                {name === "Career Prediction" ? "📈" : name === "Reports" ? "📊" : "⚙️"}
              </span>
              <span>{name}</span>
            </div>
          ))}
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

// Base styles
const styles = {
  container: {
    display: "flex",
    minHeight: "100vh",
    fontFamily: "Segoe UI, sans-serif",
    backgroundColor: "#f8f9fb",
  },
  containerMobile: {
    display: "block",
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
  sidebarMobile: {
    width: "100%",
    backgroundColor: "#0f172a",
    color: "#fff",
    padding: "1rem",
  },
  logoBox: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    marginBottom: "1.5rem",
  },
  logo: {
    fontSize: "1.8rem",
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
  navMobile: {
    display: "flex",
    justifyContent: "space-around",
    flexWrap: "wrap",
    gap: "0.5rem",
    marginBottom: "1rem",
  },
  navItem: {
    display: "flex",
    alignItems: "center",
    gap: "10px",
    padding: "10px 14px",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background 0.3s, transform 0.2s",
    backgroundColor: "#1e293b",
  },
  navIcon: {
    fontSize: "1rem",
  },
  activeItem: {
    backgroundColor: "#334155",
    transform: "scale(1.02)",
  },
  main: {
    padding: "2rem",
  },
  topbar: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "2rem",
    flexWrap: "wrap",
    gap: "1rem",
  },
  heading: {
    fontSize: "1.6rem",
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
