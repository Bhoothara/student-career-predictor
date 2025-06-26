import React, { useState, useEffect } from "react";

function Navbar({ user, onLogout }) {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav style={isMobile ? styles.navMobile : styles.nav}>
      <h1 style={styles.logo}>🎓 Career Predictor</h1>
      <div style={isMobile ? styles.rightMobile : styles.right}>
        {user ? (
          <>
            <span style={styles.welcome}>Welcome, {user.name}</span>
            <button onClick={onLogout} style={styles.button}>Logout</button>
          </>
        ) : (
          <>
            <button onClick={() => window.dispatchEvent(new Event("open-login"))} style={styles.button}>Login</button>
            <button onClick={() => window.dispatchEvent(new Event("open-signup"))} style={styles.button}>Signup</button>
          </>
        )}
      </div>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    justifyContent: "space-between",
    padding: "1rem 2rem",
    backgroundColor: "#282c34",
    color: "#fff",
    alignItems: "center",
  },
  navMobile: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "0.5rem",
    padding: "1rem",
    backgroundColor: "#282c34",
    color: "#fff",
  },
  logo: {
    margin: 0,
    fontSize: "1.5rem",
  },
  right: {
    display: "flex",
    gap: "1rem",
    alignItems: "center",
  },
  rightMobile: {
    display: "flex",
    flexDirection: "column",
    gap: "0.5rem",
    alignItems: "center",
  },
  button: {
    background: "#61dafb",
    border: "none",
    padding: "0.5rem 1rem",
    cursor: "pointer",
    borderRadius: "4px",
    fontSize: "1rem",
  },
  welcome: {
    fontSize: "1rem",
    color: "#fff",
  },
};

export default Navbar;
