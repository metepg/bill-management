import React, { useState } from 'react';
import Edit from '../EditBills/EditBills';
import Table from './BillTable';
import totalSum from '../../../../Functions/groupTotalSum';

function ShowBills(billsProps) {
  const { currentGroup, editBill, editMode } = billsProps;
  const { bills } = currentGroup;
  const [currentBill, setCurrentBill] = useState();

  const billElements = bills
    ? bills.map((bill, index) => (
      <React.Fragment key={`${index * 1}${bill.description}`}>
        <button
          type="button"
          onClick={() => setCurrentBill(bills[index])}
        >
          {bill.description}
        </button>
        <label htmlFor="bills">{`${bill.total} €`}</label>
        <br />
      </React.Fragment>
    ))
    : null;

  return (
    <>
      {bills
        ? (
          <>
            {editMode
              ? <h3>{`Editing ${currentBill.description}`}</h3>
              : (
                <>
                  {billElements}
                  <h4>
                    {`Total: ${totalSum(bills).toFixed(2)} €`}
                  </h4>
                  <hr />
                </>
              )}

            {editMode
              ? (
                <Edit
                  editBill={editBill}
                  currentBill={currentBill}
                  currentGroup={currentGroup}
                />
              )
              : <Table currentBill={currentBill} editBill={editBill} />}
          </>
        )
        : <h4>No bills saved</h4>}
    </>
  );
}

export default ShowBills;
