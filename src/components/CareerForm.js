import React, { useState } from 'react';
import './caareerform.css';
import { useLocation } from "react-router-dom";

function CareerForm() {
  const location = useLocation();
  const selectedStage = location.state?.stage || "UG"; // Get the stage from route state

  const [formData, setFormData] = useState({
    name: '',
    age: '',
    gender: '',
    email: '',
    qualification: '',
    cgpa: '',
    subject: '',
    skills: [],
    preference: '',
    relocation: '',
    workStyle: '',
    shortTermGoal: '',
    longTermGoal: '',
    stage: selectedStage, // Add stage to form data
  });

  const skillsList = [
    "Python", "Java", "C++", "React", "Node.js",
    "Communication", "Teamwork", "Problem Solving", "Leadership", "Creativity"
  ];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox") {
      setFormData((prev) => ({
        ...prev,
        skills: checked
          ? [...prev.skills, value]
          : prev.skills.filter((s) => s !== value),
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Career form submitted successfully!");
    // You can now send this data to backend
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 mb-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-blue-700">
        🎓 {selectedStage} Career Prediction Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">

        {/* Personal Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Personal Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="name" placeholder="Full Name" value={formData.name} onChange={handleChange} className="input" />
            <input name="email" type="email" placeholder="Email" value={formData.email} onChange={handleChange} className="input" />
            <input name="age" type="number" placeholder="Age" value={formData.age} onChange={handleChange} className="input" />
            <select name="gender" value={formData.gender} onChange={handleChange} className="input">
              <option value="">Select Gender</option>
              <option>Male</option>
              <option>Female</option>
              <option>Other</option>
            </select>
          </div>
        </div>

        {/* Academic Info */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Academic Information</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <input name="qualification" placeholder="Qualification (e.g. B.Tech, B.Sc)" value={formData.qualification} onChange={handleChange} className="input" />
            <input name="cgpa" type="number" step="0.01" placeholder="CGPA" value={formData.cgpa} onChange={handleChange} className="input" />
            <input name="subject" placeholder="Favorite Subject" value={formData.subject} onChange={handleChange} className="input" />
          </div>
        </div>

        {/* Skills */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Skills</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2">
            {skillsList.map((skill, index) => (
              <label key={index} className="flex items-center gap-2">
                <input type="checkbox" value={skill} checked={formData.skills.includes(skill)} onChange={handleChange} />
                <span>{skill}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Career Preferences */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Career Preferences</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <select name="preference" value={formData.preference} onChange={handleChange} className="input">
              <option value="">Prefer Job or Higher Studies?</option>
              <option value="job">Job</option>
              <option value="higher">Higher Studies</option>
            </select>
            <select name="relocation" value={formData.relocation} onChange={handleChange} className="input">
              <option value="">Willing to Relocate?</option>
              <option value="yes">Yes</option>
              <option value="no">No</option>
            </select>
            <select name="workStyle" value={formData.workStyle} onChange={handleChange} className="input">
              <option value="">Preferred Work Style</option>
              <option value="remote">Remote</option>
              <option value="office">Office</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>
        </div>

        {/* Goals */}
        <div>
          <h3 className="text-lg font-semibold mb-2 text-gray-800">Goals</h3>
          <textarea name="shortTermGoal" placeholder="Short-Term Goal" value={formData.shortTermGoal} onChange={handleChange} className="input h-24" />
          <textarea name="longTermGoal" placeholder="Long-Term Goal" value={formData.longTermGoal} onChange={handleChange} className="input h-24 mt-2" />
        </div>

        <button type="submit" className="w-full bg-blue-600 text-white py-3 rounded-md hover:bg-blue-700">
          🚀 Submit for Prediction
        </button>
      </form>
    </div>
  );
}

export default CareerForm;
