import React from 'react';
import PropTypes from 'prop-types';
import './newInvoiceBtn.scss';

function NewInvoiceBtn({ nameBtn }) {
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

NewInvoiceBtn.propTypes = {
  nameBtn: PropTypes.string.isRequired
};

export default NewInvoiceBtn;
