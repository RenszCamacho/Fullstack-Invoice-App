import grandTotal from './grandTotal';

describe('Given a grandTotal function', () => {
  describe('When is invoked', () => {
    test.only('Tehn should the sum of the whole values', () => {
      const mock = [
        { id: 1, total: 3 },
        { id: 2, total: 6 }
      ];

      const result = grandTotal(mock);

      expect(result).toBe(9);
    });
  });
});
