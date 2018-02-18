import * as React from 'react';
import Header, { MenuProp } from './Header';
import './App.css';

class App extends React.Component {
  menus: MenuProp[] = [
    { title: 'Home' }
  ];

  render() {
    return (
      <div className="App">
        <Header menus={this.menus} />
      </div>
    );
  }
}

export default App;
