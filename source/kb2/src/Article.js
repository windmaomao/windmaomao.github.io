// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import './Article.css';
// pirmary components
import Markdown from './Markdown';
// service
import ApiService from './Api';

class Article extends Component {
  static propTypes = {
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
    const {source} = this.state;
    return (
      <div className={'container article'}>
        <Markdown source={source} />
      </div>
    );
  }
}

export default Article;
