import React from 'react';
import noInvoices from '../../../assets/no-invoices.svg';

function NoInvoices() {
  return (
    <div className="dashboard-container__no-invoices">
      <img src={noInvoices} alt="no invoices" />
      <h2 className="no-invoices__subtitle">There is nothing here</h2>
      <p className="no-invoices__description">
        Create a new invoice by clicking the
        {' '}
        <br />
        {' '}
        <span>New</span>
        {' '}
        button and get started
      </p>
    </div>
  );
}

export default NoInvoices;
