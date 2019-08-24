import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
const AddTechModal = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tech, setTech] = useState('');
  const onsubmit = (e) => {
    e.preventDefault();
    if (firstName === '' || lastName === '') {
      M.toast({ html: 'Please enter the first and lastName' });
    } else {
      console.log('FirstName and lastName ');

      //clear fields
      setFirstName('');
      setLastName('');
    }
  };
  return (
    <div id='add-tech-modal' className='modal'>
      <div className='modal-content'>
        <h4>New Technician</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='firstName'
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
            <label htmlFor='firstName' className='active'>
              First name
            </label>
          </div>
        </div>

        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='lastName'
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
            <label htmlFor='lastName' className='active'>
              Last name
            </label>
          </div>
        </div>
      </div>
      <div className='modal-footer'>
        <a
          href='!#'
          onClick={onsubmit}
          className='modal-close waves-effect waves-green btn blue'
        >
          enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
