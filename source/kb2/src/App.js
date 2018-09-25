// third party
import React, { Component } from 'react';
// styles
import './App.css';
// primary components
import Navbar from './Navbar';
import Article from './Article';
import Sidenav from './Sidenav';
// service
import ApiService from './Api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { source: '', menu: [] };
  }

  componentDidMount() {
    // const id = 'todo/fang';
    // const id = 'resume/frontend';
    // ApiService.getArticle(id).then(source => {
    //   this.setState({source});
    // });
    ApiService.getMenu().then(menu => {
      this.setState({menu});
    });
  }

  render() {
    const {source, menu} = this.state;
    return (
      <div className="App">
        <Navbar />
        <div className="section">
          <Article source={source} />
        </div>
        <div id="slider">
          <Sidenav menu={menu} />
        </div>
      </div>
    );
  }
}

export default App;
