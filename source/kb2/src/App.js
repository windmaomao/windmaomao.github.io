// third party
import React, { Component } from 'react';
// styles
import './App.css';
// primary components
import Navbar from './Navbar';
import Article from './Article';
// service
import ApiService from './Api';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { source: '' };
  }

  componentDidMount() {
    const id = 'todo/fang';
    // const id = 'resume/frontend';
    ApiService.getArticle(id).then(source => {
      this.setState({source});
    });
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <div className="section">
          <Article source={this.state.source} />
        </div>
      </div>
    );
  }
}

export default App;
