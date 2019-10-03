import React from 'react';
// import logo from '../logo.svg';
import './App.css';

import DataFromServer from '../components/dataFromServer/DataFromServer';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
      <DataFromServer />
    </div>
  );
}

export default App;
