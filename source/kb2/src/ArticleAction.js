// third party
import React from 'react';
import PropTypes from 'prop-types';
import downloadData from './js-file-download';
import {css} from 'react-emotion';

const rootStyle = css`
  float: right;
  margin-top: 0.5rem;
`;
const buttonStyle = css`
  opacity: 0.5;
  i {
    color: gray;
  }
  &:hover {
    opacity: 1;
  }
`;
const toggle2 = css`
  position: fixed;
  bottom: 0px;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
  &:checked ~ div ul > li > ul {
    display: none;
  }
`;
const toggle3 = css`
  position: fixed;
  bottom: 20px;
  opacity: 0.4;
  &:hover {
    opacity: 1;
  }
  &:checked ~ div ul > li > ul > li > ul {
    display: none;
  }
`;

const ArticleAction = ({ article }) => {
  const download = () => {downloadData(article.html, 'dl.html');};
  return (
    <div className={rootStyle}>
      <a className="button is-small is-white" onClick={download} title="Download HTML">
        <span className="icon is-small">
          <i className="fa fa-download"></i>
        </span>
      </a>
    </div>
  );
};

ArticleAction.propTypes = {
  article: PropTypes.object,
  onLevelToggle: PropTypes.func,
};

export default ArticleAction;
