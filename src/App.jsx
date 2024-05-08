import React, { useState } from 'react'
import logo from './assets/logo.png'
import photo from './assets/sample-photo.jpg'
import compass from './assets/compass.png'
import gradcap from './assets/gradcap.png'
import minimize from './assets/minimize.png'
import Internship from './Internship.jsx'
import ThousandLine from './ThousandLine.jsx'
import Thesis from './Thesis.jsx'
import Completion from './Completion.jsx'
import RoadmapMajor from './roadmaps/software/major/Roadmap.jsx'
import RoadmapCore from './roadmaps/software/major-core/Roadmap.jsx'
import RoadmapExp from './roadmaps/software/exp/Roadmap.jsx'
import RoadmapDS from './roadmaps/software/ds/Roadmap.jsx'
import './App.css'

function App() {
  const [expandedRoadmap, setExpandedRoadmap] = useState(false)
  const [expandedCompletion, setExpandedCompletion] = useState(false)
  const [expandedInternship, setExpandedInternship] = useState(false)
  const [expandedThesis, setExpandedThesis] = useState(false)
  const [expandedThousandLine, setExpandedThousandLine] = useState(false)
  const [activeTab, setActiveTab] = useState('major')

  const handleTabClick = (tab) => {
    setActiveTab(tab)
  }

  const toggleExpandedRoadmap = () => {
    setExpandedRoadmap(true)
  }

  const toggleMinimizeRoadmap = (e) => {
    e.stopPropagation();
    setExpandedRoadmap(false)
  }
  
  const toggleExpandedCompletion = () => {
    setExpandedCompletion(true)
  }

  const toggleMinimizeCompletion = (e) => {
    e.stopPropagation();
    setExpandedCompletion(false)
  }

  const toggleExpandedInternship = () => {
    setExpandedInternship(true)
  }

  const toggleMinimizeInternship = (e) => {
    e.stopPropagation();
    setExpandedInternship(false)
  }

  const toggleExpandedThesis = () => {
    setExpandedThesis(true)
  }

  const toggleMinimizeThesis = (e) => {
    e.stopPropagation();
    setExpandedThesis(false)
  }

  const toggleExpandedThousandLine = () => {
    setExpandedThousandLine(true)
  }

  const toggleMinimizeThousandLine = (e) => {
    e.stopPropagation();
    setExpandedThousandLine(false)
  }

  return (
    <>
      <div className="App">
        <div className="dashboard">
          <div className="upper">
            <div className='logo-container'>
              <img className='logo-kingo' src={logo} alt="logo" />
              <h2>ingoGrad</h2>
            </div>
            <img className='profile-pic' src={photo} alt="sample-photo" />
            <div className='profile-info'>
              <p id='name'>Ben Alan</p>
              <p id='id'>2022313300</p>
            </div>
            <hr />
          </div>
          <div className='lower'>
            <button className='dashboard-button'>logout</button>
            <p id='version'>version 0.0.1</p>
          </div>
        </div>
        <div className='dashboard-clone'>
        </div>
        <div className='content-container'>
          <div className='content'>
            <div className='content-header'>
              <h1 id='greet'>Hi, Ben</h1>
              <div className='date'>
                <p id='day'>Saturday,</p>
                <p id='date'>4th May 2024</p>
              </div>
            </div>
            <div className='grid-container'>
              <div className={`grid-item ${expandedRoadmap ? 'expanded-roadmap' : 'roadmap'}`} onClick={toggleExpandedRoadmap}>
                {expandedRoadmap ? null : <img id='compass' src={compass} alt="" />}
                {expandedRoadmap &&
                <>
                  <div className='roadmap-header'>
                    <img id='compass' src={compass} alt="" />
                    <div className={`roadmap-tab ${activeTab === 'major' ? 'active' : ''}`} onClick={() => handleTabClick('major')}>
                      Major
                    </div>
                    <div className={`roadmap-tab ${activeTab === 'major-core' ? 'active' : ''}`} onClick={() => handleTabClick('major-core')}>
                      Core
                    </div>
                    <div className={`roadmap-tab ${activeTab === 'exp' ? 'active' : ''}`} onClick={() => handleTabClick('exp')}>
                      Exp
                    </div>
                    <div className={`roadmap-tab ${activeTab === 'ds' ? 'active' : ''}`} onClick={() => handleTabClick('ds')}>
                      DS
                    </div>
                    <img className='minimize' src={minimize} alt="" onClick={toggleMinimizeRoadmap}/>
                  </div>
                  <div className='roadmap-content'>
                    {activeTab === 'major' && <RoadmapMajor />}
                    {activeTab === 'major-core' && <RoadmapCore />}
                    {activeTab === 'exp' && <RoadmapExp />}
                    {activeTab === 'ds' && <RoadmapDS />}
                  </div>
                </>
                }
              </div>
              <div className={`grid-item ${expandedCompletion ? 'expanded-completion' : 'completion'}`} onClick={toggleExpandedCompletion}>
                {expandedCompletion ? null : 
                <>
                  <p className='card-title'>Completion</p>
                  <p id='completion-percent'>67.5%</p>
                </>
                }
                {expandedCompletion &&
                <>
                  <div className='completion-header'>
                    <div>
                      <p className='card-title'>Completion</p>
                      <p id='completion-percent'>67.5%</p>
                    </div>
                    <div id='right'>
                      <img className='minimize' src={minimize} alt="" onClick={toggleMinimizeCompletion}/>
                      <p id='completion-counter'><span id='completed-credit'>69</span>:<span id='left-credit'>46</span></p>
                    </div>
                  </div>
                  <hr />
                  <Completion />
                </>
                }
              </div> 
              <div className={`grid-item ${expandedThousandLine ? 'expanded-thousandLine' : 'thousandline'}`} onClick={toggleExpandedThousandLine}>
              {expandedThousandLine ? null : 
                <>
                  <p className='thousandline-card-title'>10K</p>
                  <div className='second-half'>-</div>
                  <div className='second-half'>-</div>
                  <div className='second-half'>-</div>
                  <div className='first-half'>-</div>
                  <div className='first-half'>-</div>
                </>
                }
                {expandedThousandLine &&
                <>
                  <div className='thousandLine-header'>
                    <div>
                      <p className='card-title'>10000 Line Project</p>
                      <p id='thousandLine-status'>Incomplete</p>
                    </div>
                    <img className='minimize' src={minimize} alt="" onClick={toggleMinimizeThousandLine}/>
                  </div>
                  <hr />
                  <ThousandLine />
                </>
                }
              </div>
              <div className={`grid-item ${expandedInternship ? 'expanded-internship' : 'internship'}`} onClick={toggleExpandedInternship}>
              {expandedInternship ? null : 
                <>
                 <div className='internship-header'>
                  <p className='card-title'>Internship</p>
                  <div id='internship-deadline'>
                    <p>6-1</p>
                  </div>
                </div>
                <p id='internship-company'>Samsung</p>
                </>
                }
                {expandedInternship &&
                <>
                  <div className='expanded-internship-header'>
                    <p id='internship-title'>Internship Requirement</p>
                    <img className='minimize' src={minimize} alt="" onClick={toggleMinimizeInternship}/>
                  </div>
                  <hr />
                  <Internship />
                </>
                }
              </div>
              <div className={`grid-item ${expandedThesis ? 'expanded-thesis' : 'thesis'}`} onClick={toggleExpandedThesis}>
              {expandedThesis ? null : 
                <>
                  <img src={gradcap} alt="Thesis Image" className="progress-image"/>
                </>
                }
                {expandedThesis &&
                <>
                  <div className='thesis-header'>
                    <div>
                      <p className='card-title'>Thesis Submission</p>
                      <p id='thesis-status'>Almost there</p>
                    </div>
                    <img className='minimize' src={minimize} alt="" onClick={toggleMinimizeThesis}/>
                  </div>
                  <hr />
                  <Thesis />
                </>
                }
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App;
