import React, { useState } from 'react';
import './ThousandLine.css'

function ThousandLine() {
  const [expandedThousandLine, setExpandedThousandLine] = useState(false)

  const handleClick = () => {
    setExpandedThousandLine(true);
    setHeaderName('Thousand Lines');
  };

  return (
    <div className='thousandLine'>
      {!expandedThousandLine && (
      <div className='table-container'>
        <div className='box'>
          <div className='dot-passed'>
            <div className='course'>Computer Architecture</div>
          </div>
          <div className='dot-failed'>
            <div className='course'>Operating Systems</div>
          </div>
          <div className='dot'>
            <div className='course'>Database</div>
          </div>
          <div className='dot'>
            <div className='course'>Computer Network</div>
          </div>
          <div className='dot'>
            <div className='course'>Programming Languages</div>
          </div>
        </div>        
      </div>
      )}
    </div>
  )
}

export default ThousandLine;