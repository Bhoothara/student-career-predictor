import React from "react";

function Home() {
  return (
    <div style={{ fontFamily: 'sans-serif' }}>
      {/* Hero Section */}
      <div style={{
        background: 'linear-gradient(to right, #007cf0, #00dfd8)',
        color: 'white',
        padding: '60px 30px',
        textAlign: 'center'
      }}>
        <h1 style={{ fontSize: '36px', marginBottom: '20px' }}>🎓 Student Career Predictor</h1>
        <p style={{ fontSize: '18px', maxWidth: '800px', margin: '0 auto' }}>
          Use educational data to accurately predict your career path based on your academic background, skills, and preferences. Start your journey towards a successful career!
        </p>
      </div>

      {/* Features Section */}
      <div style={{
        display: 'flex',
        justifyContent: 'space-around',
        flexWrap: 'wrap',
        padding: '40px 20px',
        backgroundColor: '#f8f9fa'
      }}>
        {/* Card 1 */}
        <div style={cardStyle}>
          <h2 style={cardTitle}>📄 Fill Career Form</h2>
          <p style={cardText}>
            Enter your academic details, CGPA, skills, goals, and preferences. Our smart form collects everything needed for a precise prediction.
          </p>
        </div>

        {/* Card 2 */}
        <div style={cardStyle}>
          <h2 style={cardTitle}>💡 Analyze Skills</h2>
          <p style={cardText}>
            Discover how your programming, communication, and technical skills impact your career possibilities with real-time analysis.
          </p>
        </div>

        {/* Card 3 */}
        <div style={cardStyle}>
          <h2 style={cardTitle}>🚀 Get Predictions</h2>
          <p style={cardText}>
            Instantly get career suggestions like Software Engineer, Data Analyst, or Researcher based on your input.
          </p>
        </div>
      </div>
    </div>
  );
}

// Simple CSS-in-JS styles
const cardStyle = {
  backgroundColor: 'white',
  width: '300px',
  margin: '15px',
  padding: '20px',
  borderRadius: '12px',
  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
};

const cardTitle = {
  fontSize: '20px',
  fontWeight: '600',
  marginBottom: '10px',
  color: '#007cf0'
};

const cardText = {
  fontSize: '15px',
  color: '#333'
};

export default Home;
