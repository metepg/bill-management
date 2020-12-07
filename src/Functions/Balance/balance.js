import totalSumFromBills from '../totalSum';

// Get user index from user names array
const getIndex = (userNames, user) => userNames
  .findIndex((name) => name === user);

function userPaidTotal(bills, user) {
  if (!bills) return 0;
  // Get all user payments from bills
  const userPayments = bills
    .map((bill) => Number(bill.details[user].paid));

  // Add user payments together to get total sum
  return userPayments
    .reduce((payment, total) => payment + total);
}

// Calculate total balance for user
function getBalance(bills, userNames, userName) {
  if (!bills) return 0;

  // How many users in group
  const participants = userNames.length;

  // Total sum from bills
  const totalSum = totalSumFromBills(bills);

  // Get current user index from userNames array
  const userIndex = getIndex(userNames, userName);

  // return balance
  return Math
    .round(((userPaidTotal(bills, userIndex) - totalSum / participants)) * 100) / 100;
}

export default { getIndex, userPaidTotal, getBalance };
