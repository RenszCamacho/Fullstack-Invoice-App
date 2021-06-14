import React from 'react';
import PropTypes from 'prop-types';
import './editBtn.scss';

function EditBtn({ nameBtn }) {
  return (
    <button
      className="btn-edit"
      type="button"
      aria-label="button"
    >
      <span className="btn__name">{nameBtn}</span>
    </button>
  );
}

EditBtn.propTypes = {
  nameBtn: PropTypes.string.isRequired
};

export default EditBtn;
