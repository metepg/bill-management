// Total sum of bills
/**
 *
 * @param {Array} bills = Array of objects of who paid and how much per bill
 * @returns {Number} - total sum of all bills
 */
function totalSum(bills) {
  return bills
    .map((bill) => Number(bill.total))
    .reduce((bill, total) => bill + total);
}
export default totalSum;
