// Return parsed data from localStorage
const load = (key) => JSON.parse(localStorage.getItem(key));

export default load;
