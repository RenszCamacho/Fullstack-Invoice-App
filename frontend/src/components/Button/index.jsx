import React from 'react';
import './button.scss';
import PropTypes from 'prop-types';

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

Button.propTypes = {
  nameBtn: PropTypes.element.isRequired
};

export default Button;
