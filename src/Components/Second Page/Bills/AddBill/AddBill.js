import React, { useRef } from 'react';
import Form from './AddBillForm';
import load from '../../../../Functions/loadFromLocalStorage';
import './style.css';

// TODO:
// Fix functions updatefield and saveValue

function AddBill() {
  const { users } = load('currentGroup');
  const totalSum = useRef(0);

  // Create object
  // Set usernames as keys
  let usersPaid = {};
  users.forEach((key) => {
    usersPaid[key] = 0;
  });

  // Return value to have 2 decimals
  function updateField(e) {
    e.value = parseFloat(e.value).toFixed(2);
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
    totalSum.current.value = Number(Object.values(usersPaid)
      .reduce((a, b) => a + b))
      .toFixed(2);
  }

  return (
    <section className="add-bill-controller">
      <Form
        saveValue={saveValue}
        userNames={users}
        usersPaid={usersPaid}
        totalSum={totalSum}
      />
    </section>
  );
}

export default React.memo(AddBill);
