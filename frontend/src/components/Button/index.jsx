import React from 'react';
import './button.scss';

// eslint-disable-next-line react/prop-types
function Button({ nameBtn }) {
  return (
    <button
      className="btn"
      type="button"
      aria-label="button"
    >
      <em className="fas fa-plus btn__icon" />
      <span className="btn__name">{nameBtn}</span>
    </button>
  );
}

export default Button;
