// libraries
import {decorate, observable, action, toJS} from 'mobx';
import {onSnapshot} from "mobx-state-tree"
// services
import {getXml} from '../utils/callApi';
import TreeStore from './TreeStore';
// locals
const MarkdownIt = require('markdown-it'), 
  md = new MarkdownIt({ breaks: true });

class OutlinerStore {
  // raw xml tree data
  root = {};
  // tree store
  tree = null;
  // cols defs
  cols = [];
  // options
  options = {
    markdown: md,
    noteInRow: true,
    hiddenCols: [],
    searchText: 'ABC',
  };

  constructor() {
    this.tree = TreeStore.create({nodes: [], root: null, cols: []});

    onSnapshot(this.tree, snapshot => {
      console.dir(snapshot)
    });

    // onPatch(this.tree, patch => {
    //   console.log("Got change: ", patch)
    // }) 
    
    // onAction(this.tree, call => {
    //   console.log("Action was called: ", call)
    // })    
  }

  fetchOutliner() {
    return getXml('opml/projects.opml').then(res => {
      this.root = res.opml.body;
      console.log(toJS(this.root));
      this.tree.populate(this.root);
      return res;
    });
  }

}

decorate(OutlinerStore, {
  cols: observable,
  options: observable,
  fetchOutliner: action.bound,
})

export default OutlinerStore;