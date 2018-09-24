import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Article extends Component {
  render() {
    return (
      <div className="content">
        <h1>Article</h1>
        <ReactMarkdown source={this.props.source} />
      </div>
    )
  }
}

export default Article;
