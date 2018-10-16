import React from 'react';
import {inject} from 'mobx-react';
import logo from './logo.svg';
import './App.css';

const App = ({store}) => {
  // const {todos} = store;
  console.log(store);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
        </ul>
      </header>
    </div>
  );
}

export default inject('store')(App);
