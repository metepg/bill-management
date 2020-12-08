import React from 'react';
import load from '../../../Functions/loadFromLocalStorage';
import currentGroup from '../../../Functions/currentGroup';
import save from '../../../Functions/saveToLocalStorage';

function Load(appProps) {
  const { changePage } = appProps;
  let groups = load('savedGroups');

  // Save selected group as currentGroup
  // Go to next page
  function loadGroup(groupName) {
    save('currentGroup', currentGroup(groupName));
    changePage('page2', 'bills');
  }

  // Render group names as buttons
  if (!groups) {
    groups = <h1>No groups found!</h1>;
  } else {
    groups = groups.map((group) => (
      <button
        onClick={() => loadGroup(group.groupName)}
        key={group.groupName}
        type="button"
      >
        {group.groupName}
      </button>
    ));
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        margin: '5rem 3rem',
      }}
    >
      {groups}
    </div>
  );
}

export default Load;
