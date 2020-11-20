// Save data with key/value pairs to localStorage
const save = (key, value) => localStorage.setItem(key, JSON.stringify(value));

export default save;
