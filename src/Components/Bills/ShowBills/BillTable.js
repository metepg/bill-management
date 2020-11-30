import React from 'react';
import Table from 'react-bootstrap/Table';

function BillTable(showBillProps) {
  const { currentBill } = showBillProps;

  function valueChange(paid) {
    const userPaid = paid;
    const { total } = currentBill;
    const participants = currentBill.details.length;
    return (userPaid - total / participants).toFixed(2);
  }

  const billData = currentBill ? currentBill
    .details
    .map((user, index) => (
      <React.Fragment key={`${user.name}${index * 1}`}>
        <tr>
          <td>{user.name}</td>
          <td>{`${user.paid} €`}</td>
          <td>{`${valueChange(user.paid)} €`}</td>
        </tr>
      </React.Fragment>
    )) : null;

  return (
    <>
      {currentBill
        ? (
          <>
            <h2>{currentBill.description}</h2>
            <Table responsive striped bordered hover size="sm">
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Paid</th>
                  <th>Change</th>
                </tr>
              </thead>
              <tbody>
                {billData}
              </tbody>
            </Table>
            <p style={{ textAlign: 'center' }}>
              {`Total ${currentBill.total} €`}
            </p>
          </>
        )
        : null}
    </>
  );
}

export default React.memo(BillTable);
