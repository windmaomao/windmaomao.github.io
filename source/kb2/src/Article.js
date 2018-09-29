// third party
import React from 'react';
import PropTypes from 'prop-types';
// styles
import './Article.css';

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

  return (
    <div className="">
      {toc}
      <div className={'section container article'}>
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

export default Article;
