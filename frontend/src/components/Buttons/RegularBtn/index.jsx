/* eslint-disable react/button-has-type */
import React from 'react';
import './regularBtn.scss';

function RegularBtn({
  nameBtn, type, onClick, modify, data
}) {
  return (
    <button
      className={`btn-regular ${modify}`}
      type={type}
      aria-label={type}
      onClick={onClick}
      data-testid={data}
    >
      <span>{nameBtn}</span>
    </button>
  );
}

export default RegularBtn;
