/* eslint-disable react/button-has-type */
import React from 'react';
import './regularBtn.scss';
import PropTypes from 'prop-types';

function RegularBtn({ nameBtn, type }) {
  return (
    <button
      className="btn-regular"
      type={type}
      aria-label={type}
    >
      <span className="btn__name">{nameBtn}</span>
    </button>
  );
}

RegularBtn.propTypes = {
  nameBtn: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired
};

export default RegularBtn;
