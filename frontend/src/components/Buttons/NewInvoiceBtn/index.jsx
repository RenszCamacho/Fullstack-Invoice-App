import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './newInvoiceBtn.scss';

function NewInvoiceBtn({ nameBtn, route }) {
  return (
    <Link
      to={route}
      className="btn"
      type="button"
      aria-label="button"
    >
      <em className="fas fa-plus btn__icon" />
      <span className="btn__name">{nameBtn}</span>
    </Link>
  );
}

NewInvoiceBtn.propTypes = {
  nameBtn: PropTypes.string.isRequired,
  route: PropTypes.string.isRequired
};

export default NewInvoiceBtn;
