import React from 'react';
import {inject, observer} from 'mobx-react';
import logo from './logo.svg';
import './App.css';

const App = ({store}) => {
  const {todos, questions} = store;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {questions.map(todo => (
            <li>{todo.text} = {todo.answer}</li>
          ))}
        </ul>
      </header>
    </div>
  );
}

export default inject('store')(observer(App));
