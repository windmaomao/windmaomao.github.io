// third party
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {observer} from 'mobx-react';
// styles
import './Article.css';
// components
import ArticleAction from './ArticleAction';

const Article = (props) => {
  const {article, toc, onSidenavToggle} = props;
  const toggle = () => {onSidenavToggle && onSidenavToggle();};
  const Breadcrumb = (id) => {
    const bcs = id.split('/');
    return (
      <nav className="breadcrumb is-small" aria-label="breadcrumbs">
        <ul>
          <li>
            <a onClick={toggle}>DIRECTORY</a>
          </li>
          {bcs.map((item, index) => (
            <li key={index} className={'is-active'}>
              <a>{item.toUpperCase()}</a>
            </li>
          ))}
        </ul>
      </nav>      
    );
  };
  const toggleClasses = {
    'ul-1': article.toggleLevel === 1,
    'ul-2': article.toggleLevel === 2
  };

  return (
    <div>
      {toc}
      <div className={classNames('section container article', toggleClasses)}>
        <ArticleAction article={article} />
        {Breadcrumb(article.id)}
        <div dangerouslySetInnerHTML={{__html: article.html}} />
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  onSidenavToggle: PropTypes.func,
  toc: PropTypes.object
};

export default observer(Article);
