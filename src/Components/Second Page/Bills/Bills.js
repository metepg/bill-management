import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Add from './AddBill/AddBill';
import Show from './ShowBills/ShowBills';
import load from '../../../Functions/loadFromLocalStorage';
import './style.css';

function Bills(pageProps) {
  const { editBill, currentBill, setBill } = pageProps;
  const [tab, setTab] = useState('addBill');
  const currentGroup = load('currentGroup');
  const { bills } = currentGroup;

  const billElements = bills
    ? bills.map((bill, index) => (
      <React.Fragment key={`${index * 1}${bill.description}`}>
        <option value={index}>{`${bill.description} (${(bill.total).toFixed(2)} €)`}</option>
      </React.Fragment>
    ))
    : null;

  return (
    <Tabs
      transition={false}
      id="controlled"
      activeKey={tab}
      onSelect={(k) => setTab(k)}
      style={{
        margin: '0.5rem 3rem',
        fontSize: '1rem',
        borderBottom: 'none',
        marginTop: '0.5rem',
      }}
    >
      <Tab eventKey="addBill" title="Add bill">
        <Add />
      </Tab>
      <Tab eventKey="showBill" title="Show bills">
        { bills
          ? (
            <Show
              currentGroup={currentGroup}
              editBill={editBill}
              currentBill={currentBill}
              billElements={billElements}
              bills={bills}
              setBill={setBill}
            />
          )
          : <h4>No bills saved</h4>}

      </Tab>
    </Tabs>
  );
}

export default Bills;
