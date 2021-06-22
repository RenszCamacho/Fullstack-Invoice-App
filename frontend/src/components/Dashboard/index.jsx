import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { Link } from 'react-router-dom';
import Header from '../Header';
import DashboardHeader from './DashboardHeader';
import { getInvoices, getUserData } from '../../redux/actions/actionCreators';
import InvoiceItem from './InvoiceItem';
import './dashboard.scss';
import NoInvoices from './NoInvoices';
import grandTotal from '../../services/grandTotal';

function Dashboard() {
  const dispatch = useDispatch();
  const invoices = useSelector((store) => store.invoices);
  const currentProfile = useSelector((store) => store.accesstoken);
  const userInvoices = invoices.filter(
    (invoice) => invoice.from.address.postCode === currentProfile.user.postCode
  );
  const user = useSelector((store) => store.user);

  useEffect(() => {
    dispatch(getInvoices());
    dispatch(getUserData(user?.token));
  }, []);

  return (
    <>
      <main className="dashboard-container">
        <Header />
        <DashboardHeader
          userInvoices={userInvoices.length
            ? `There are ${userInvoices.length} invoices`
            : 'No invoices'}
        />

        {
       userInvoices.length
         ? (
           <ul className="dashboard-container__list">
             {
          userInvoices.map(
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
    </>
  );
}

export default Dashboard;
