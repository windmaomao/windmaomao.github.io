// third party
import React from 'react';
import PropTypes from 'prop-types';
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
  // const ToggleSecondLevel = <input className={toggle2} type="checkbox" />;
  // const ToggleThirdLevel = <input className={toggle3} type="checkbox" />;

  return (
    <div className="">
      {toc}
      <div className={'section container article'}>
        <ArticleAction article={article} />
        {Breadcrumb(article.id)}
        <div>
          {/* {ToggleSecondLevel}
          {ToggleThirdLevel} */}
          <div dangerouslySetInnerHTML={{__html: article.html}} />
        </div>
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  onSidenavToggle: PropTypes.func,
  toc: PropTypes.object
};

export default Article;
