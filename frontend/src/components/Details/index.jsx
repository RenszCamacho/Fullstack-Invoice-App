/* eslint-disable react/prop-types */
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getOneInvoice } from '../../redux/actions/actionCreators';
import Header from '../Header';
import multiply from '../../services/multiply';
import currencyFormat from '../../services/currencyFormat';
import DeleteBtn from '../Buttons/DeleteBtn';
import RegularBtn from '../Buttons/RegularBtn';
import EditBtn from '../Buttons/EditBtn';

function Details({ match }) {
  const dispatch = useDispatch();
  const invoice = useSelector((store) => store.invoices);

  useEffect(() => {
    if (!invoice?.length) {
      dispatch(getOneInvoice());
    }
  }, [invoice]);

  const invoiceId = invoice.filter((one) => one._id === match.params.invoiceId)[0];
  return (
    <main>
      <Header />

      <Link to="/">
        <em className="fas fa-chevron-left" />
        <span>Go Back</span>
      </Link>

      <div>
        <p>Status</p>
        <div>
          <em className="fas fa-circle" />
          Pending
        </div>
      </div>

      <div>
        <div>
          #
          <span>
            {invoiceId._id
              .slice(-5)
              .toUpperCase()}
          </span>
          <h2>{invoiceId.projectDescription}</h2>
        </div>

        <address>
          {invoiceId.to.address.street}
          <br />
          {invoiceId.to.address.city}
          <br />
          {invoiceId.to.address.postCode}
          <br />
          {invoiceId.to.address.country}
          <br />
        </address>

        <div>
          <h3>Invoice Date</h3>
          <span>{invoiceId.invoiceDate}</span>
        </div>

        <div>
          <h3>Sent to</h3>
          <span>{invoiceId.to.email}</span>
        </div>

        <address>
          <h3>From to</h3>
          {invoiceId.from.name}
          <br />
          {invoiceId.from.address.street}
          <br />
          {invoiceId.from.address.city}
          <br />
          {invoiceId.from.address.postCode}
          <br />
          {invoiceId.from.address.country}
          <br />
        </address>

        <ul>
          {
                invoiceId.items.map(
                  (item) => (
                    <li key={`${item._id}A`}>
                      <div>
                        <h3>{item.productName}</h3>
                        <span>{`${item.quantity}x ${currencyFormat(item.price)}`}</span>
                      </div>
                      <div>{currencyFormat(multiply(item.price, item.quantity))}</div>
                    </li>
                  )
                )
              }
          <div>
            <p>Grand Total</p>
            <p>{currencyFormat(invoiceId.total)}</p>
          </div>
        </ul>

        <div>
          <EditBtn nameBtn="Edit" />
          <DeleteBtn nameBtn="Delete" />
          <RegularBtn nameBtn="Mark as Paid" />
        </div>
      </div>
    </main>
  );
}

export default Details;
