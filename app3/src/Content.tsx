import * as React from 'react';
import * as ReactMarkdown from 'react-markdown';
import axios from 'axios';
import './Content.css';

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
    const md = 'blog/power-of-loss';
    axios.get(`https://windmaomao.github.io/${md}.md`).then(res => {
      const source = res.data;
      this.setState({ source });
    });
  }

  render() {
    return (
      <div className="main">
        <div className="write container">
          <ReactMarkdown source={this.state.source} />
        </div>
      </div>
    );
  }
}

export default Content;
