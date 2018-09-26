// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// styles
import './Article.css';
// service
import ApiService from './Api';
import {mdService} from './Markdown';

// tutorial
// https://gist.github.com/sorahn/2cdc344cc698f027a948e3fdf6e0e60f/revisions

class Article extends Component {
  static propTypes = {
    articleId: PropTypes.string,
    onParse: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = { html: '' };
  }

  loadArticle = id => {
    return ApiService.getArticle(id).then(source => {
      return this.renderMarkdown(source);
    });
  }

  renderMarkdown = source => {
    const html = mdService.render(source);
    this.setState({html});

    const {onParse} = this.props;
    onParse && onParse({
      title: mdService.title,
      anchors: mdService.anchors
    });

    return html;
  }

  componentDidMount() {
    this.loadArticle(this.props.articleId);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.articleId !== nextProps.articleId) {
      this.loadArticle(nextProps.articleId);
    }
  }

  renderBreadcrumb() {
    const {articleId} = this.props;
    const bcs = articleId.split('/');
    return (
      <nav className="breadcrumb is-small" aria-label="breadcrumbs">
        <ul>
          {bcs.map((item, index) => (
            <li key={index} className="is-active">
              <a>{item.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>      
    );
  }

  render() {
    const __html = this.state.html;
    return (
      <div className={'container article'}>
        {this.renderBreadcrumb()}
        <div dangerouslySetInnerHTML={{__html}} />
      </div>
    );
  }
}

export default Article;
