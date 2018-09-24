// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';

class Article extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  render() {
    // const source = this.props.source;
    const source = '# Title';
    return (
      <div className="content">
        <ReactMarkdown source={source} />
      </div>
    );
  }
}

export default Article;
