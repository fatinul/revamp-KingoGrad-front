import React, { useState } from 'react';
import './Thesis.css';

function Thesis() {
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (index) => {
    if (expandedSection === index) {
      setExpandedSection(null);
    } else {
      setExpandedSection(index);
    }
  };

  // Updated data array with text, label, and color information
  const data = [
    { text: 'Advisor Application', label: '6th', dotColor: '#637e81', rectangleColor: '#637e81',
      details: [
        '3-18 ~ 3-22: First Application for professor',
        '3-25 ~ 3-29: First choose student',
        '4-1 ~ 4-5: Second Application for research field of thesis',
        '4-8 ~ 4-12: Second choose student',
        '4-15 ~ 4-19: Third Assignment of professor'
      ]
    },
    { text: 'Proposal Submission', label: '7th', dotColor: '#bbb', rectangleColor: '#696969',
      details: [

      ]
    },
    { text: 'Mid Report Submission', label: '8th', dotColor: '#bbb', rectangleColor: '#696969',
      details: [

      ]
    },
    { text: 'Final Report Submission', label: '8th', dotColor: '#bbb', rectangleColor: '#696969',
      details: [

      ]
    },
    { text: 'Evaluation of Professor', label: '8th', dotColor: '#bbb', rectangleColor: '#696969',
      details: [

      ]
    },
    { text: 'Final Presentation', label: '8th', dotColor: '#bbb', rectangleColor: '#696969',
      details: [

      ]
    },
  ];

  return (
    <div className='thesis'>
      <div className='table-container'>
        {data.map((item, index) => (
          <div key={index} className={`box ${expandedSection === index ? 'expanded' : ''}`}>
            <div
              className='dot'
              onClick={() => toggleSection(index)}
              style={{ backgroundColor: item.dotColor }}
            >
              <div className='overlap'>
                <div
                  className='rectangle'
                  style={{ backgroundColor: item.rectangleColor }}
                ></div>
                <div className='text'>{item.label}</div>
              </div>
              <div className='sequence'>
                {item.text}
                <span
                  className={`arrow ${expandedSection === index ? 'expanded' : ''}`}
                ></span>
              </div>
            </div>
            {expandedSection === index && (
              // <div className='table-container'>
                <div className='details'>
                  <ul>
                    {item.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                  </ul>
                  {/* Detailed content for {item.text} */}
                </div>
              // </div>
              
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Thesis;
