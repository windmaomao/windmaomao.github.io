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

  return (
    <div className="">
      {toc}
      <div className={'section container article'}>
        {DownloadButton()}
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
