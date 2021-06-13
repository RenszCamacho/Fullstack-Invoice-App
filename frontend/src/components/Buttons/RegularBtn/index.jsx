import React from 'react';
import './regularBtn.scss';
import PropTypes from 'prop-types';

function RegularBtn({ nameBtn }) {
  return (
    <button
      className="btn"
      type="button"
      aria-label="button"
    >
      <span className="btn__name">{nameBtn}</span>
    </button>
  );
}

RegularBtn.propTypes = {
  nameBtn: PropTypes.string.isRequired
};

export default RegularBtn;
