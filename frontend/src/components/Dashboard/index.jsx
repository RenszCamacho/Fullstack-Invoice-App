/* eslint-disable no-underscore-dangle */
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import Header from '../Header';
import DashboardHeader from './DashboardHeader';
import { getInvoices } from '../../redux/actions/actionCreators';
import InvoiceItem from './InvoiceItem';
import './dashboard.scss';
import NoInvoices from './NoInvoices';

function Dashboard() {
  const dispatch = useDispatch();
  const invoices = useSelector((store) => store.invoices);

  useEffect(() => {
    // eslint-disable-next-line no-unused-expressions
    if (!invoices.length) {
      dispatch(getInvoices());
    }
  }, [invoices]);

  // useEffect(() => {
  //   dispatch(getInvoices());
  // }, []);

  return (
    <main className="dashboard-container">
      <Header />
      <DashboardHeader
        invoices={invoices
          ? `There are ${invoices.length} invoices`
          : 'No invoices'}
      />

      {
       invoices
         ? (
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
         )
         : <NoInvoices />
     }
    </main>
  );
}

export default Dashboard;
