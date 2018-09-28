// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// styles
import './App.css';
// primary components
import Appnav from './Appnav';
import Navbar from './Navbar';
import Article from './Article';
import Sidenav from './Sidenav';

class App extends Component {
  static propTypes = {
    app: PropTypes.object.isRequired,
  };

  render() {
    const {menu, article, fetchArticle} = this.props.app;
    const {id, title, anchors} = article;
    const {ui, toggleSidenav, toggleAppnav} = this.props.app;
    const {sidenavOn, appnavOn} = ui;
    return (
      <div className="App">
        <Appnav trigger={appnavOn} />
        <Navbar title={title} anchors={anchors}
          onSidenavToggle={toggleSidenav} onAppnavClick={toggleAppnav}
        />
        <Article article={article} />
        <Sidenav 
          toggled={sidenavOn} onToggle={toggleSidenav}
          menu={menu} selected={id} onSelect={fetchArticle} 
        />
      </div>
    );
  }
}

export default observer(App);
