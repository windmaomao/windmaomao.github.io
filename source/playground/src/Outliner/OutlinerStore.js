// libraries
import {decorate, observable, action} from 'mobx';
// services
import {getXml} from '../utils/callApi';
// locals
const MarkdownIt = require('markdown-it'), md = new MarkdownIt();

class OutlinerStore {
  root = {};
  options = {
    markdown: md,
    noteInRow: true
  };

  fetchOutliner() {
    return getXml('opml/projects.opml').then(res => {
      this.root = res.opml.body;
      console.log(this.root);
      return res;
    });
  }
}

decorate(OutlinerStore, {
  root: observable,
  options: observable,
  fetchOutliner: action.bound,
})

export default OutlinerStore;