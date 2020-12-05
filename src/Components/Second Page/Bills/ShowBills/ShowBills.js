import React from 'react';
import Table from './BillTable';

function ShowBills(billsProps) {
  const {
    currentBill, editBill, billElements, setBill,
  } = billsProps;

  return (
    <>
      <select style={{ textAlign: 'center' }} onChange={(e) => setBill(e.target.value)}>
        <option value="" selected={!currentBill} disabled hidden>Select</option>
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
