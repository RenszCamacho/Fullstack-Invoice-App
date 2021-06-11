import React from 'react';
import PropTypes from 'prop-types';
import Button from '../../Button';

function DashboardHeader({ message }) {
  return (
    <div>
      <div>
        <h1>Invoices</h1>
        <span>{message}</span>
      </div>
      <div>
        <button
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
    </div>
  );
}

DashboardHeader.propTypes = {
  message: PropTypes.string.isRequired
};

export default DashboardHeader;
