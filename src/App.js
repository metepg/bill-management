import React, { useState } from 'react';
import MainPage from './Components/Main Page/Main Page';
import SecondPage from './Components/Second Page/Second Page';
import load from './Functions/loadFromLocalStorage';
import Edit from './Components/Second Page/Bills/EditBills/EditBills';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  const [page, setPage] = useState('main');
  const [tab, setTab] = useState('new');
  const [editMode, setEditMode] = useState(false);
  const [currentBill, setCurrentBill] = useState();
  const currentGroup = load('currentGroup');
  const { bills } = currentGroup;

  function changePage(goTo, active) {
    setPage(goTo);
    setTab(active);
  }

  function editBill() {
    setEditMode(!editMode);
  }

  function setBill(index) {
    index
      ? setCurrentBill(bills[index])
      : setCurrentBill('');
  }

  return (
    <main className="app-container">
      {editMode
        ? (
          <Edit
            editBill={editBill}
            currentBill={currentBill}
            currentGroup={currentGroup}
          />
        )
        : (
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
                editBill={editBill}
                currentBill={currentBill}
                setBill={setBill}
              />
            )}
          </>
        )}

    </main>
  );
}

export default App;
