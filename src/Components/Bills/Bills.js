import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import AddBill from './AddBill/AddBill';
import './style.css';

function Bills() {
  const [tab, setTab] = useState('addBill');
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
        <h1>ShowBill</h1>
      </Tab>
    </Tabs>
  );
}

export default Bills;
