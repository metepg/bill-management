// Save data with key/value pairs to localStorage
export default (key, value) => localStorage.setItem(key, JSON.stringify(value));
