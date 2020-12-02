import React from 'react';
import Table from 'react-bootstrap/Table';

function BillTable(showBillProps) {
  const { currentBill, editBill } = showBillProps;

  // Return number of user paid more or less than needed
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
            <label
              style={{ fontSize: '2rem' }}
              htmlFor="billDescription"
            >
              {currentBill.description}

            </label>
            <br />
            <button
              onClick={() => editBill()}
              type="button"
              style={{
                fontSize: '0.9rem',
                color: 'black',
                all: 'unset',
                cursor: 'pointer',
              }}
            >
              <i className="far fa-edit" />
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
            <h4 style={{ textAlign: 'center' }}>
              {`Total ${currentBill.total} €`}
            </h4>
          </>
        )
        : null}
    </>
  );
}

export default React.memo(BillTable);
