import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

function AddBillForm(AddBillProps) {
  const {
    userNames,
    saveValue,
    saveBill,
    totalSum,
  } = AddBillProps;

  // Create input fields according to usernames
  function getInputFields(users) {
    return users.map((name) => (
      <React.Fragment key={name}>
        <Form.Label>{name}</Form.Label>
        <Form.Control
          onBlur={(e) => saveValue(e.target)}
          required
          name={name}
          type="number"
          step="0.01"
          placeholder="0.00"
        />
        <br />
      </React.Fragment>
    ));
  }

  return (
    <Form onSubmit={saveBill}>
      <Form.Label
        style={{ fontSize: '1.5rem', marginBottom: '1rem' }}
      >
        Description
        <Form.Control
          type="text"
          name="description"
          required
          placeholder="Description/tag"
        />
      </Form.Label>
      <Form.Group controlId="usersPaid">
        {getInputFields(userNames)}
      </Form.Group>
      <Form.Group controlId="totalSum">
        <Form.Label>Total sum:</Form.Label>
        <Form.Control
          type="number"
          name="total"
          step="0.01"
          placeholder="0.00"
          ref={totalSum}
          tabIndex={-1}
          readOnly
        />
      </Form.Group>
      <Form.Label style={{ marginBottom: '1rem' }}>
        Even shares?
        <input
          name="evenShares"
          style={{
            marginLeft: '0.5rem',
            marginRight: '0.4rem',
          }}
          className="toggle"
          type="checkbox"
          defaultChecked
        />
      </Form.Label>
      <br />

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
}

export default AddBillForm;
