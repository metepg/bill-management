import React, { useRef } from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import saveBill from '../../../../Functions/AddBill/saveBill';

function AddBillForm(AddBillProps) {
  const {
    userNames,
    saveValue,
    totalSum,
    bills,
    setBill,
  } = AddBillProps;

  const formRef = useRef();
  const buttonRef = useRef();

  // Create input fields according to usernames
  function getInputFields(users) {
    return users.map((name) => (
      <React.Fragment key={name}>
        <Form.Label>
          {name}
          <Form.Control
            onBlur={(e) => saveValue(e.target)}
            onFocus={(e) => { e.target.value = ''; }}
            required
            name={name}
            type="number"
            step="0.01"
            placeholder="0.00"
            onKeyDown={(e) => (e.key === 'Enter'
              ? e.preventDefault()
              : null)}
          />
        </Form.Label>
        <br />
      </React.Fragment>
    ));
  }

  return (
    <Form
      ref={formRef}
      onSubmit={(e) => {
        saveBill(e, buttonRef)
          ? formRef.current.reset()
          : alert('Something went wrong!');
        buttonRef.current.disabled = false;
        setBill(bills
          ? bills.length
          : 0);
      }}
    >
      <Form.Label
        style={{ fontSize: '1.5rem', marginBottom: '1rem' }}
        onKeyDown={(e) => (e.key === 'Enter'
          ? e.preventDefault()
          : null)}
      >
        Title
        <Form.Control
          type="text"
          name="description"
          required
          placeholder="Bill title"
          onKeyDown={(e) => (e.key === 'Enter'
            ? e.preventDefault()
            : null)}
        />
      </Form.Label>
      <Form.Group>
        {getInputFields(userNames)}
      </Form.Group>
      <Form.Group controlId="totalSum">
        <Form.Label>
          Total sum:
          <Form.Control
            type="number"
            name="total"
            step="0.01"
            placeholder="0.00"
            ref={totalSum}
            tabIndex={-1}
            readOnly
          />
        </Form.Label>
      </Form.Group>
      <br />
      <Button variant="primary" type="submit" ref={buttonRef}>
        Submit
      </Button>
    </Form>
  );
}
export default AddBillForm;
