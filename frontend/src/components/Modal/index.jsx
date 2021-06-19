/* eslint-disable react/prop-types */
import React from 'react';
import DeleteBtn from '../Buttons/DeleteBtn';
import EditBtn from '../Buttons/EditBtn';
import './modal.scss';

function Modal({ showModal, setShowModal, id }) {
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
            <EditBtn
              nameBtn="Cancel"
              onClick={() => setShowModal((previous) => !previous)}
            />
            <DeleteBtn
              nameBtn="Delete"
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
