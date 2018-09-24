// third party
import React, { Component } from 'react';
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
    ApiService.getArticle().then(source => {
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
