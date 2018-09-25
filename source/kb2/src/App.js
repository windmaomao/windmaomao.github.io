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

  constructor(props) {
    super(props);
    this.state = { sidenavOn: false };
  }

  toggle = () => {
    const sidenavOn = !this.state.sidenavOn;
    this.setState({ sidenavOn });
  }

  render() {
    const {menu, articleId} = this.props;
    const {sidenavOn} = this.state;
    return (
      <div className="App">
        <Navbar onSidenavToggle={this.toggle} />
        <div className="section">
          <Article articleId={articleId} />
        </div>
        <Sidenav menu={menu} selected={articleId} toggled={sidenavOn} />
      </div>
    );
  }
}

export default App;
