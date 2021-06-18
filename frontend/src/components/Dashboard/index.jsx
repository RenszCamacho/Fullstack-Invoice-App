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
    if (!invoices?.length) {
      dispatch(getInvoices());
    }
  }, [invoices]);

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
              <Link key={`${invoices._id}A`} to={`/details/${invoice._id}`}>
                <InvoiceItem
                  idNumber={
                  invoice._id
                    .toUpperCase()
                    .slice(-5)
                }
                  dueDate={invoice.paymentTerms}
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
