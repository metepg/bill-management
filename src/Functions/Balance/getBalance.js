// Calculate total sum from all bills
const addTogether = (array) => array
  .map((bill) => bill.total)
  .reduce((a, b) => a + b);

// Get user index from user names array
const getIndex = (userNames, user) => userNames
  .findIndex((name) => name === user);

// Calculate total balance for user
function getBalance(bills, userNames, userName) {
  if (!bills) return 0;
  // How many users in group
  const participants = userNames.length;

  // Total sum from bills
  const totalSum = addTogether(bills);

  // Get current user index from userNames array
  const userIndex = getIndex(userNames, userName);

  // Get all user payments from bills
  const userPayments = bills
    .map((bill) => Number(bill.details[userIndex].paid));

  // Add user payments together to get total sum
  const userPaidTotal = userPayments
    .reduce((payment, total) => payment + total);

  // Calculate and set user balance as integer
  // return balance
  const userBalance = Math
    .round(((userPaidTotal - totalSum / participants)) * 100) / 100;
  return userBalance;
}

export default getBalance;
