import React from 'react';
import PropTypes from 'prop-types';
import './editBtn.scss';

function EditBtn({ nameBtn, onClick }) {
  return (
    <button
      className="btn-edit"
      type="button"
      aria-label="button"
      onClick={onClick}
    >
      <span className="btn__name">{nameBtn}</span>
    </button>
  );
}

EditBtn.propTypes = {
  nameBtn: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

export default EditBtn;
