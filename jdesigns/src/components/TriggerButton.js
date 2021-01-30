import React from 'react';

import './TriggerButton.css';

const Trigger = ({ triggerText, buttonRef, showModal }) => {
  return (
    <button
      className="btn btn-lg btn-light center modal-button"
      ref={buttonRef}
      onClick={showModal}
    >
      {triggerText}
    </button>
  );
};
export default Trigger;