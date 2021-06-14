import currencyFormat from './currencyFormat';

describe('Given a function currencyFormat', () => {
  describe('When this is invoked', () => {
    test('Then should display it-IT currency format', () => {
      const value = 200;

      const formattedValue = currencyFormat(value);

      expect(formattedValue).toEqual('200,00 €');
    });
  });
});
