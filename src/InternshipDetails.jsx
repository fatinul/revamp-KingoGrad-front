import './InternshipDetails.css';
import backButton from './assets/back-button.png'

function InternshipDetails({ onBackClick }) {

  return (
    <div className='internship-details'>
      <div className='internship-header'>
        <h1 className='title'>
          <button className='back-button' onClick={onBackClick}>
          <img src={backButton} alt='Back' className='back-button-icon' />
          </button>
          Internship Title
          </h1>
      </div>
      <div className='details'>
        <span className='trait1'>Trait1</span>
        <ul className='trait1-details'>
          <li>Insert details here.....</li>
          <li>Insert details here.....</li>
        </ul>
        <span className='trait2'>Trait2</span>
        <ul className='trait2-details'>
          <li>Insert details here.....</li>
          <li>Insert details here.....</li>
        </ul>
        <span className='trait3'>Trait3</span>
        <ul className='trait3-details'>
          <li>Insert details here.....</li>
          <li>Insert details here.....</li>
        </ul>
      </div>
    </div>
  );
}

export default InternshipDetails;
