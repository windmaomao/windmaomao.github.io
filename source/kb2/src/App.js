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

  constructor(props) {
    super(props);
    this.state = { 
      title: 'Knowledgebase',
      anchors: []
    };
  }

  switch = articleId => {
    if (articleId !== this.state.articleId) {
      this.setState({articleId});
    }
  }

  parse = ({title, anchors}) => {
    this.setState({title, anchors});
  }

  render() {
    const {menu, article, fetchArticle} = this.props.app;
    const {ui, toggleSidenav, toggleAppnav} = this.props.app;
    const {sidenavOn, appnavOn} = ui;
    return (
      <div className="App">
        <Appnav trigger={appnavOn} />
        <Navbar title={article.title} anchors={article.anchors}
          onSidenavToggle={toggleSidenav} onAppnavClick={toggleAppnav}
        />
        <Article articleId={article.id} onParse={this.parse} article={article} />
        <Sidenav 
          toggled={sidenavOn} onToggle={toggleSidenav}
          menu={menu} selected={article.id} onSelect={fetchArticle} 
        />
      </div>
    );
  }
}

export default observer(App);
