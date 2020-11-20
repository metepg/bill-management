import groupNameExists from './groupNameExists';
import load from './loadFromLocalStorage';
import save from './saveToLocalStorage';
import handleFormData from './handleFormData';

// TODO:
// Change error handling if group name exists
// Validate fields

// Validate form
// Save group values to localStorage
function validate(formData) {
  // Create group object from formData
  const newGroup = handleFormData(formData);

  // Get saved groups from localStorage
  const savedGroups = load('savedGroups');

  // If no groups saved yet save group as new array
  if (!savedGroups) {
    const firstGroup = [newGroup];
    save('savedGroups', firstGroup);
    save('currentGroup', firstGroup);
    return true;
  }

  // No duplicate group names
  if (groupNameExists(newGroup.groupName, savedGroups)) {
    alert('Group name already exists!');
    return false;
  }

  // Add new group to previously created groups array
  // Save current group to localStorage
  savedGroups.push(newGroup);
  save('savedGroups', savedGroups);
  save('currentGroup', newGroup);
  return true;
}

export default validate;
