/* eslint-disable react/jsx-boolean-value */
import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Modal from './index';
import { deleteInvoice } from '../../redux/actions/actionCreators';
import { render, screen, fireEvent } from '../../utils/test-utils';

jest.mock('../../redux/actions/actionCreators');
const mockHistoryPush = jest.fn();

jest.mock('react-router-dom', () => ({
  ...jest.requireActual('react-router-dom'),
  useHistory: () => ({
    push: mockHistoryPush
  })
}));

describe('LogIn component', () => {
  describe('Given a logIn function', () => {
    describe('When is render with empty initial state', () => {
      test('Then should call getInvoice', () => {
        render(
          <BrowserRouter>
            <Modal showModal={true} setShowModal={jest.fn()} />
          </BrowserRouter>
        );

        const modalCancel = screen.getByTestId('modal-cancel-button');

        fireEvent.click(modalCancel);
        expect(deleteInvoice).toHaveBeenCalled();
      });

      test('Then should call getInvoice', () => {
        render(
          <BrowserRouter>
            <Modal showModal={true} setShowModal={jest.fn()} />
          </BrowserRouter>, {
            initialState: {
              invoice: {}
            }
          }
        );

        const modalDelete = screen.getByTestId('modal-delete-button');

        fireEvent.click(modalDelete);
      });
    });

    describe('When is render with empty initial state', () => {
      test('Then should call getInvoice', () => {
        render(
          <BrowserRouter>
            <Modal showModal={true} setShowModal={jest.fn()} />
          </BrowserRouter>
        );

        const modalCancel = screen.getByTestId('modal-cancel-button');

        fireEvent.click(modalCancel);
      });

      test('Then should call getInvoice', () => {
        render(
          <BrowserRouter>
            <Modal showModal={true} setShowModal={jest.fn()} />
          </BrowserRouter>
        );

        const modalDelete = screen.getByTestId('modal-delete-button');

        fireEvent.click(modalDelete);
      });
    });
  });
});
