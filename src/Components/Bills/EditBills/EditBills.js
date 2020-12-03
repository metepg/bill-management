import React, { useRef } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import saveChanges from '../../../Functions/EditBill/saveChanges';

function EditBills(showBillProps) {
  const { currentGroup, currentBill, editBill } = showBillProps;
  const totalSum = useRef();
  // For Discard button onClick
  function stopEditing() {
    // eslint-disable-next-line no-restricted-globals
    if (confirm('Stop editing and discard changes?')) editBill();
  }

  // Create object from bill details
  let usersPaid = {};
  currentBill.details.forEach((user) => {
    usersPaid[user.name] = Number(user.paid);
  });
  // Handle submit
  function handleEdit(e) {
    e.preventDefault();
    if (saveChanges(currentGroup, currentBill, usersPaid, totalSum.current.value)) {
      alert('Changes saved!');
      editBill();
    } else {
      alert('Something went wrong!');
    }
  }

  // Return value to have 2 decimals
  function updateField(e) {
    e.value = Number(e.value).toFixed(2);
    return e.value;
  }

  // Handle user inputs
  function saveValue(e) {
    const userPaid = Number(updateField(e));
    // Save user input to correct username
    usersPaid = {
      ...usersPaid,
      [e.name]: userPaid,
    };

    // Calulate total sum value from user inputs
    totalSum.current.value = Object.values(usersPaid)
      .reduce((a, b) => a + b)
      .toFixed(2) || 0;
  }

  return (
    <>
      <Form
        onSubmit={(e) => handleEdit(e)}
        style={{ margin: '1rem 6rem' }}
      >
        {currentBill.details
          .map((user, index) => (
            <React.Fragment key={`${user.name}${index * 1}`}>
              <Form.Group>
                <Form.Label>{user.name}</Form.Label>
                <Form.Control
                  onBlur={(e) => saveValue(e.target)}
                  onFocus={(e) => { e.target.value = ''; }}
                  required
                  name={user.name}
                  type="number"
                  step="0.01"
                  placeholder="0.00"
                  defaultValue={user.paid}
                />
              </Form.Group>
            </React.Fragment>
          ))}
        <Form.Label>Total</Form.Label>
        <Form.Control
          type="number"
          name="total"
          step="0.01"
          placeholder="0.00"
          ref={totalSum}
          tabIndex={-1}
          readOnly
          defaultValue={currentBill.total.toFixed(2)}
        />
        <Button type="submit" variant="primary">Save</Button>
        <Button
          type="reset"
          variant="danger"
          onClick={() => stopEditing()}
        >
          Discard
        </Button>
      </Form>
    </>
  );
}

export default React.memo(EditBills);
