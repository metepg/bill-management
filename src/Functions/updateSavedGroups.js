import load from './loadFromLocalStorage';
import save from './saveToLocalStorage';

// Update localStorage array
function replace(key, group) {
  const { groupName } = group;
  const groups = load(key);

  const findGroup = groups.findIndex((x) => x.groupName === groupName);
  groups[findGroup] = group;
  save(key, groups);
}

export default replace;
