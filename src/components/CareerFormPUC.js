import React, { useState } from "react";
import "./careerform.css";

const CareerFormPUC = () => {
  const [stream, setStream] = useState("science");
  const [formData, setFormData] = useState({
    puc1: {},
    puc2: {},
  });

  const subjectMap = {
    science: ["physics", "chemistry", "maths", "biology"],
    commerce: ["accountancy", "economics", "businessStudies", "statistics"],
    arts: ["history", "politicalScience", "sociology", "psychology"],
  };

  const getSubjects = () => subjectMap[stream];

  const handleChange = (e, year, subject) => {
    const value = e.target.value;
    setFormData((prev) => ({
      ...prev,
      [year]: {
        ...prev[year],
        [subject]: value,
      },
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("PUC Data:", formData);
    alert("Form submitted successfully!");
  };

  return (
    <div className="career-form-container">
      <h2>PUC Career Prediction</h2>

      <label>Select Stream:</label>
      <select
        value={stream}
        onChange={(e) => setStream(e.target.value)}
        className="dropdown"
      >
        <option value="science">Science</option>
        <option value="commerce">Commerce</option>
        <option value="arts">Arts</option>
      </select>

      <form onSubmit={handleSubmit} className="career-form">
        <h3>PUC 1st Year Marks</h3>
        {getSubjects().map((subject) => (
          <input
            key={`puc1-${subject}`}
            type="number"
            placeholder={`PUC 1 - ${subject}`}
            value={formData.puc1[subject] || ""}
            onChange={(e) => handleChange(e, "puc1", subject)}
            required
          />
        ))}

        <h3>PUC 2nd Year Marks</h3>
        {getSubjects().map((subject) => (
          <input
            key={`puc2-${subject}`}
            type="number"
            placeholder={`PUC 2 - ${subject}`}
            value={formData.puc2[subject] || ""}
            onChange={(e) => handleChange(e, "puc2", subject)}
            required
          />
        ))}

        <button type="submit">Predict Career</button>
      </form>
    </div>
  );
};

export default CareerFormPUC;
