import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

class Article extends Component {
  render() {
    const input = '# This is a header\n\nAnd this is a paragraph'
    return (
      <div class="content">
        <h1>Article</h1>
        <ReactMarkdown source={input} />
      </div>
    )
  }
}

export default Article;
