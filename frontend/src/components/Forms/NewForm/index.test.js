import React from 'react';
import NewForm from './index';
import { render, screen } from '../../../utils/test-utils';

global.scrollTo = jest.fn();

describe('Edit Form', () => {
  describe('Given a EditForm component', () => {
    describe('When is submitted with valid inputs', () => {
      test('Then calls the onSubmit function', async () => {
        render(<NewForm />, {
          initialState: {
            invoice: [{
              _id: '64264262',
              paymentTerms: 'terms',
              status: false,
              to: { name: 'sara' },
              items: [{ total: 4 }]
            }]
          }
        });

        const result = screen.getByLabelText('Street Address', { name: 'from.address.street' });

        expect(result).toBeInTheDocument();
      });
    });
  });
});
