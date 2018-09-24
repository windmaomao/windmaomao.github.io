// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import ReactMarkdown from 'react-markdown';
// styles
import './Article.css';

class Article extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  render() {
    const source = this.props.source;
    // const source = '# Title';
    return (
      <div className={'container'}>
        <ReactMarkdown source={source} className={'writer'} />
      </div>
    );
  }
}

export default Article;
