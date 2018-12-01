// libraries
import {decorate, observable, action} from 'mobx';
// services
import {getXml} from '../utils/callApi';
// locals
const MarkdownIt = require('markdown-it'), 
  md = new MarkdownIt({ breaks: true });

class OutlinerStore {
  root = {};
  options = {
    outliner: this,
    markdown: md,
    noteInRow: true,
    hiddenCols: []
  };

  fetchOutliner() {
    return getXml('opml/purchases.opml').then(res => {
      this.root = res.opml.body;
      console.log(this.root);
      return res;
    });
  }

  toggleColVisible(col) {
    const hiddens = this.options.hiddenCols;
    const index = hiddens.indexOf(col);
    if (index < 0) {
      hiddens.push(col);
    } else {
      hiddens.splice(index, 1);
    }
  }
}

decorate(OutlinerStore, {
  root: observable,
  options: observable,
  fetchOutliner: action.bound,
  toggleColVisible: action.bound
})

export default OutlinerStore;