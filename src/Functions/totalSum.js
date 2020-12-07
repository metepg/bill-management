// Return total sum from all bills
const totalSum = (bills) => bills
  .map((bill) => bill.total)
  .reduce((value, totalValue) => value + totalValue);

export default totalSum;
