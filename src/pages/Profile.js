import React, { useEffect, useState } from "react";
import axios from "axios";

const Profile = () => {
  const [user, setUser] = useState(null);
  const [profile, setProfile] = useState({ name: "", email: "", password: "" });
  const [message, setMessage] = useState("");

  useEffect(() => {
    const stored = localStorage.getItem("user");
    if (stored) {
      const parsedUser = JSON.parse(stored);
      setUser(parsedUser);

      // Load profile from backend
      axios
        .get(`http://localhost:8000/auth/profile/${parsedUser.id}`)
        .then((res) => setProfile(res.data))
        .catch((err) => {
          console.error("Failed to load profile", err);
          setMessage("Failed to load profile.");
        });
    }
  }, []);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!user?.id) {
      setMessage("User not loaded");
      return;
    }

    axios
      .put(`http://localhost:8000/auth/profile/${user.id}`, profile)
      .then(() => setMessage("Profile updated successfully."))
      .catch(() => setMessage("Failed to update profile."));
  };

  if (!user || !user.id) {
    return <p style={{ textAlign: "center" }}>Loading user profile...</p>;
  }

  return (
    <div style={styles.container}>
      <h2 style={styles.title}>Edit Profile</h2>
      <form onSubmit={handleSubmit} style={styles.form}>
        <label style={styles.label}>Name:</label>
        <input
          style={styles.input}
          type="text"
          name="name"
          value={profile.name}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Email:</label>
        <input
          style={styles.input}
          type="email"
          name="email"
          value={profile.email}
          onChange={handleChange}
          required
        />

        <label style={styles.label}>Password:</label>
        <input
          style={styles.input}
          type="password"
          name="password"
          value={profile.password}
          onChange={handleChange}
          required
        />

        <button type="submit" style={styles.button}>Update Profile</button>
        {message && <p style={{ textAlign: "center" }}>{message}</p>}
      </form>
    </div>
  );
};

const styles = {
  container: {
    padding: "2rem",
    maxWidth: "500px",
    margin: "0 auto",
    backgroundColor: "#f5f5f5",
    borderRadius: "10px",
    boxShadow: "0 6px 12px rgba(0,0,0,0.1)"
  },
  title: {
    textAlign: "center",
    marginBottom: "1rem"
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem"
  },
  label: {
    fontWeight: "bold"
  },
  input: {
    padding: "0.5rem",
    borderRadius: "5px",
    border: "1px solid #ccc"
  },
  button: {
    backgroundColor: "#007bff",
    color: "#fff",
    padding: "0.7rem",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer"
  }
};

export default Profile;
