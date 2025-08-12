import React from 'react';

const SendButton = ({ onClick, disabled }) => {
  return (
    <button type="submit" onClick={onClick} disabled={disabled}>
      Send
    </button>
  );
};

export default SendButton;