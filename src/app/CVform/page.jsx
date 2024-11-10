
"use client"
import React, { useState } from 'react';
import axios from "axios"
import { useRouter } from "next/navigation";

const CVForm = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNo: '',
    skills: '',
    jobTitle: '',
    location: '',
    linkedIn: '',
    courseName: '',
    educationStartDate: '',
    educationEndDate: '',
    employer: '',
    jobSummary: '',
    workStartDate: '',
    workEndDate: '',
    projectTitle: '',
    projectSummary: '',
    projectStartDate: '',
    projectEndDate: '',
    achievements: '',
    education:'',
  workExperience:'', 
  projects: ''
  });
  const [cvResponse, setCvResponse] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {


  
    e.preventDefault();
    

    const bodyParameter = {
    fullname:formData.fullName,
    email: formData.email,
    phoneNo: formData.phoneNo,
    skills: formData.skills,
    jobTitle: formData.jobTitle,
    location: formData.location,
    linkedIn: formData.linkedIn,
    courseName: formData.courseName,
    educationStartDate: formData.educationStartDate,
    educationEndDate: formData.educationEndDate,
    employer: formData.employer,
    jobSummary: formData.jobSummary,
    workStartDate: formData.workStartDate,
    workEndDate: formData.workEndDate,
    projectTitle: formData.projectTitle,
    projectSummary: formData.projectSummary,
    projectStartDate: formData.projectStartDate,
    projectEndDate: formData.projectEndDate,
    achievements: formData.achievements,
    education:formData.education,
    workExperience:formData.workExperience, 
    projects: formData.projects
  
    };
  console.log(bodyParameter)
    
    const axiosheader = {
        headers: {
            "Accept": "application/json",
        }
    };

    try {
       
        const response = await axios.post('/api/generateCV', bodyParameter, axiosheader);
        
        console.log('Response :', response.data);
        
        
        if (response.data.message) {
          alert('CV generated successfully!');
          const cvData = response.data.message;  
          setCvResponse(cvData)
         
        }

    } catch (error) {
        console.error('Error generating CV:', error);
        alert('Failed to generate CV. Please try again.');
    }
};
    

  return (
    <div className=" flex justify-center items-center bg-gray-100">
      {cvResponse ? (
        <>
    
         
          <div className="flex  flex-col px-10 w-[60%] rounded-md py-5 border border-gray-500 shadow-md justify-center" dangerouslySetInnerHTML={{ __html: cvResponse }} />
        </>

      ): (
        <>
         <div className="bg-white w-full max-w-4xl p-6 rounded-lg shadow-lg">
        <h2 className="text-3xl text-center text-gray-700 font-semibold mb-6">CV Form</h2>
        <form onSubmit={handleSubmit}>

          {/* Personal Information Section */}
          <section className="mb-6">
            <h3 className="text-xl text-gray-600 font-semibold mb-3">Personal Information</h3>
            <div className="grid  md:grid-cols-2 gap-4">
              <div>
                <label className=" text-gray-700">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  placeholder="John Doe"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  placeholder="john@example.com"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Phone Number</label>
                <input
                  name="phoneNo"
                  value={formData.phoneNo}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  placeholder="123-456-7890"
                  required
                />
              </div>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-6">
            <h3 className="text-xl text-gray-600 font-semibold mb-3">Skills</h3>
            <textarea
              name="skills"
              value={formData.skills}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none"
              placeholder="JavaScript, React, Node.js"
              rows="4"
              required
            />
          </section>

          {/* Job Title & Location Section */}
          <section className="mb-6">
            <h3 className="text-xl text-gray-600 font-semibold mb-3">Job Title & Location</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Job Title</label>
                <input
                  type="text"
                  name="jobTitle"
                  value={formData.jobTitle}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  placeholder="Software Developer"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Location</label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  placeholder="New York, USA"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">LinkedIn</label>
                <input
                  type="url"
                  name="linkedIn"
                  value={formData.linkedIn}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none"
                  placeholder="https://www.linkedin.com/in/yourprofile"
                  required
                />
              </div>
            </div>
          </section>

          {/* Education Section */}
          <section className="mb-6">
            <h3 className="text-xl text-gray-600 font-semibold mb-3">Education</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Course Name</label>
                <input
                  type="text"
                  name="courseName"
                  value={formData.courseName}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  placeholder="BSc Computer Science"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="educationStartDate"
                  value={formData.educationStartDate}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  name="educationEndDate"
                  value={formData.educationEndDate}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                />
              </div>
            </div>
          </section>

          {/* Work Experience Section */}
          <section className="mb-6">
            <h3 className="text-xl text-gray-600 font-semibold mb-3">Work Experience</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Employer</label>
                <input
                  type="text"
                  name="employer"
                  value={formData.employer}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  placeholder="ABC Corp."
                  
                />
              </div>
              <div>
                <label className="block text-gray-700">Job Summary</label>
                <textarea
                  name="jobSummary"
                  value={formData.jobSummary}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  placeholder="Describe your job responsibilities."
                  rows="4"
                 
                />
              </div>
              <div>
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="workStartDate"
                  value={formData.workStartDate}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                 
                />
              </div>
              <div>
                <label className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  name="workEndDate"
                  value={formData.workEndDate}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                />
              </div>
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-6">
            <h3 className="text-xl text-gray-600 font-semibold mb-3">Projects</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700">Project Title</label>
                <input
                  type="text"
                  name="projectTitle"
                  value={formData.projectTitle}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  placeholder="Project X"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Project Summary</label>
                <textarea
                  name="projectSummary"
                  value={formData.projectSummary}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  placeholder="Project description"
                  rows="4"
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">Start Date</label>
                <input
                  type="date"
                  name="projectStartDate"
                  value={formData.projectStartDate}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                  required
                />
              </div>
              <div>
                <label className="block text-gray-700">End Date</label>
                <input
                  type="date"
                  name="projectEndDate"
                  value={formData.projectEndDate}
                  onChange={handleChange}
                  className="w-full p-2 mt-1 border rounded-md focus:outline-none "
                />
              </div>
            </div>
          </section>

          {/* Achievements Section */}
          <section className="mb-6">
            <h3 className="text-xl text-gray-600 font-semibold mb-3">Achievements</h3>
            <textarea
              name="achievements"
              value={formData.achievements}
              onChange={handleChange}
              className="w-full p-2 mt-1 border rounded-md focus:outline-none 0"
              placeholder="Awards, Certifications"
              rows="4"
              required
            />
          </section>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button type="submit" className="bg-gray-500 text-white p-2 px-6 rounded-lg focus:outline-none ">
              Submit
            </button>
          </div>
        </form>
      </div>

        </>

      )}
         </div>
  );
};

export default CVForm;
