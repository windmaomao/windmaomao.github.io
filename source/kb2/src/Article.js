// third party
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {observer} from 'mobx-react';
// styles
import './Article.css';
// components

const Article = ({article, toc}) => {
  const toggleClasses = {
    'ul-1': article.toggleLevel === 1,
    'ul-2': article.toggleLevel === 2
  };
  return (
    <div>
      {toc}
      <div className={classNames('section container article', toggleClasses)}>
        <div dangerouslySetInnerHTML={{__html: article.html}} />
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  toc: PropTypes.object
};

export default observer(Article);
