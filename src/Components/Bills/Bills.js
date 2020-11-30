import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddBill from './AddBill/AddBill';
import ShowBills from './ShowBills/ShowBills';
import load from '../../Functions/loadFromLocalStorage';
import './style.css';

function Bills() {
  const [tab, setTab] = useState('addBill');
  const currentGroup = load('currentGroup');
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
        <AddBill />
      </Tab>
      <Tab eventKey="showBill" title="Show bills">
        <ShowBills currentGroup={currentGroup} />
      </Tab>
    </Tabs>
  );
}

export default Bills;
