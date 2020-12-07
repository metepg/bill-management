import React from 'react';
import Table from './BillTable';

function ShowBills(billsProps) {
  const {
    currentBill, editBill, setBill, bills,
  } = billsProps;

  const billElements = bills
    ? bills.map((bill, index) => (
      <React.Fragment key={`${index * 1}${bill.description}`}>
        <option value={index}>{`${bill.description} (${(bill.total).toFixed(2)} €)`}</option>
      </React.Fragment>
    ))
    : null;

  return (
    <>
      <select
        style={{ textAlign: 'center' }}
        value={currentBill
          ? bills.findIndex((bill) => bill.description === currentBill.description)
          : ''}
        onChange={(e) => setBill(e.target.value)}
      >
        <option hidden>Select</option>
        {billElements}
      </select>
      <Table
        currentBill={currentBill}
        editBill={editBill}
      />
    </>
  );
}

export default ShowBills;
