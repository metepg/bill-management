import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Users from './UserNames';
import validate from '../../../Functions/validate';
import './style.css';

function New(appProps) {
  const { changePage } = appProps;
  const [participants, setParticipants] = useState(2);

  function formSubmit(e) {
    e.preventDefault();

    // Get form values as object
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());

    // If values are valid go to next page
    if (validate(formDataObj)) changePage('page2', 'bills');
  }

  return (
    <>
      <Form onSubmit={formSubmit}>
        <Form.Group controlId="groupName">
          <Form.Label>Group name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Max. 20 characters"
            name="groupName"
            required
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Users</Form.Label>
          <Form.Control as="select" onChange={(e) => setParticipants(e.target.value)}>
            <option value={2}>2</option>
            <option value={3}>3</option>
            <option value={4}>4</option>
            <option value={5}>5</option>
            <option value={6}>6</option>
            <option value={7}>7</option>
            <option value={8}>8</option>
          </Form.Control>
        </Form.Group>
        <Form.Group controlId="users">
          <Form.Label>Users</Form.Label>
          <Users users={participants} />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default New;
