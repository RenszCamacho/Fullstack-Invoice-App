/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import RegularBtn from '../Buttons/RegularBtn';
import './modal.scss';
import { deleteInvoice } from '../../redux/actions/actionCreators';

function Modal({
  showModal, setShowModal, id, invoiceId
}) {
  const dispatch = useDispatch();

  return (
    <>
      {
      showModal
      && (
      <div className="modal-wrapper">
        <div className="modal-wrapper__box">
          <h2 className="box__subtitle">Confirm Deletion</h2>
          <p className="box__description">
            Are you sure you want to delete invoice
            {' '}
            #
            {id}
            ?
            {' '}
            This action cannot be undone.
          </p>

          <div className="box__btn-wrapper">
            <RegularBtn
              modify="info"
              nameBtn="Cancel"
              onClick={() => setShowModal((previous) => !previous)}
            />
            <RegularBtn
              modify="danger"
              nameBtn="Delete"
              onClick={dispatch(deleteInvoice(invoiceId._id))}
            />
          </div>
        </div>
      </div>
      )
      }
    </>
  );
}

export default Modal;
