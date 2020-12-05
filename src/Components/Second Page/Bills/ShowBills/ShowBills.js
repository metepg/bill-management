import React from 'react';
import Table from './BillTable';

function ShowBills(billsProps) {
  const {
    currentBill, editBill, billElements,
  } = billsProps;

  return (
    <>
      {billElements}
      <Table
        currentBill={currentBill}
        editBill={editBill}
      />
    </>
  );
}

export default ShowBills;
