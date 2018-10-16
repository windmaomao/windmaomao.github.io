import React from 'react';
import {inject, observer} from 'mobx-react';
import logo from './logo.svg';
import './App.css';

const App = ({store}) => {
  const {questions} = store;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          {questions.map(todo => (
            <span>{todo.text} = {todo.answer}</span>
          ))}
        </p>
      </header>
    </div>
  );
}

export default inject('store')(observer(App));
