import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
// import './Content.css';

export interface ContentProp {}

export interface Props {}

const input = '# Hello World';

class Content extends React.Component<Props, object> {
  render() {
    return (
      <div className="main">
        <ReactMarkdown source={input} />
      </div>
    );
  }
}

export default Content;
