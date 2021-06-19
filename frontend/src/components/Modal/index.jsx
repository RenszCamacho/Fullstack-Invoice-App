/* eslint-disable react/prop-types */
import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, withRouter } from 'react-router-dom';
import RegularBtn from '../Buttons/RegularBtn';
import './modal.scss';
import { deleteInvoice } from '../../redux/actions/actionCreators';

function Modal({
  showModal, setShowModal, id, invoice
}) {
  const dispatch = useDispatch();
  const history = useHistory();

  function deleteModal() {
    dispatch(deleteInvoice(invoice));
    history.push('/');
  }

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
              onClick={deleteModal}
            />
          </div>
        </div>
      </div>
      )
      }
    </>
  );
}

export default withRouter(Modal);
