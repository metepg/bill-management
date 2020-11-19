// Check if group name already exists in localStorage
function groupNameExists(groupName) {
  const groups = JSON.parse(localStorage.getItem('savedGroups'));
  const checkGroupName = (group) => group.groupName === groupName;
  return groups.some(checkGroupName);
}

export default groupNameExists;
