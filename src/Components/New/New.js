import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
// import FormGroup from "react-bootstrap/FormGroup/";
import './style.css';

function New(appProps) {
  const { changePage } = appProps;

  function formSubmit(e) {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formDataObj = Object.fromEntries(formData.entries());
    console.log(formDataObj);
    console.log(formDataObj.groupName);
    changePage('page2', 'addBill');
  }

  return (
    <Form onSubmit={formSubmit}>
      <Form.Group controlId="groupName">
        <Form.Label>Group name</Form.Label>
        <Form.Control type="text" placeholder="The meters" name="groupName" defaultValue="The Meters" />
      </Form.Group>
      <Form.Group controlId="users">
        <Form.Label>Users</Form.Label>
        <Form.Control required type="text" placeholder="User 1" name="user1" defaultValue="eka nimi" />
        <Form.Control required type="text" placeholder="User 2" name="user2" defaultValue="toka nimi" />
        <Form.Control required type="text" placeholder="User 3" name="user3" defaultValue="kolmas nimi" />
      </Form.Group>
      <Button variant="primary" type="submit">Submit</Button>
    </Form>
  );
}

export default New;
