import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Add from './AddBill/AddBill';
import Show from './ShowBills/ShowBills';
import load from '../../Functions/loadFromLocalStorage';
import './style.css';

function Bills() {
  const [tab, setTab] = useState('addBill');
  const currentGroup = load('currentGroup');
  const [editMode, setEditMode] = useState(false);

  function editBill() {
    setEditMode(!editMode);
  }
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
        <Show
          currentGroup={currentGroup}
          editBill={editBill}
          editMode={editMode}
        />
      </Tab>
    </Tabs>
  );
}

export default Bills;
