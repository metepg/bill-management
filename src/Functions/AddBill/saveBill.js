import save from '../saveToLocalStorage';
import load from '../loadFromLocalStorage';
import update from '../updateSavedGroups';

function getUserInfo(data) {
  const billInfo = data;
  // Remove all keys except how much users paid
  delete billInfo.description;
  delete billInfo.total;

  // Return array of objects
  return Object.entries(billInfo)
    .map(([name, paid]) => ({ name, paid }));
}

// If no bills saved yet
// Create array and add new bill
function saveBill(currentGroup, bill) {
  const group = currentGroup;
  if (!('bills' in group)) group.bills = [bill];
  else group.bills.push(bill);
  save('currentGroup', group);
  update('savedGroups', group);
  return true;
}

// Starts with this function
function handleAddBillForm(form, submitBtn) {
  form.preventDefault();
  const button = submitBtn;
  button.current.disabled = true;
  // Get form values as object
  const formData = new FormData(form.target);
  const values = Object.fromEntries(formData.entries());
  const data = {
    description: values.description,
    total: Number(values.total),
    details: getUserInfo(values),
  };
  const currentGroup = load('currentGroup');
  saveBill(currentGroup, data);
  button.current.disabled = false;
  alert('Saved');
  return true;
}

export default handleAddBillForm;
