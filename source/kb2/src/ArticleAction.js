// third party
import React from 'react';
import PropTypes from 'prop-types';
import downloadData from './js-file-download';
import {css} from 'react-emotion';
import {observer} from 'mobx-react';
import classNames from 'classnames';

const rootStyle = css`
  float: right;
`;

const ArticleAction = ({ article, toggleLevel }) => {
  const download = () => {downloadData(article.html, 'dl.html');};
  const levelOn = (level) => ({ 'is-success': article.toggleLevel === level});
  return (
    <div className={rootStyle}>
      <a className="button is-small is-dark" title="Download HTML"
        onClick={download}
      >
        <span className="icon is-small">
          <i className="fa fa-download"></i>
        </span>
      </a>
      <a 
        className={classNames('button is-small is-dark', levelOn(0))}
        title="Toggle First Level"
        onClick={() => {toggleLevel(+1); }}
      >
        <span className="icon is-small">
          <i className="fa fa-angle-left"></i>
        </span>
      </a>
      <a 
        className={classNames('button is-small is-dark', levelOn(4))}
        title="Toggle Second Level"
        onClick={() => {toggleLevel(-1); }}
      >
        <span className="icon is-small">
          <i className="fa fa-angle-right"></i>
        </span>
      </a>
    </div>
  );
};

ArticleAction.propTypes = {
  article: PropTypes.object,
  toggleLevel: PropTypes.func.isRequired
};

export default observer(ArticleAction);
