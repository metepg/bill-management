/**
 * Return object from formData Eg.
 * {
 * groupName: 'Meters',
 * userNames: ['1','2','3']
 * }
 *
 * @param {Object} formData - Contains group name and usernames
 */

function handleFormData(formData) {
  const groupData = formData;
  const { groupName } = groupData;

  // Delete groupName property so object has only usernames as properties
  delete groupData.groupName;

  // Make array from usernames
  // Return object from group name and usernames
  const users = Object.values(formData);
  return { groupName, users };
}

export default handleFormData;
