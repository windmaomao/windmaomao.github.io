// third party
import React, { Component } from 'react';
import PropTypes from 'prop-types';
// services
import {mdService} from './MarkdownService';

class Markdown extends Component {
  static propTypes = {
    source: PropTypes.string.isRequired,
    onParse: PropTypes.func
  };

  constructor(props) {
    super(props);
    this.state = { html: '' };
  }

  renderHtml = source => {
    const html = mdService.render(source);
    this.setState({html});

    const {onParse} = this.props;
    onParse && onParse({
      title: mdService.title,
      anchors: mdService.anchors
    });
  }

  componentDidMount() {
    this.renderHtml(this.props.source);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.source !== nextProps.source) {
      this.renderHtml(nextProps.source);
    }
  }

  render() {
    const __html = this.state.html;
    return (
      <div dangerouslySetInnerHTML={{__html}} />
    );
  }
}

export default Markdown;
