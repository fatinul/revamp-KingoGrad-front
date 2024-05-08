import './Internship.css';
import React, { useState } from 'react';
import InternshipDetails from './InternshipDetails';

function Internship() {
  const [showDetails, setShowDetails] = useState(false);

  const handleBackClick = () => {
    setShowDetails(false);
  };

  const handleItemClick = () => {
    setShowDetails(true);
  };

  return (
    <div className='internship'>
      {!showDetails && (
        <div className='table-container'>
          <div className='table'>
            <table>
              <tr>
                <th><span className='label1'>Position</span></th>
                <th><span className='label2'>Company</span></th>
                <th><span className='label3'>Requirement</span></th>
                <th><span className='label4'>Deadline</span></th>
                <th><span className='label5'>Link</span></th>
              </tr>
              <tr>
                <td>Position1</td>
                <td>Company1</td>
                <td><button className='click1' onClick={handleItemClick}>Click</button></td>
                <td>2024-06-30</td>
                <td><span className='link1'>Link1</span></td>
              </tr>
              <tr>
                <td>Position2</td>
                <td>Company2</td>
                <td><button className='click1' onClick={handleItemClick}>Click</button></td>
                <td>2024-06-30</td>
                <td><span className='link2'>Link2</span></td>
              </tr>
              <tr>
                <td>Position3</td>
                <td>Company3</td>
                <td><button className='click1' onClick={handleItemClick}>Click</button></td>
                <td>2024-06-30</td>
                <td><span className='link3'>Link3</span></td>
              </tr>
              <tr>
                <td>Position4</td>
                <td>Company4</td>
                <td><button className='click1' onClick={handleItemClick}>Click</button></td>
                <td>2024-06-30</td>
                <td><span className='link4'>Link4</span></td>
              </tr>
              <tr>
                <td>Position5</td>
                <td>Company5</td>
                <td><button className='click1' onClick={handleItemClick}>Click</button></td>
                <td>2024-06-30</td>
                <td><span className='link5'>Link5</span></td>
              </tr>
            </table>
          </div>
        </div>
      )}
      {showDetails && <InternshipDetails onBackClick={handleBackClick} />}
    </div>
  );
}

export default Internship;
