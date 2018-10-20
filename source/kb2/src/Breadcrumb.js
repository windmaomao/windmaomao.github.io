// third party
import React from 'react';
import PropTypes from 'prop-types';
import {observer} from 'mobx-react';
// styles
// components

const Breadcrumb = ({article, toggleSidenav}) => {
  const bcs = article.id.split('/');
  return (
    <nav className="breadcrumb is-small is-black" aria-label="breadcrumbs">
      <ul>
        <li>
          <a onClick={toggleSidenav}>DIRECTORY</a>
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

Breadcrumb.propTypes = {
  article: PropTypes.object.isRequired,
  toggleSidenav: PropTypes.func.isRequired,
};

export default observer(Breadcrumb);
