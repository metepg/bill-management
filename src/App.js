import React, { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import New from './Components/New/New';
import Load from './Components/Load/Load';
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
    <header className="app-container">
      {page === 'main' ? (
        <Tabs
          id="controlled"
          activeKey={tab}
          onSelect={(k) => setTab(k)}
        >
          <Tab eventKey="new" title="New">
            <New changePage={changePage} />
          </Tab>
          <Tab eventKey="load" title="Load">
            <Load />
          </Tab>
        </Tabs>
      )
        : (
          <Tabs
            id="controlled"
            activeKey={tab}
            onSelect={(k) => setTab(k)}
          >
            <Tab eventKey="addBill" title="addBill" />
            <Tab eventKey="showBills" title="showBills" />
            <Tab eventKey="exit" title="exit">
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

    </header>
  );
}

export default App;
