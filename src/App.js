import React, { useEffect, useState } from 'react';
import MainPage from './Components/Main Page/Main Page';
import SecondPage from './Components/Second Page/Second Page';
import load from './Functions/loadFromLocalStorage';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [page, setPage] = useState('main');
  const [tab, setTab] = useState('new');
  const [currentBill, setCurrentBill] = useState();
  const currentGroup = load('currentGroup');
  let { bills } = currentGroup || [];

  useEffect(() => {
    currentGroup
      ? bills = currentGroup.bills
      : bills = [];
  }, [currentGroup]);

  function changePage(goTo, active) {
    setPage(goTo);
    setTab(active);
  }

  function setBill(index) {
    index
      ? setCurrentBill(bills[index])
      : setCurrentBill('');
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
            currentGroup={currentGroup}
            bills={bills}
            currentBill={currentBill}
            setBill={setBill}
          />
        )}
      </>

    </main>
  );
}

export default App;
