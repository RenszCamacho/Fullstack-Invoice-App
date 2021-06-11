import React from 'react';
import PropTypes from 'prop-types';

function InvoiceItem({
  idNumber,
  dueDate,
  name,
  total
}) {
  const currencyFormat = (value) => new Intl.NumberFormat('es-ES', {
    style: 'currency',
    currency: 'EUR'
  }).format(value);

  return (
    <article className="list__item">
      <div className="item__id">
        <span>#</span>
        {idNumber}
      </div>
      <div className="item__name">{name}</div>
      <div className="item__due-date">
        <span>Due </span>
        {dueDate}
      </div>
      <div className="item__total">{currencyFormat(total)}</div>
      <div className="item__paid-status">
        <em className="fas fa-circle" />
        Pending
      </div>
    </article>
  );
}

InvoiceItem.propTypes = {
  idNumber: PropTypes.string.isRequired,
  dueDate: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired
};

export default InvoiceItem;
