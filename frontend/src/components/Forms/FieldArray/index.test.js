import React from 'react';
import FieldArray from './index';
import { render, screen, fireEvent } from '../../../utils/test-utils';

describe('LogIn component', () => {
  describe('Given a logIn function', () => {
    describe('When is render with empty initial state', () => {
      test('Then should logIn', () => {
        render(<FieldArray />);

        const buttonDelete = screen.getByTestId('data-email');

        fireEvent.change(buttonDelete, {});
      });
    });
  });
});
