import React from 'react';
import PropTypes from 'prop-types';
import './deleteBtn.scss';

function DeleteBtn({ nameBtn }) {
  return (
    <button
      className="btn-delete"
      type="button"
      aria-label="button"
    >
      <span className="btn__name">{nameBtn}</span>
    </button>
  );
}

DeleteBtn.propTypes = {
  nameBtn: PropTypes.string.isRequired
};

export default DeleteBtn;
