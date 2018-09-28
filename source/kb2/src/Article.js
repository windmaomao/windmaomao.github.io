// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {toJS} from 'mobx';
// styles
import './Article.css';
// primary component
import Toc from './Toc';
// service
import ApiService from './Api';
import {mdService} from './Markdown';
import {storedKeys} from './constant';

// tutorial
// https://gist.github.com/sorahn/2cdc344cc698f027a948e3fdf6e0e60f/revisions

class Article extends Component {
  static propTypes = {
    articleId: PropTypes.string,
    onParse: PropTypes.func,
    article: PropTypes.object
  };

  constructor(props) {
    super(props);
    this.state = { html: '', anchors: [] };
  }

  loadArticle = id => {
    return ApiService.getArticle(id).then(source => {
      return this.renderMarkdown(source);
    });
  }

  storeArticleId = id => {
    localStorage.setItem(storedKeys.articleId, id);
  }

  renderMarkdown = source => {
    const html = mdService.render(source);
    const anchors = mdService.anchors;
    this.setState({html, anchors});

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
      const id = nextProps.articleId;
      this.loadArticle(id).then(() => {
        this.storeArticleId(id);
      });
    }
  }

  renderBreadcrumb() {
    const {article} = this.props;
    const bcs = article.id.split('/');
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

  renderToc() {
    const {anchors} = this.state;
    return (
      <Toc anchors={anchors} />
    );
  }

  render() {
    const {article} = this.props; console.log(toJS(article));
    return (
      <div className="">
        {/* {this.renderToc()} */}
        <div className={'section container article'}>
          {this.renderBreadcrumb()}
          <div dangerouslySetInnerHTML={{__html: article.html}} />
        </div>
      </div>
    );
  }
}

export default Article;
