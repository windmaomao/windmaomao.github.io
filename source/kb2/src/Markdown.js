// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// services
import {mdService} from './MarkdownService';

class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string
  };

  renderContent() {
    const __html = mdService.render(this.props.source);
    return <span dangerouslySetInnerHTML={{__html}} />;
  }

  render() {
    return (
      <div>{this.renderContent()}</div>
    );
  }
}

export default Markdown;
