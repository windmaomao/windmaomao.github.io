// third party
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// styles
import './App.css';
// primary components
import Appnav from './Appnav';
import Navbar from './Navbar';
import Article from './Article';
import Sidenav from './Sidenav';

const App = (props) => {
  const {menu, article, fetchArticle} = props.app;
  const {id, title, anchors} = article;
  const {ui, toggleSidenav, toggleAppnav} = props.app;
  const {sidenavOn, appnavOn} = ui;
  return (
    <div className="App">
      <Appnav trigger={appnavOn} />
      <Navbar title={title} anchors={anchors} onSidenavToggle={toggleSidenav} onAppnavClick={toggleAppnav} />
      <Article article={article} />
      <Sidenav toggled={sidenavOn} onToggle={toggleSidenav} menu={menu} selected={id} onSelect={fetchArticle} />
    </div>
  );
};

App.propTypes = {
  app: PropTypes.object.isRequired,
};

export default observer(App);
