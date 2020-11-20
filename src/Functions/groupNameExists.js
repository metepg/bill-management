/**
 * Check if group name already exists in localStorage
 * @param {string} groupName
 * @param {Array} groups - Array of groups saved to localStorage
 */
function groupNameExists(groupName, groups) {
  return groups
    .some((group) => group.groupName.toLowerCase() === groupName.toLowerCase());
}

export default groupNameExists;
