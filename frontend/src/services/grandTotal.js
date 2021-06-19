export default function grandTotal(invoice) {
  const eachInvoice = invoice.map((eachTotal) => eachTotal.total);
  const total = eachInvoice.reduce((acc, val) => acc + val, 0);
  return total;
}
