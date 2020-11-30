/**
 * @param {Object} formData - Contains group name and usernames
 * @returns {Object} - { groupName: 'Meters', userNames: ['John','Mike','Helen'] }
 */

function handleFormData(formData) {
  const groupData = formData;
  const { groupName } = groupData;

  // Delete groupName property so object has only usernames as values
  delete groupData.groupName;

  // Make array from usernames
  // Return object from group name and usernames
  const users = Object.values(formData);
  return { groupName, users };
}

export default handleFormData;
