/* eslint-disable react/button-has-type */
import React from 'react';
import './regularBtn.scss';
import PropTypes from 'prop-types';

function RegularBtn({ nameBtn, type, onClick }) {
  return (
    <button
      className="btn-regular"
      type={type}
      aria-label={type}
      onClick={onClick}
    >
      <span className="btn__name">{nameBtn}</span>
    </button>
  );
}

RegularBtn.propTypes = {
  nameBtn: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default RegularBtn;
