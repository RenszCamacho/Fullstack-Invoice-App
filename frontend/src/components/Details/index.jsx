import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import dayjs from 'dayjs';
import { useParams, withRouter } from 'react-router-dom';
import { getOneInvoice, markAsPaid } from '../../redux/actions/actionCreators';
import Header from '../Header';
import EditForm from '../Forms/EditForm';
import multiply from '../../services/multiply';
import currencyFormat from '../../services/currencyFormat';
import RegularBtn from '../Buttons/RegularBtn';
import GoBack from '../Buttons/GoBack';
import Modal from '../Modal';
import grandTotal from '../../services/grandTotal';
import './details.scss';

function Details() {
  const dispatch = useDispatch();
  const invoice = useSelector((store) => store.invoice);

  const [showModal, setShowModal] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const { invoiceId } = useParams();

  useEffect(() => {
    dispatch(getOneInvoice(invoiceId));
    window.scrollTo(0, 0);
  }, []);

  function toggleStatus() {
    const newStatus = { ...invoice };
    newStatus.status = !newStatus.status;
    dispatch(markAsPaid(newStatus));
  }

  function openModal() {
    setShowModal((previous) => !previous);
  }

  function openEditForm() {
    setShowEditForm((previous) => !previous);
  }

  return (
    <>
      {
        showEditForm
          ? <EditForm dataInvoice={invoice} />
          : (
            invoice?._id && (

            <main className="details-container">
              <Modal
                showModal={showModal}
                setShowModal={setShowModal}
                invoice={invoice?._id}
                id={
              invoice?._id
                .toUpperCase()
                .slice(-5)
            }
              />

              <Header />

              <GoBack />

              <div className="details-container__status">
                <p className="status__paragraph">Status</p>
                <div className={invoice?.status ? 'status__paid-status' : 'status__pending-status'}>
                  <em className="fas fa-circle" />
                  {invoice?.status ? 'Paid' : 'Pending'}
                </div>
              </div>

              <div className="details-container__body">
                <div className="body__project-description">
                  #
                  <span>
                    {invoice?._id
                      .slice(-5)
                      .toUpperCase()}
                  </span>
                  <h2>{invoice?.projectDescription}</h2>
                </div>

                <address className="body__address-to">
                  {invoice?.from?.address?.street}
                  <br />
                  {invoice?.from?.address?.city}
                  <br />
                  {invoice?.from?.address?.postCode}
                  <br />
                  {invoice?.from?.address?.country}
                  <br />
                </address>

                <div className="body__invoice-date">
                  <h3>Invoice Date</h3>
                  <span>{dayjs(invoice?.invoiceDate).format('DD MMM YYYY')}</span>
                </div>

                <div className="body__payment-due">
                  <h3>Paymet Due</h3>
                  <span>{dayjs(invoice?.paymentTerms).format('DD MMM YYYY')}</span>
                </div>

                <div className="body__sent-to">
                  <h3>Sent to</h3>
                  <span>{invoice?.to?.email}</span>
                </div>

                <address className="body__address-from">
                  <p>Bill to</p>
                  <h3>{invoice?.to?.name}</h3>
                  {invoice?.to?.address?.street}
                  <br />
                  {invoice?.to?.address?.city}
                  <br />
                  {invoice?.to?.address?.postCode}
                  <br />
                  {invoice?.to?.address?.country}
                  <br />
                </address>

                <ul className="body__list">
                  {
                invoice.items.map(
                  (item) => (
                    <li className="list__item-details" key={`${item._id}A`}>
                      <div className="item-details__container">
                        <h3>{item.productName}</h3>
                        <span>{`${item.quantity}x ${currencyFormat(item.price)}`}</span>
                      </div>
                      <p className="item-details__total">{currencyFormat(multiply(item.price, item.quantity))}</p>
                    </li>
                  )
                )
              }
                  <div className="list__total">
                    <p>Grand Total</p>
                    <p>{currencyFormat(grandTotal(invoice?.items))}</p>
                  </div>
                </ul>

              </div>
              <div className="details-container__btn">

                <RegularBtn
                  nameBtn="Edit"
                  modify="info"
                  data="edit-button"
                  onClick={openEditForm}
                />

                <RegularBtn
                  nameBtn="Delete"
                  data="delete-button"
                  modify="danger"
                  onClick={openModal}
                />

                {!invoice?.status && (
                <RegularBtn
                  modify="primary"
                  data="toggle-button"
                  nameBtn="Mark as Paid"
                  onClick={toggleStatus}
                />
                )}
              </div>
            </main>
            )
          )
      }
    </>
  );
}

export default withRouter(Details);
