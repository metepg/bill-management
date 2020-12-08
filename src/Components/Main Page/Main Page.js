import React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import New from './New/New';
import Load from './Load/Load';

function MainPage(appProps) {
  const { tab, setTab, changePage } = appProps;
  return (
    <Tabs
      transition={false}
      id="controlled"
      activeKey={tab}
      onSelect={(k) => setTab(k)}
    >
      <Tab eventKey="new" title="New">
        <New changePage={changePage} />
      </Tab>
      <Tab eventKey="load" title="Load">
        <Load changePage={changePage} />
      </Tab>
    </Tabs>
  );
}

export default MainPage;
