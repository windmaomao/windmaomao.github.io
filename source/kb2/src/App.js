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
      articleId: this.props.articleId,
      title: 'Knowledgebase'
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

  parse = ({title}) => {
    this.setState({title});
  }

  render() {
    const {menu} = this.props;
    const {sidenavOn, articleId, title} = this.state;
    return (
      <div className="App">
        <Navbar title={title} onSidenavToggle={this.toggle} />
        <div className="section">
          <Article articleId={articleId} onParse={this.parse} />
        </div>
        <Sidenav 
          toggled={sidenavOn} onToggle={this.toggle}
          menu={menu} selected={articleId} onSelect={this.switch} 
        />
      </div>
    );
  }
}

export default App;
