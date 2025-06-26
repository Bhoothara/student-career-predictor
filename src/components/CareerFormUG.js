import React, { useState } from "react";
import "./careerform.css";

function CareerFormUG() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    age: '',
    gender: '',
    degree: '',
    specialization: '',
    cgpa: '',
    technicalSkills: '',
    softSkills: '',
    internshipExperience: '',
    interestedField: '',
    postGraduationPlan: '',
    competitiveExamInterest: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("UG Form Data Submitted:", formData);
    alert("UG Career Form submitted!");
    // You can send this data to your FastAPI backend for prediction
  };

  return (
    <div className="max-w-3xl mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 mb-10">
      <h2 className="text-2xl font-bold mb-6 text-center text-indigo-700">
        🎓 UG Career Prediction Form
      </h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Personal Details */}
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

        {/* Academic Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="degree" placeholder="Degree (e.g. B.Tech, B.Com)" value={formData.degree} onChange={handleChange} className="input" />
          <input name="specialization" placeholder="Specialization (e.g. CSE, Finance)" value={formData.specialization} onChange={handleChange} className="input" />
          <input name="cgpa" type="number" step="0.01" placeholder="CGPA or Percentage" value={formData.cgpa} onChange={handleChange} className="input" />
        </div>

        {/* Skills and Experience */}
        <textarea name="technicalSkills" placeholder="Technical Skills (e.g. Python, Java, Excel)" value={formData.technicalSkills} onChange={handleChange} className="input" />
        <textarea name="softSkills" placeholder="Soft Skills (e.g. Communication, Leadership)" value={formData.softSkills} onChange={handleChange} className="input" />
        <textarea name="internshipExperience" placeholder="Internship / Project Experience" value={formData.internshipExperience} onChange={handleChange} className="input" />

        {/* Career Preferences */}
        <select name="interestedField" value={formData.interestedField} onChange={handleChange} className="input">
          <option value="">Interested Career Field</option>
          <option>IT/Software</option>
          <option>Management</option>
          <option>Finance</option>
          <option>Government</option>
          <option>Higher Education</option>
          <option>Research</option>
        </select>

        <select name="postGraduationPlan" value={formData.postGraduationPlan} onChange={handleChange} className="input">
          <option value="">Planning for Post Graduation?</option>
          <option>Yes - Immediately</option>
          <option>Yes - After Work</option>
          <option>No</option>
        </select>

        <select name="competitiveExamInterest" value={formData.competitiveExamInterest} onChange={handleChange} className="input">
          <option value="">Interested in Competitive Exams?</option>
          <option>Yes - UPSC/SSC</option>
          <option>Yes - GATE/CAT</option>
          <option>No</option>
        </select>

        <button type="submit" className="w-full bg-indigo-600 text-white py-3 rounded-md hover:bg-indigo-700">
          🚀 Submit for Prediction
        </button>
      </form>
    </div>
  );
}

export default CareerFormUG;
