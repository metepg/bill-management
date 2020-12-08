import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Bills from './Bills/Bills';
import Balance from './Balance/Balance';
import Edit from './Bills/EditBills/EditBills';
import load from '../../Functions/loadFromLocalStorage';

function SecondPage(appProps) {
  const {
    tab, setTab, changePage,
  } = appProps;

  const [currentBill, setCurrentBill] = useState();
  const [editMode, setEditMode] = useState(false);
  const currentGroup = load('currentGroup');
  let { bills } = currentGroup;

  function setBill(index) {
    bills = load('currentGroup').bills;
    index
      ? setCurrentBill(bills[index])
      : setCurrentBill('');
  }

  // When user edits bill
  // Disable everything else
  function editBill() {
    setEditMode(!editMode);
  }
  return (
    <>
      {editMode
        ? (
          <Edit
            editBill={editBill}
            currentBill={currentBill}
            currentGroup={currentGroup}
          />
        )
        : (
          <Tabs
            transition={false}
            activeKey={tab}
            onSelect={(k) => setTab(k)}
          >
            <Tab eventKey="bills" title="Bills">
              <Bills
                editBill={editBill}
                setBill={setBill}
                currentBill={currentBill}
                bills={bills}
              />
            </Tab>
            <Tab eventKey="balance" title="Balance">
              <Balance />
            </Tab>
            <Tab eventKey="exit" title="Exit">
              <button
                type="button"
                onClick={() => {
                  changePage('main', 'new');
                  setBill('');
                }}
                style={{ marginTop: '5rem', fontSize: '2rem' }}
              >
                Exit
              </button>
            </Tab>
          </Tabs>
        )}
    </>
  );
}

export default SecondPage;
