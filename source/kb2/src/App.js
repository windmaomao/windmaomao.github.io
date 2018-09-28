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
      appnavOn: false,
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

  trigger = () => {    
    const appnavOn = !this.state.appnavOn;
    this.setState({appnavOn});
  }

  render() {
    const {appnavOn} = this.state;
    const {menu, article, ui, toggleSidenav, fetchArticle} = this.props.app;
    return (
      <div className="App">
        <Appnav trigger={appnavOn} />
        <Navbar title={article.title} anchors={article.anchors}
          onSidenavToggle={toggleSidenav} onAppnavClick={this.trigger}
        />
        <Article articleId={article.id} onParse={this.parse} article={article} />
        <Sidenav 
          toggled={ui.sidenavOn} onToggle={toggleSidenav}
          menu={menu} selected={article.id} onSelect={fetchArticle} 
        />
      </div>
    );
  }
}

export default observer(App);
