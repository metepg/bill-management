import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import New from './Components/New/New';
import Load from './Components/Load/Load';
import Bills from './Components/Bills/Bills';
import Group from './Components/Group/Group';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [page, setPage] = useState('main');
  const [tab, setTab] = useState('new');

  function changePage(goTo, active) {
    setPage(goTo);
    setTab(active);
  }

  return (
    <main className="app-container">
      {page === 'main' ? (
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
      ) : (
        <Tabs
          transition={false}
          id="controlled"
          activeKey={tab}
          onSelect={(k) => setTab(k)}
        >
          <Tab eventKey="bills" title="Bills">
            <Bills />
          </Tab>
          <Tab eventKey="group" title="Group">
            <Group />
          </Tab>
          <Tab eventKey="exit" title="Exit">
            <button
              type="button"
              onClick={() => changePage('main', 'new')}
              style={{ marginTop: '5rem', fontSize: '2rem' }}
            >
              Exit
            </button>
          </Tab>
        </Tabs>
      )}
    </main>
  );
}

export default App;
