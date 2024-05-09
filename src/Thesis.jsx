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
    { label: '7th', text: 'Proposal Submission', dotColor: '#bbb', rectangleColor: '#bbb', 
      details: [
        '3-4 ~ 3-8: Additional application professor',
        '3-11 ~ 3-22: Submit proposal',
        '3-25 ~ 3-29: Approve for proposal'
      ] },
    { label: '8th', text: 'Mid Report Submission', dotColor: '#bbb', rectangleColor: '#bbb', 
      details: [
        '3-11 ~ 3-22: Submit mid report',
        '3-25 ~ 3-29: Approve for mid report'
      ] },
    { label: '8th', text: 'Final Report Submission', dotColor: '#bbb', rectangleColor: '#bbb', 
      details: [
        '4-15 ~ 4-26: Submit Final report',
        '4-29 ~ 5-3: Approve for Final report'
      ] },
    { label: '8th', text: 'Evaluation of Professor', dotColor: '#bbb', rectangleColor: '#bbb', 
      details: [
        '5-8 ~ 5-14: Evaluation of professor',
        '5-22: Presentation of campus'
      ] },
    { label: '8th', text: 'Final Presentation', dotColor: '#bbb', rectangleColor: '#bbb', 
      details: [
        '5-8 ~ 5-14: Evaluation of professor',
        '5-22: Presentation of campus'
      ] },
  ];

  return (
    <div className="thesis">
      <div className="table-container">
        <table>
          <tbody>
            {data.map((item, index) => (
              <React.Fragment key={index}>
                <tr className={`header ${expandedSection === index ? 'expanded' : ''}`} onClick={() => toggleSection(index)}>
                  <td>
                    <div className="dot" style={{ backgroundColor: item.dotColor }}></div>
                  </td>
                  <td>
                    <div className="label">{item.label} {item.text}</div>
                  </td>
                  <td>
                    <span className={`arrow ${expandedSection === index ? 'up' : 'down'}`}></span>
                  </td>
                </tr>
                {expandedSection === index && (
                  <tr className="details">
                    <td colSpan="3">
                      <ul>
                        {item.details.map((detail, idx) => <li key={idx}>{detail}</li>)}
                      </ul>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default Thesis;
