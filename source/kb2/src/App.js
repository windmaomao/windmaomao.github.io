// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import './App.css';
// primary components
import Navbar from './Navbar';
import Article from './Article';
import Sidenav from './Sidenav';

class App extends Component {
  static propTypes = {
    menu: PropTypes.array,
    articleId: PropTypes.string
  };

  render() {
    const {menu, articleId} = this.props;
    return (
      <div className="App">
        <Navbar />
        <div className="section">
          <Article articleId={articleId} />
        </div>
        <Sidenav menu={menu} selected={articleId} />
      </div>
    );
  }
}

export default App;
