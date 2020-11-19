// TODO:
// Change error handling if group name exists

import groupNameExists from './groupNameExists';

// Save group values to localStorage
function saveToLocalStorage(values) {
  const groupData = values;
  const { groupName } = groupData;
  const prevGroups = localStorage.getItem('savedGroups');

  // Delete groupName property so object has only usernames as properties
  delete groupData.groupName;

  // Make array from usernames
  // Make object from group name and usernames
  const users = Object.values(values);
  const group = { groupName, users };

  // If no groups saved yet save group as new array
  if (!prevGroups) {
    const firstGroup = [group];
    localStorage.setItem('savedGroups', JSON.stringify(firstGroup));
    return true;
  }

  // No duplicate group names
  if (groupNameExists(groupName)) {
    alert('Group name already exists!');
    return false;
  }

  // Add new group to previously created groups array
  const savedGroups = JSON.parse(prevGroups);
  savedGroups.push(group);
  localStorage.setItem('savedGroups', JSON.stringify(savedGroups));
  return true;
}

export default saveToLocalStorage;
