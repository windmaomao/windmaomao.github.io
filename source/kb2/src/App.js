// third party
import React from 'react';
import PropTypes from 'prop-types';
import {Provider, observer} from 'mobx-react';
import {css} from 'react-emotion';
// styles
import './App.css';
// primary components
import Spinner from './Spinner';
import Appnav from './Appnav';
import Navbar from './Navbar';
import Toc from './Toc';
import ArticleAction from './ArticleAction';
import Article from './Article';
import Sidenav from './Sidenav';
import Credit from './Credit';
// services
import {footerCreditMsg} from './constant';

const headerStyle = css`
  position: fixed;
  right: 1rem;
  top: 0.2rem;
  padding: 0.5rem 1rem 0;
  z-index: 999;
`;

const App = (props) => {
  const {status, menu, article, fetchArticle, apps, appId} = props.app;
  const {id, title, anchors} = article;
  const {ui, toggleSidenav, toggleAppnav, toggleToc, toggleLevel} = props.app;
  const {sidenavOn, appnavOn, tocOn} = ui;
  const {loading} = status;
  return (
    <Provider app={props.app}>
      <div className="app">
        <Spinner loading={loading} />
        <Appnav toggled={appnavOn} apps={apps} appId={appId} onClose={toggleAppnav} />
        <Navbar title={title} onTocToggle={toggleToc} onAppnavToggle={toggleAppnav} />
        <Toc toggled={tocOn} anchors={anchors} onClose={toggleToc} />
        <div className={headerStyle}>
          <ArticleAction article={article} toggleLevel={toggleLevel} />
        </div>
        <Article article={article} toggleSidenav={toggleSidenav} />
        <Sidenav toggled={sidenavOn} onToggle={toggleSidenav} menu={menu} selected={id} onSelect={fetchArticle} />
        {!loading && <Credit message={footerCreditMsg} />}
      </div>
    </Provider>
  );
};

App.propTypes = {
  app: PropTypes.object.isRequired,
};

export default observer(App);
