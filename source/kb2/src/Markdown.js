// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';

// Markdown core and highlighter
const md = require('markdown-it')({
  html: true,
  linkify: true,
});
md.use(require('markdown-it-attrs/markdown-it-attrs.browser.js'));
md.use(require('markdown-it-emoji'));

class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  renderContent() {
    const __html = md.render(this.props.source);
    return <span dangerouslySetInnerHTML={{__html}} />;
  }

  render() {
    return (
      <div>{this.renderContent()}</div>
    );
  }
}

export default Markdown;
