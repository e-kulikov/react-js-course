import React from 'react';

import SimpleFunctionalComponent from './components/SimpleFunctionalComponent';
import SimpleClassComponent from './components/SimplmeClassComponent';
import Counter from './components/Counter';
import ReduxCounter from './components/ReduxCounter';

import logo from './logo.svg';
import './App.css';

const App = () => (
  <div className="App">
    <header className="App-header">
      <img src={logo} className="App-logo" alt="logo" />
      <p>Edit code and save to reload.</p>
      <SimpleFunctionalComponent value="some string value" />
      <SimpleClassComponent value="another string value" />
      <Counter />
      <ReduxCounter />
      <a
        className="App-link"
        href="https://reactjs.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        Learn React
      </a>
    </header>
  </div>
);

export default App;
