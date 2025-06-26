// src/pages/StageSelection.js
import React from "react";
import { useNavigate } from "react-router-dom";

const StageSelection = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <h2>Select Your Educational Stage</h2>
      <div style={styles.buttonContainer}>
        <button onClick={() => navigate("/career-form/sslc")} style={styles.button}>
          SSLC
        </button>
        <button onClick={() => navigate("/career-form/diploma")} style={styles.button}>
            Diploma
        </button>

        <button onClick={() => navigate("/career-form/puc")} style={styles.button}>
          PUC
        </button>
        <button onClick={() => navigate("/career-form/ug")} style={styles.button}>
          UG
        </button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    textAlign: "center",
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    gap: "20px",
    marginTop: "1rem",
  },
  button: {
    padding: "12px 24px",
    fontSize: "16px",
    borderRadius: "8px",
    backgroundColor: "#2563eb",
    color: "white",
    border: "none",
    cursor: "pointer",
  },
};

export default StageSelection;
