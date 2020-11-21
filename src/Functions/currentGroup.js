import load from './loadFromLocalStorage';
/**
 * From localStorage:
 * Get current groups data matching the group name
 * @param {string} name - Group name to match
 * @returns {Object} - Eg. { groupName: 'Meters', userNames: ['John','Mike','Helen'] }
 */
function currentGroup(name) {
  const groups = load('savedGroups');
  return groups.find((group) => group.groupName === name);
}

export default currentGroup;
