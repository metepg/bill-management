/* eslint-disable no-param-reassign */
import load from '../loadFromLocalStorage';
import save from '../saveToLocalStorage';

function saveChanges(group, bill, editedBill, totalSum) {
  const savedGroups = load('savedGroups');
  const currentGroup = load('currentGroup');

  // Set edited values as new values
  bill.details.forEach((user, index) => {
    user.paid = Object.values(editedBill)[index].toFixed(2);
  });
  bill.total = Number(totalSum);

  // Update old bill with the edited bill
  const billIndex = group.bills
    .findIndex((obj) => obj.description === bill.description);
  currentGroup.bills[billIndex] = bill;

  // Update group data to localStorage
  const groupIndex = savedGroups
    .findIndex((obj) => obj.groupName === group.groupName);
  save('currentGroup', currentGroup);

  savedGroups[groupIndex] = currentGroup;
  save('savedGroups', savedGroups);
  return true;
}

export default saveChanges;
