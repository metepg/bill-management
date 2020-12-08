// Return total sum from all bills
const totalSum = (bills) => (bills
  ? bills
    .map((bill) => bill.total)
    .reduce((value, totalValue) => value + totalValue)
  : 0);

export default totalSum;
