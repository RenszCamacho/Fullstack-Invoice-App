import multiply from './multiply';

describe('Given a function multiply', () => {
  describe('When this is invoked', () => {
    test('Then should return items times quantity', () => {
      const item = 200;
      const quantity = 2;

      const result = multiply(item, quantity);

      expect(result).toBe(400);
    });
  });
});
