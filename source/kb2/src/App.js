// third party
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// styles
import './App.css';
// primary components
import Spinner from './Spinner';
import Appnav from './Appnav';
import Navbar from './Navbar';
import Toc from './Toc';
import Article from './Article';
import Sidenav from './Sidenav';
import Credit from './Credit';
// services
import {footerCreditMsg} from './constant';

const App = (props) => {
  const {status, menu, article, fetchArticle, apps, appId} = props.app;
  const {id, title, anchors} = article;
  const {ui, toggleSidenav, toggleAppnav, toggleToc} = props.app;
  const {sidenavOn, appnavOn, tocOn} = ui;
  const {loading} = status;
  return (
    <div className="app">
      <Spinner loading={loading} />
      <Appnav toggled={appnavOn} apps={apps} appId={appId} onClose={toggleAppnav} />
      <Navbar title={title} onTocToggle={toggleToc} onAppnavToggle={toggleAppnav} />
      <Toc toggled={tocOn} anchors={anchors} onClose={toggleToc} />
      <Article article={article} onSidenavToggle={toggleSidenav} />
      <Sidenav toggled={sidenavOn} onToggle={toggleSidenav} menu={menu} selected={id} onSelect={fetchArticle} />
      {!loading && <Credit message={footerCreditMsg} />}
    </div>
  );
};

App.propTypes = {
  app: PropTypes.object.isRequired,
};

export default observer(App);
