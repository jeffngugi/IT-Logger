import React, { useState } from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';
const EditLogModal = () => {
  const [message, setMessage] = useState('');
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState('');
  const onsubmit = (e) => {
    e.preventDefault();
    if (message === '' || tech === '') {
      M.toast({ html: 'Please enter message and tech' });
    } else {
      console.log('Message tech attention ');

      //clear fields
      setMessage('');
      setTech('');
      setAttention(false);
    }
  };
  return (
    <div id='edit-log-modal' className='modal' style={modalStyle}>
      <div className='modal-content'>
        <h4>Enter system Log</h4>
        <div className='row'>
          <div className='input-field'>
            <input
              type='text'
              name='message'
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <label htmlFor='message' className='active'>
              Log Message
            </label>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <select
              name='tech'
              value={tech}
              className='browser-default'
              onChange={(e) => setTech(e.target.value)}
            >
              <option value='John Doe'>John Doe</option>
              <option value='Jeff Ngugi'>Jeff Ngugi </option>
              <option value='Faith Njeri'>Faith Njeri </option>
            </select>
          </div>
        </div>
        <div className='row'>
          <div className='input-field'>
            <p>
              <label>
                <input
                  type='checkbox'
                  className='filled-in'
                  checked={attention}
                  value={attention}
                  onChange={(e) => setAttention(!attention)}
                />
                <span>Needs attetion</span>
              </label>
            </p>
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

const modalStyle = {
  width: '75%',
  height: '75%'
};

export default EditLogModal;
