import React from "react";

const topics = [
  "General websites for students",
  "Educational websites for students",
  "Cooking websites for students",
  "Health websites for students",
  "Shopping & selling websites for students",
  "Money-saving websites for students",
  "Other useful resources for students",
];

export default function TableOfContents() {
  return (
    <div style={styles.sidebar}>
      <h3>📚 Table of contents</h3>
      <ul style={styles.list}>
        {topics.map((topic, idx) => (
          <li key={idx} style={styles.item}>{topic}</li>
        ))}
      </ul>
    </div>
  );
}

const styles = {
  sidebar: {
    width: '250px',
    padding: '20px',
    backgroundColor: '#f9f9f9',
    borderRight: '1px solid #ddd',
    height: '100vh',
    position: 'sticky',
    top: 0,
  },
  list: {
    listStyle: 'none',
    padding: 0
  },
  item: {
    marginBottom: '10px',
    cursor: 'pointer'
  }
};
