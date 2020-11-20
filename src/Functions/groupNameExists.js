import loadFromLocalStorage from './loadFromLocalStorage';

// Check if group name already exists in localStorage
function groupNameExists(groupName) {
  const groups = loadFromLocalStorage('savedGroups');
  const checkGroupName = (group) => group.groupName.toLowerCase() === groupName.toLowerCase();
  return groups.some(checkGroupName);
}

export default groupNameExists;
