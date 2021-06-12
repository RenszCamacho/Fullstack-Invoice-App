/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import DashboardHeader from './DashboardHeader';
import { getInvoices } from '../../redux/actions/actionCreators';
import InvoiceItem from './InvoiceItem';
import './dashboard.scss';

function Dashboard() {
  const dispatch = useDispatch();
  const invoices = useSelector((store) => store.invoices);

  useEffect(() => {
    dispatch(getInvoices());
  }, []);

  return (
    <main className="dashboard-container">
      <DashboardHeader
        invoices={`There are ${invoices.length} invoices`}
      />

      <ul className="dashboard-container__list">
        {
          invoices.map(
            (invoice) => (
              <Link to="/">
                <InvoiceItem
                  key={invoice._id}
                  idNumber={
                  invoice._id
                    .toUpperCase()
                    .slice(-5)
                }
                  dueDate={invoice.projectDescription}
                  name={invoice.to.name}
                  total={invoice.total}
                />
              </Link>
            )
          )
        }
      </ul>
    </main>
  );
}

export default Dashboard;
