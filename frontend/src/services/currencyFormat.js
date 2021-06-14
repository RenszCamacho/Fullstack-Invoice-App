const currencyFormat = (value) => new Intl.NumberFormat('it-IT', {
  style: 'currency',
  currency: 'EUR',
  minimumFractionDigits: 2
}).format(value);

export default currencyFormat;
