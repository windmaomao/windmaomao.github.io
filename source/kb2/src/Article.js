// third party
import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {observer} from 'mobx-react';
// styles
import './Article.css';
// components
import Breadcrumb from './Breadcrumb';

const Article = ({article, toc, toggleSidenav}) => {
  const toggleClasses = `ul-${article.toggleLevel}`;
  return (
    <div>
      {toc}
      <div className={classNames('section container article', toggleClasses)}>
        <Breadcrumb article={article} toggleSidenav={toggleSidenav} />
        <div 
          dangerouslySetInnerHTML={{__html: article.html}} 
          onClick={e => {e.target.classList.toggle('toggled');}}
        />
      </div>
    </div>
  );
};

Article.propTypes = {
  article: PropTypes.object,
  toc: PropTypes.object,
  toggleSidenav: PropTypes.func,
};

export default observer(Article);
