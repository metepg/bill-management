import React from 'react';
import Table from 'react-bootstrap/Table';
import Chart from './Chart';
import load from '../../../Functions/loadFromLocalStorage';
import balance from '../../../Functions/Balance/balance';
import totalSum from '../../../Functions/totalSum';

function Balance() {
  const { groupName, users, bills } = load('currentGroup');
  const { getBalance } = balance;

  // Set correct prefix for the balance
  // (+) for positive (-) for negative
  const prefix = (userBalance) => (userBalance >= 0
    ? `+${userBalance}`
    : `${userBalance}`);

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
      <h2 style={{ paddingTop: '10%' }}>{groupName}</h2>
      <Table responsive striped bordered hover size="sm">
        <thead>
          <tr>
            <th>Name</th>
            <th>Balance</th>
          </tr>
        </thead>
        <tbody>{userFields}</tbody>
      </Table>
      <Chart
        totalValue={totalSum(bills)}
        users={users}
        bills={bills}
      />
      <i><h4>{`Total: ${totalSum(bills).toFixed(2)} €`}</h4></i>
    </>
  );
}

export default Balance;
