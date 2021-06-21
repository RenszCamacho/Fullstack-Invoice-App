import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import dayjs from 'dayjs';
import Header from '../Header';
import DashboardHeader from './DashboardHeader';
import { getInvoices } from '../../redux/actions/actionCreators';
import InvoiceItem from './InvoiceItem';
import './dashboard.scss';
import NoInvoices from './NoInvoices';
import grandTotal from '../../services/grandTotal';

function Dashboard() {
  const dispatch = useDispatch();
  const invoices = useSelector((store) => store.invoices);

  useEffect(() => {
    dispatch(getInvoices());
  }, []);

  return (
    <main className="dashboard-container">
      <Header />
      <DashboardHeader
        invoices={invoices.length
          ? `There are ${invoices.length} invoices`
          : 'No invoices'}
      />

      {
       invoices.length
         ? (
           <ul className="dashboard-container__list">
             {
          invoices.map(
            (invoice) => (
              <Link
                key={invoice?._id}
                to={`/details/${invoice?._id}`}
                data-go-form="go-form"
              >
                <InvoiceItem
                  idNumber={
                  invoice?._id
                    .toUpperCase()
                    .slice(-5)
                }
                  dueDate={dayjs(invoice?.paymentTerms).format('DD MMM YYYY')}
                  name={invoice?.to.name}
                  total={grandTotal(invoice?.items)}
                  status={invoice?.status ? 'Paid' : 'Pending'}
                  styles={invoice?.status ? 'item__paid-status' : 'item__pending-status'}
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
