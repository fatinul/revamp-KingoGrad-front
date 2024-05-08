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
            <div className='course'>Computer Architecture
              <div className='courseResult'>A</div>
            </div>
          </div>
          <div className='dot-failed'>
            <div className='course'>Operating Systems
              <div className='courseResult'>C</div>
            </div>
          </div>
          <div className='dot'>
            <div className='course'>Database
              {/* <div className='courseResult'>A</div> */}
            </div>
          </div>
          <div className='dot'>
            <div className='course'>Computer Network
              {/* <div className='courseResult'>A</div> */}
            </div>
          </div>
          <div className='dot'>
            <div className='course'>Programming Languages
              {/* <div className='courseResult'>A</div> */}
            </div>
          </div>
        </div>        
      </div>
      )}
    </div>
  )
}

export default ThousandLine;