import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import Users from './Users/Users';
import Balance from './Balance/Balance';

function Group() {
  const [tab, setTab] = useState('balance');
  return (
    <>
      <Tabs
        transition={false}
        id="controlledGroup"
        activeKey={tab}
        onSelect={(k) => setTab(k)}
        style={{
          margin: '0.5rem 3rem',
          fontSize: '1rem',
          borderBottom: 'none',
          marginTop: '0.5rem',
        }}
      >
        <Tab eventKey="balance" title="Balance">
          <Balance />
        </Tab>
        <Tab eventKey="users" title="Users">
          <Users />
        </Tab>
      </Tabs>
    </>
  );
}

export default Group;
