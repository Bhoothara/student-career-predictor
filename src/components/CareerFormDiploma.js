import React, { useState } from "react";
import "./styles/Diplom.css";

const CareerFormDiploma = () => {
  const [formData, setFormData] = useState({
    sem6Subjects: {
      subject1: "",
      subject2: "",
      subject3: "",
      subject4: "",
      subject5: "",
    },
    interests: "",
    skills: "",
  });

  const handleChange = (section, key, value) => {
    setFormData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: value,
      },
    }));
  };

  const handleFieldChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Form submitted successfully!");
    // Later: send data to backend
  };

  return (
    <div className="career-form-container">
      <h2>Diploma Career Prediction Form</h2>
      <form onSubmit={handleSubmit}>
        <h3>6th Semester Subject Marks</h3>
        <div className="grid">
          {Object.entries(formData.sem6Subjects).map(([key, value], idx) => (
            <div className="form-group" key={key}>
              <label>Subject {idx + 1} Marks:</label>
              <input
                type="number"
                min="0"
                max="100"
                value={value}
                onChange={(e) =>
                  handleChange("sem6Subjects", key, e.target.value)
                }
                required
              />
            </div>
          ))}
        </div>

        <h3>Additional Information</h3>
        <div className="form-group">
          <label>Interests:</label>
          <input
            type="text"
            name="interests"
            value={formData.interests}
            onChange={handleFieldChange}
            placeholder="e.g., Web Development, Electronics, Designing"
            required
          />
        </div>

        <div className="form-group">
          <label>Skills:</label>
          <input
            type="text"
            name="skills"
            value={formData.skills}
            onChange={handleFieldChange}
            placeholder="e.g., Python, AutoCAD, Java"
            required
          />
        </div>

        <button type="submit" className="submit-btn">
          Predict Career
        </button>
      </form>
    </div>
  );
};

export default CareerFormDiploma;
