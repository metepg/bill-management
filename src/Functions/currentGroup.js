import load from './loadFromLocalStorage';

// Get current group data from localStorage based on name
function currentGroup(name) {
  const groups = load('savedGroups');
  if (!groups) {
    return false;
  }
  return groups.filter((group) => group.groupName === name);
}

export default currentGroup;
