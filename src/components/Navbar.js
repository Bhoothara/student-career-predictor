import React from "react";

function Navbar({ user, onLogout }) {
  return (
    <nav style={styles.nav}>
      <h1 style={styles.logo}>🎓 Career Predictor</h1>
      <div style={styles.right}>
        {user ? (
          <>
            <span>Welcome, {user.name}</span>
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
  nav: { display: "flex", justifyContent: "space-between", padding: "1rem", backgroundColor: "#282c34", color: "#fff" },
  logo: { margin: 0 },
  right: { display: "flex", gap: "1rem", alignItems: "center" },
  button: { background: "#61dafb", border: "none", padding: "0.5rem 1rem", cursor: "pointer", borderRadius: "4px" }
};

export default Navbar;
