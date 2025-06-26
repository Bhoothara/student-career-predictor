import React, { useState } from 'react';
import axios from 'axios';

function SignupModal({ onClose, onSwitch }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signup = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(`${process.env.REACT_APP_API_URL}/auth/signup`, {
        name,
        email,
        password
      });
      alert(res.data.message); // "Signup successful"
      onClose(); // Close modal on success
    } catch (err) {
      alert(err.response?.data?.detail || "Signup failed");
    }
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <h2>📝 Signup</h2>
        <form onSubmit={signup}>
          <input type="text" placeholder="Full Name" required value={name} onChange={(e) => setName(e.target.value)} style={modalStyles.input} />
          <input type="email" placeholder="Email" required value={email} onChange={(e) => setEmail(e.target.value)} style={modalStyles.input} />
          <input type="password" placeholder="Password" required value={password} onChange={(e) => setPassword(e.target.value)} style={modalStyles.input} />
          <button type="submit" style={modalStyles.button}>Signup</button>
        </form>
        <p>Already have an account? <span onClick={onSwitch} style={{ color: 'blue', cursor: 'pointer' }}>Login</span></p>
        <button onClick={onClose} style={modalStyles.close}>X</button>
      </div>
    </div>
  );
}

const modalStyles = {
  overlay: {
    position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
    backgroundColor: 'rgba(0,0,0,0.4)', display: 'flex', justifyContent: 'center', alignItems: 'center'
  },
  modal: {
    backgroundColor: '#fff', padding: '2rem', borderRadius: '10px', width: '300px', position: 'relative'
  },
  input: {
    width: '100%', padding: '10px', marginBottom: '1rem', border: '1px solid #ccc', borderRadius: '4px'
  },
  button: {
    width: '100%', padding: '10px', backgroundColor: '#282c34', color: '#fff', border: 'none'
  },
  close: {
    position: 'absolute',
    top: '-20px',
    right: '-150px',
    backgroundColor: 'transparent',
    color: '#444',
    border: 'none',
    fontSize: '1.5rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    lineHeight: '1',
  }
};

export default SignupModal;
