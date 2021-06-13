import React from 'react';
import PropTypes from 'prop-types';
// import NewInvoiceBtn from '../../Buttons/NewInvoiceBtn';
import RegularBtn from '../../Buttons/RegularBtn';

function DashboardHeader({ invoices }) {
  return (
    <div className="dashboard-container__dashboard-header">
      <div className="dashboard-header__description">
        <h1 className="description__title">Invoices</h1>
        <span className="description__invoices">{invoices}</span>
      </div>
      <button
        className="dashboard-header__btn"
        type="button"
        aria-label="drop down"
      >
        <span>Filter</span>
        <em className="fas fa-chevron-down" />
      </button>
      <div>
        {/* <NewInvoiceBtn nameBtn="New" /> */}
        <RegularBtn nameBtn="Mark as Paid" />
      </div>
    </div>
  );
}

DashboardHeader.propTypes = {
  invoices: PropTypes.string.isRequired
};

export default DashboardHeader;
