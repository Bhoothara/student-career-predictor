import React, { useState } from "react";
import "./careerform.css";

function CareerFormSSLC() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    grade8: { kannada: "", english: "", math: "", science: "", social: "" },
    grade9: { kannada: "", english: "", math: "", science: "", social: "" },
    sslc: { kannada: "", english: "", math: "", science: "", social: "" },
  });

  const handleChange = (e, year, subject) => {
    const value = e.target.value;
    if (year === "info") {
      setFormData({ ...formData, [subject]: value });
    } else {
      setFormData({
        ...formData,
        [year]: {
          ...formData[year],
          [subject]: value,
        },
      });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    alert("✅ Form submitted for SSLC Career Prediction!");
  };

  return (
    <div className="ss-form-container">
      <h2 className="ss-form-title">🎯 SSLC Career Prediction Form</h2>

      <form onSubmit={handleSubmit}>
        <h3 className="ss-section-title">Student Information</h3>
        <div className="ss-row">
          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) => handleChange(e, "info", "name")}
          />
          <input
            type="text"
            placeholder="Email Address"
            value={formData.email}
            onChange={(e) => handleChange(e, "info", "email")}
          />
        </div>

        <h3 className="ss-section-title">8th Grade Subject Marks</h3>
        <div className="ss-row">
          {["kannada", "english", "math", "science", "social"].map((subj) => (
            <input
              key={subj}
              type="number"
              placeholder={`${subj.charAt(0).toUpperCase() + subj.slice(1)} Marks`}
              value={formData.grade8[subj]}
              onChange={(e) => handleChange(e, "grade8", subj)}
            />
          ))}
        </div>

        <h3 className="ss-section-title">9th Grade Subject Marks</h3>
        <div className="ss-row">
          {["kannada", "english", "math", "science", "social"].map((subj) => (
            <input
              key={subj}
              type="number"
              placeholder={`${subj.charAt(0).toUpperCase() + subj.slice(1)} Marks`}
              value={formData.grade9[subj]}
              onChange={(e) => handleChange(e, "grade9", subj)}
            />
          ))}
        </div>

        <h3 className="ss-section-title">SSLC Subject Marks</h3>
        <div className="ss-row">
          {["kannada", "english", "math", "science", "social"].map((subj) => (
            <input
              key={subj}
              type="number"
              placeholder={`${subj.charAt(0).toUpperCase() + subj.slice(1)} Marks`}
              value={formData.sslc[subj]}
              onChange={(e) => handleChange(e, "sslc", subj)}
            />
          ))}
        </div>

        <button type="submit" className="ss-submit-button">
          🎓 Submit for Career Prediction
        </button>
      </form>
    </div>
  );
}

export default CareerFormSSLC;
