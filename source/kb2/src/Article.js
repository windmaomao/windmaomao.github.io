// third party
import React from 'react';
import PropTypes from 'prop-types';
// styles
import './Article.css';
// primary component
import Toc from './Toc';

const Article = (props) => {
  const {article, tocOn, onSidenavToggle} = props;
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
      {tocOn && <Toc anchors={article.anchors} />}
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
  tocOn: PropTypes.bool
};

export default Article;
