import groupNameExists from './groupNameExists';
import load from './loadFromLocalStorage';
import save from './saveToLocalStorage';

// TODO:
// Change error handling if group name exists
// Validate fields

// Validate form
// Save group values to localStorage
function validate(values) {
  const groupData = values;
  const { groupName } = groupData;

  // Delete groupName property so object has only usernames as properties
  delete groupData.groupName;

  // Make array from usernames
  // Make object from group name and usernames
  const users = Object.values(values);
  const group = { groupName, users };

  // Get groups from localStorage
  const prevGroups = load('savedGroups');

  // If no groups saved yet save group as new array
  if (!prevGroups) {
    const firstGroup = [group];
    save('savedGroups', firstGroup);
    save('currentGroup', firstGroup);
    return true;
  }

  // No duplicate group names
  if (groupNameExists(groupName)) {
    alert('Group name already exists!');
    return false;
  }

  // Add new group to previously created groups array
  // Save current group to localStorage
  prevGroups.push(group);
  save('savedGroups', prevGroups);
  save('currentGroup', group);
  return true;
}

export default validate;
