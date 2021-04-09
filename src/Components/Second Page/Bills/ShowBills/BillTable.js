import React from 'react';
import Table from 'react-bootstrap/Table';

function BillTable(showBillProps) {
  const { currentBill, editBill } = showBillProps;

  const prefix = (amount) => (amount >= 0
    ? `+${amount}`
    : `${amount}`);

  // User balance
  function valueChange(paid) {
    const userPaid = paid;
    const { total } = currentBill;
    const participants = currentBill.details.length;
    return prefix((userPaid - total / participants).toFixed(2));
  }

  const billData = currentBill
    ? currentBill
      .details
      .map((user, index) => (
        <React.Fragment key={`${user.name}${index * 1}`}>
          <tr>
            <td>{user.name}</td>
            <td>{`${user.paid} €`}</td>
            <td
          // Green color if user paid more than needed
          // Red color if user paid less than needed
              style={{
                color: valueChange(user.paid) >= 0
                  ? 'green'
                  : 'red',
              }}
            >
              {`${valueChange(user.paid)} €`}

            </td>
          </tr>
        </React.Fragment>
      )) : null;

  return (
    <>
      {currentBill
        ? (
          <>

            <br />
            <h1>{currentBill.description}</h1>
            <button
              onClick={() => editBill()}
              type="button"
              style={{
                cursor: 'pointer',
                float: 'right',
                fontSize: '1.3rem',
                paddingRight: '1rem',
                margin: '5px',
              }}
            >
              Edit
            </button>
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
            <i>
              <h5 style={{ textAlign: 'center' }}>
                {`Bill amount: ${currentBill.total.toFixed(2)} €`}
              </h5>
            </i>
          </>
        )
        : null}
    </>
  );
}

export default BillTable;
