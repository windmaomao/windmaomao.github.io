import * as React from 'react';
import Header, { MenuProp } from './Header';
import Slider from './Slider';
import Content from './Content';
import './App.css';

class App extends React.Component {
  menus: MenuProp[] = [
    { title: 'Books', items: ['index', 'react-up-running', 'pay-zero-taxes'] },
    { title: 'Blogs', items: [] },
    { title: 'Financial', items: [] },
  ];

  render() {
    return (
      <div className="App">
        <Slider />
        <Header menus={this.menus} />
        <Content />
      </div>
    );
  }
}

export default App;
