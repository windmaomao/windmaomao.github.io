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
    this.state = { 
      sidenavOn: true, 
      articleId: this.props.articleId 
    };
  }

  toggle = () => {
    const sidenavOn = !this.state.sidenavOn;
    this.setState({ sidenavOn });
  }

  switch = articleId => {
    if (articleId !== this.state.articleId) {
      this.setState({ articleId });
    }
  }

  render() {
    const {menu} = this.props;
    const {sidenavOn, articleId} = this.state;
    return (
      <div className="App">
        <Navbar onSidenavToggle={this.toggle} />
        <div className="section">
          <Article articleId={articleId} />
        </div>
        <Sidenav toggled={sidenavOn} menu={menu} selected={articleId} onSelect={this.switch} />
      </div>
    );
  }
}

export default App;
