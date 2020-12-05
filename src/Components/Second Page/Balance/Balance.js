import React from 'react';
import Table from 'react-bootstrap/Table';
import load from '../../../Functions/loadFromLocalStorage';
import getBalance from '../../../Functions/Balance/getBalance';

function Balance() {
  const { groupName, users, bills } = load('currentGroup');

  // Set correct prefix for the balance
  // (+) for positive (-) for negative
  const prefix = (balance) => (balance >= 0
    ? `+${balance}`
    : `${balance}`);

  const userFields = users.map((user, index) => (
    <React.Fragment key={`${user.name}${index * 1}`}>
      <tr>
        <td>{user}</td>
        <td style={{
          color: getBalance(bills, users, users[index]) >= 0
            ? 'green'
            : 'red',
        }}
        >
          {`${prefix(getBalance(bills, users, users[index]))} €`}
        </td>
      </tr>
    </React.Fragment>
  ));

  return (
    <>
      <h2>{groupName}</h2>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{userFields}</tbody>
      </Table>
    </>
  );
}

export default Balance;
