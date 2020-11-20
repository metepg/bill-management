import load from './loadFromLocalStorage';
/**
 * From localStorage:
 * Get current groups data matching the group name
 * @param {string} name - Group name to match
 */
function currentGroup(name) {
  const groups = load('savedGroups');
  return groups.filter((group) => group.groupName === name);
}

export default currentGroup;
