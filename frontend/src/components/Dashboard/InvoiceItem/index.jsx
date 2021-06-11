import React from 'react';
import PropTypes from 'prop-types';

function InvoiceItem({
  idNumber,
  dueDate,
  name,
  total
}) {
  return (
    <article>
      <div>{idNumber}</div>
      <div>{dueDate}</div>
      <div>{name}</div>
      <div>
        <em className="fas fa-circle" />
        {total}
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
