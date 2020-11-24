import save from '../saveToLocalStorage';
import load from '../loadFromLocalStorage';
import update from '../updateSavedGroups';

function getUserInfo(data) {
  let billInfo = data;
  delete billInfo.description;
  delete billInfo.evenShares;
  delete billInfo.total;

  // Make array of objects from object key/value
  billInfo = Object.keys(billInfo)
    .map((key) => ({ name: key, paid: billInfo[key] }));

  return billInfo;
}

// If no bills saved yet
// Create array and add new bill
function saveBill(currentGroup, bill) {
  const group = currentGroup;
  if (!('bills' in group)) group.bills = [bill];
  else group.bills.push(bill);
  save('currentGroup', group);
  update('savedGroups', group);
  console.log(load('savedGroups'));
  return true;
}

function handleAddBillForm(form) {
  form.preventDefault();
  // Get form values as object
  const formData = new FormData(form.target);
  const values = Object.fromEntries(formData.entries());
  const data = {
    description: values.description,
    total: values.total,
    evenShares: !!values.evenShares,
    details: getUserInfo(values),
  };
  const currentGroup = load('currentGroup');
  saveBill(currentGroup, data);
}

export default handleAddBillForm;
