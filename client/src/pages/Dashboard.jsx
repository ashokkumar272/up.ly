import React, { useState } from 'react'
import Navbar from '../components/Navbar'
import Sidebar from '../components/Sidebar'
import Personal from '../components/profile/Personal'
import Academics from '../components/profile/Academics'
import Projects from '../components/profile/Projects'
import Skills from '../components/profile/Skills'
import WorkExperience from '../components/profile/WorkExperience'
import Certifications from '../components/profile/Certifications'


function Dashboard() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeForm, setActiveForm] = useState('personal');

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const handleNextForm = () => {
    const formOrder = ['personal', 'academics', 'projects', 'skills', 'workExperience', 'certifications'];
    const currentIndex = formOrder.indexOf(activeForm);
    if (currentIndex < formOrder.length - 1) {
      setActiveForm(formOrder[currentIndex + 1]);
    }
  };

  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      {!sidebarOpen && (
        <div className="bg-gray-200 px-4 py-2">
          <button 
            onClick={toggleSidebar}
            className="bg-blue-700 hover:bg-blue-800 text-white px-3 py-1 rounded-md transition-colors"
          >
            Menu
          </button>
        </div>
      )}
      <div className="flex flex-1 overflow-hidden">
        <div className={`transition-all duration-300 ease-in-out ${sidebarOpen ? 'w-64' : 'w-0'}`}>
          <Sidebar toggleSidebar={toggleSidebar} />
        </div>
        <div className="flex-1 overflow-y-auto p-4 bg-gray-100">
          {activeForm === 'personal' && <Personal onNext={handleNextForm} />}
          {activeForm === 'academics' && <Academics onNext={handleNextForm} />}
          {activeForm === 'projects' && <Projects onNext={handleNextForm} />}
          {activeForm === 'skills' && <Skills onNext={handleNextForm} />}
          {activeForm === 'workExperience' && <WorkExperience onNext={handleNextForm} />}
          {activeForm === 'certifications' && <Certifications onNext={handleNextForm} />}
        </div>
      </div>
    </div>
  )
}

export default Dashboard