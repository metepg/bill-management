/**
 * Save data with key/value pairs to localStorage
 * @param {string} key
 * @param {Array} value - Group/s data as array
 */
export default (key, value) => localStorage.setItem(key, JSON.stringify(value));
