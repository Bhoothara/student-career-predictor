import React, { useState } from 'react';

function Signup() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignup = (e) => {
    e.preventDefault();
    alert(`Signing up with\nEmail: ${email}\nPassword: ${password}`);
    // 🧾 Backend signup logic will go here later
  };

  return (
    <div style={styles.container}>
      <h2>📝 Signup</h2>
      <form onSubmit={handleSignup} style={styles.form}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          required
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          required
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Signup</button>
      </form>
    </div>
  );
}

const styles = {
  container: { maxWidth: '400px', margin: '4rem auto', textAlign: 'center' },
  form: { display: 'flex', flexDirection: 'column', gap: '1rem' },
  input: { padding: '10px', fontSize: '16px' },
  button: { padding: '10px', fontSize: '16px', backgroundColor: '#282c34', color: 'white', border: 'none' }
};

export default Signup;
