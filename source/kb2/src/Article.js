// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import './Article.css';
// pirmary components
import Markdown from './Markdown';

class Article extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  render() {
    const {source} = this.props;
    return (
      <div className={'container'}>
        <Markdown source={source} />
      </div>
    );
  }
}

export default Article;
