import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>
          <code>Github</code> and React JS.
        </h1>
        <p className='App-small'>&mdash; by <a
          className="App-link"
          href="https://shanishashidharan.co.in/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >Shani Shashidharan</a></p>
        <p><a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a></p>
      </header>
    </div>
  );
}

export default App;
