import React, { useState } from 'react';
import './Thesis.css';

function Thesis() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const data = [
    {
      label: '6th',
      text: 'Advisor Application',
      dotColor: '#637e81',
      rectangleColor: '#637e81',
      details: [
        '3-18 ~ 3-22: First Application for professor',
        '3-25 ~ 3-29: First choose student',
        '4-1 ~ 4-5: Second Application for research field of thesis',
        '4-8 ~ 4-12: Second choose student',
        '4-15 ~ 4-19: Third Assignment of professor'
      ]
    },
    { label: '7th', text: 'Proposal Submission', dotColor: '#bbb', rectangleColor: '#bbb', details: [] },
    { label: '8th', text: 'Mid Report Submission', dotColor: '#bbb', rectangleColor: '#bbb', details: [] },
    { label: '8th', text: 'Final Report Submission', dotColor: '#bbb', rectangleColor: '#bbb', details: [] },
    { label: '8th', text: 'Evaluation of Professor', dotColor: '#bbb', rectangleColor: '#bbb', details: [] },
    { label: '8th', text: 'Final Presentation', dotColor: '#bbb', rectangleColor: '#bbb', details: [] },
  ];

  return (
    <div className="thesis">
      <div className="list-container">
        {data.map((item, index) => (
          <div key={index} className={`item ${expandedSection === index ? 'expanded' : ''}`}>
            <div className="header" onClick={() => toggleSection(index)}>
            {/* <div
              className='dot'
              onClick={() => toggleSection(index)}
              style={{ backgroundColor: item.dotColor }}
            > */}
              <div className="dot" style={{ backgroundColor: item.dotColor }}></div>
              <div className='overlap'>
                <div className='rectangle' style={{ backgroundColor: item.rectangleColor }}></div>
                <span className="label">{item.label}</span>
              </div>
              
              <span className="text">{item.text}</span>
              <span className={`arrow ${expandedSection === index ? 'up' : 'down'}`}></span>
            {/* </div> */}
            </div>
            {expandedSection === index && (
              <div className="details">
                <ul>
                  {item.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                </ul>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thesis;
