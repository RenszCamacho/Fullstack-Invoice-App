import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

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
        <Button nameBtn="New" />
      </div>
    </div>
  );
}

DashboardHeader.propTypes = {
  invoices: PropTypes.string.isRequired
};

export default DashboardHeader;
