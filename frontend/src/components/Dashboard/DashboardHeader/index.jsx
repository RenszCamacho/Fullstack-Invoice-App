import React from 'react';
import PropTypes from 'prop-types';
import NewInvoiceBtn from '../../Buttons/NewInvoiceBtn';

function DashboardHeader({ invoices }) {
  return (
    <div className="dashboard-container__dashboard-header">
      <div className="dashboard-header__description">
        <h1 className="description__title">Invoices</h1>
        <span className="description__invoices">{invoices}</span>
      </div>
      <div>
        <NewInvoiceBtn route="/newform" nameBtn="New" />
      </div>
    </div>
  );
}

DashboardHeader.propTypes = {
  invoices: PropTypes.string.isRequired
};

export default DashboardHeader;
