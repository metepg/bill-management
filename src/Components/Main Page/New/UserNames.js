import React from 'react';
import Form from 'react-bootstrap/Form';

function UserNames(props1) {
  const { users } = props1;

  const inputs = [];

  for (let i = 0; i < users; i += 1) {
    inputs.push(
      <React.Fragment key={`User ${i}`}>
        <Form.Control
          required
          type="text"
          placeholder={`User ${i + 1}`}
          name={`User ${i}`}
          onFocus={(e) => { e.target.value = ''; }}
        />
      </React.Fragment>,
    );
  }

  return (
    <>
      {inputs}
    </>
  );
}

export default UserNames;
