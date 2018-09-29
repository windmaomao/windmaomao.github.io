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
  const {menu, article, fetchArticle, apps, appId} = props.app;
  const {id, title} = article;
  const {ui, toggleSidenav, toggleAppnav, toggleToc} = props.app;
  const {sidenavOn, appnavOn, tocOn} = ui;
  return (
    <div className="App">
      <Appnav toggled={appnavOn} apps={apps} appId={appId} onClose={toggleAppnav} />
      <Navbar title={title} onTocToggle={toggleToc} onAppnavToggle={toggleAppnav} />
      <Article article={article} onSidenavToggle={toggleSidenav} tocOn={tocOn} />
      <Sidenav toggled={sidenavOn} onToggle={toggleSidenav} menu={menu} selected={id} onSelect={fetchArticle} />
    </div>
  );
};

App.propTypes = {
  app: PropTypes.object.isRequired,
};

export default observer(App);
