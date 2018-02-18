import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import axios from 'axios';
// import './Content.css';

export interface ContentProp {}

interface Props {}
interface States {
  source: string;
}

class Content extends React.Component<Props, States> {
  constructor(props: Props) {
    super(props);
    this.state = {
      source: ''
    };
  }

  componentDidMount() {
    axios.get(`https://windmaomao.github.io/todo/fang.md`).then(res => {
      const source = res.data;
      this.setState({ source });
    });
  }

  render() {
    return (
      <div className="main">
        <ReactMarkdown source={this.state.source} />
      </div>
    );
  }
}

export default Content;
