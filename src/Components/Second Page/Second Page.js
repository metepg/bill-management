import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import Bills from './Bills/Bills';
import Balance from './Balance/Balance';
import Edit from './Bills/EditBills/EditBills';

function SecondPage(appProps) {
  const {
    tab, setTab, changePage, setBill, currentBill, bills, currentGroup,
  } = appProps;

  const [editMode, setEditMode] = useState(false);
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
            id="controlled"
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
