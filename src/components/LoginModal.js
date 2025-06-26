import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function LoginModal({ onClose, onSwitch, onLogin }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const login = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/auth/login', {
        email,
        password,
      });

      const name = res.data.name || email;
      alert(`Login successful\nWelcome, ${name}`);
      onLogin({ name });
      onClose();
      navigate('/Dashboard');
    } catch (err) {
      alert(err.response?.data?.detail || 'Login failed');
    }
  };

  return (
    <div style={modalStyles.overlay}>
      <div style={modalStyles.modal}>
        <button onClick={onClose} style={modalStyles.close}>×</button>
        <h2 style={modalStyles.title}>🔐 Login</h2>
        <form onSubmit={login}>
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={modalStyles.input}
          />
          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={modalStyles.input}
          />
          <button type="submit" style={modalStyles.button}>Login</button>
        </form>
        <p style={modalStyles.link}><a href="#">Forgot Password?</a></p>
        <p style={modalStyles.link}>
          Don’t have an account?{' '}
          <span onClick={onSwitch} style={modalStyles.switchLink}>
            Signup
          </span>
        </p>
      </div>
    </div>
  );
}

const modalStyles = {
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
  },
  modal: {
    backgroundColor: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    width: '320px',
    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.3)',
    position: 'relative',
    fontFamily: 'sans-serif',
  },
  close: {
    position: 'absolute',
    top: '10px',
    right: '15px',
    backgroundColor: 'transparent',
    border: 'none',
    fontSize: '1.5rem',
    color: '#333',
    cursor: 'pointer',
  },
  title: {
    textAlign: 'center',
    marginBottom: '1.5rem',
    fontSize: '1.5rem',
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    padding: '10px',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '4px',
    fontSize: '1rem',
  },
  button: {
    width: '100%',
    padding: '10px',
    backgroundColor: '#282c34',
    color: '#fff',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
  link: {
    textAlign: 'center',
    marginTop: '0.8rem',
    fontSize: '0.9rem',
  },
  switchLink: {
    color: 'blue',
    cursor: 'pointer',
    textDecoration: 'underline',
  },
};

export default LoginModal;
