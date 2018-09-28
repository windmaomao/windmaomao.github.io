// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {toJS} from 'mobx';
// styles
import './Article.css';
// primary component
import Toc from './Toc';

class Article extends Component {
  static propTypes = {
    article: PropTypes.object
  };

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
    const {article} = this.props;
    return (
      <Toc anchors={article.anchors} />
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
