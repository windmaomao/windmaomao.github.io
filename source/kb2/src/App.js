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
    menu: PropTypes.array,
    articleId: PropTypes.string,
    article: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { 
      appnavOn: false,
      sidenavOn: true, 
      articleId: this.props.articleId,
      title: 'Knowledgebase',
      anchors: []
    };
  }

  toggle = () => {
    const sidenavOn = !this.state.sidenavOn;
    this.setState({sidenavOn});
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
    const {menu, article} = this.props;
    const {appnavOn, sidenavOn, articleId, title, anchors} = this.state;
    return (
      <div className="App">
        <Appnav trigger={appnavOn} />
        <Navbar title={title} anchors={anchors}
          onSidenavToggle={this.toggle} onAppnavClick={this.trigger}
        />
        <Article articleId={articleId} onParse={this.parse} article={article} />
        <Sidenav 
          toggled={sidenavOn} onToggle={this.toggle}
          menu={menu} selected={articleId} onSelect={this.switch} 
        />
      </div>
    );
  }
}

export default observer(App);
