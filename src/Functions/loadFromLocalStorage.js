/**
 * Return parsed data from localStorage
 * @param {string} key
 * @returns {Array} - Parsed array
 */
export default (key) => JSON.parse(localStorage.getItem(key));
