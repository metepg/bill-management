import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import load from '../../../Functions/loadFromLocalStorage';
import './style.css';

function AddBill() {
  const { users } = load('currentGroup');

  // Total sum element
  const totalSum = useRef(0);

  // Set usernames array values as keys in object
  let usersPaid = {};
  users.forEach((key) => {
    usersPaid[key] = 0;
  });

  // Handle user inputs
  function saveValue(e) {
    // Set input field value with 2 decimals
    // Save user input to correct username
    const input = Number(e.value).toFixed(2);
    usersPaid = {
      ...usersPaid,
      [e.name]: Number(input),
    };

    // Calulate total sum value from user inputs
    totalSum.current.value = Object.values(usersPaid)
      .reduce((a, b) => a + b)
      .toFixed(2);
  }

  // Create input fields according to usernames
  const userNames = users.map((name) => (
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
  return (
    <section className="add-bill-controller">
      <h1 style={{ marginBottom: '1rem' }}>Add new bill</h1>
      <Form>
        <Form.Group className controlId="usersPaid">
          {userNames}
        </Form.Group>
        <Form.Group controlId="totalSum">
          <Form.Label>Total sum:</Form.Label>
          <Form.Control
            type="number"
            step="0.01"
            placeholder="0.00"
            ref={totalSum}
            disabled
          />
        </Form.Group>
        <Form.Label style={{ marginBottom: '4rem' }}>
          Even shares?
          <input
            style={{
              marginLeft: '0.5rem',
              marginRight: '0.4rem',
            }}
            className="toggle"
            type="checkbox"
          />
        </Form.Label>
        <br />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </section>
  );
}

export default AddBill;
