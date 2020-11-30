import React, { useState } from 'react';
import Table from './BillTable';
import totalSum from '../../../Functions/groupTotalSum';

function ShowBills(billsProps) {
  const { currentGroup } = billsProps;
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

  const total = bills
    ? (
      <h4>
        {`Total: ${totalSum(bills)} €`}
      </h4>
    )
    : null;
  return (
    <>
      {bills
        ? (
          <>
            {billElements}
            {total}
            <hr />
            <Table currentBill={currentBill} />
          </>
        )
        : <h4>No bills saved</h4>}
    </>
  );
}

export default ShowBills;
