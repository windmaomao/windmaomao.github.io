// third party
import React from 'react';
import PropTypes from 'prop-types';
import downloadData from './js-file-download';
import {css} from 'react-emotion';
// styles
import './Article.css';

const buttonStyle = css`
  float: right;
  margin-top: 0.5rem;
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
  const download = () => {downloadData(article.html, 'dl.html');};
  const DownloadButton = () => {
    return <a onClick={download} className={buttonStyle} title="Download HTML">
      <i className="fa fa-download"></i>
    </a>;
  };
  const ToggleSecondLevel = <input className={toggle2} type="checkbox" />;
  const ToggleThirdLevel = <input className={toggle3} type="checkbox" />;

  return (
    <div className="">
      {toc}
      <div className={'section container article'}>
        {DownloadButton()}
        {Breadcrumb(article.id)}
        <div>
          {ToggleSecondLevel}
          {ToggleThirdLevel}
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
