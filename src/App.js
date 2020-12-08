import React, { useState } from 'react';
import MainPage from './Components/Main Page/Main Page';
import SecondPage from './Components/Second Page/Second Page';
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
      <>
        {page === 'main' ? (
          <MainPage
            tab={tab}
            setTab={setTab}
            changePage={changePage}
          />
        ) : (
          <SecondPage
            tab={tab}
            setTab={setTab}
            changePage={changePage}
          />
        )}
      </>
    </main>
  );
}

export default App;
