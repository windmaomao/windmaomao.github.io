// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import './App.css';
// primary components
import Navbar from './Navbar';
import Article from './Article';
import Sidenav from './Sidenav';
// service
import ApiService from './Api';

class App extends Component {
  static propTypes = {
    menu: PropTypes.array,
    articleId: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { source: '' };
  }

  componentDidMount() {
    const id = this.props.articleId;
    ApiService.getArticle(id).then(source => {
      this.setState({source});
    });
  }

  render() {
    const {menu, articleId} = this.props;
    const {source} = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="section">
          <Article source={source} />
        </div>
        <Sidenav menu={menu} selected={articleId} />
      </div>
    );
  }
}

export default App;
