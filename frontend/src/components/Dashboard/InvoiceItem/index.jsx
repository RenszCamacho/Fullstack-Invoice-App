import React from 'react';
import currencyFormat from '../../../services/currencyFormat';

function InvoiceItem({
  idNumber,
  dueDate,
  name,
  total,
  status,
  styles
}) {
  return (
    <li className="list__item">
      <div className="item__id">
        <span>#</span>
        {idNumber}
      </div>
      <div className="item__name">{name}</div>
      <div className="item__due-date">
        <span>Due</span>
        {dueDate}
      </div>
      <div className="item__total">{currencyFormat(total)}</div>
      <div className={styles}>
        <em className="fas fa-circle" />
        {status}
      </div>
    </li>
  );
}

export default InvoiceItem;
