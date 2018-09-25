// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import './Article.css';
// pirmary components
import Markdown from './Markdown';
// service
import ApiService from './Api';
// tutorial
// https://gist.github.com/sorahn/2cdc344cc698f027a948e3fdf6e0e60f/revisions

class Article extends Component {
  static propTypes = {
    articleId: PropTypes.string
  };

  constructor(props) {
    super(props);
    this.state = { source: '' };
  }

  loadArticle = id => {
    return ApiService.getArticle(id).then(source => {
      this.setState({source});
    });
  }

  componentDidMount() {
    this.loadArticle(this.props.articleId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.articleId !== nextProps.articleId) {
      this.loadArticle(nextProps.articleId);
    }
  }

  render() {
    const {source} = this.state;
    return (
      <div className={'container article'}>
        <Markdown source={source} />
      </div>
    );
  }
}

export default Article;
