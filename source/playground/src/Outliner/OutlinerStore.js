// libraries
import {decorate, observable, action, toJS} from 'mobx';
// import {onSnapshot, onPatch, onAction} from "mobx-state-tree"
// services
import {getXml} from '../utils/callApi';
import TreeStore from './TreeStore';
// locals
const MarkdownIt = require('markdown-it'), 
  md = new MarkdownIt({ breaks: true });


// Given a tree root, return col configs
function setupTreeCols(root) {
  return root.cols.map(col => {
    if (typeof col === 'string') {
      return { 
        name: col,
        value: (node) => (node[col] || ''),
        visible: true
      }
    }
    return col;
  });
}

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
    this.tree = TreeStore.create({nodes: [], root: null});

    // onSnapshot(this.tree, snapshot => {
    //   console.dir(snapshot)
    // });

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
      this.cols = setupTreeCols(this.root);
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
  cols: observable,
  options: observable,
  fetchOutliner: action.bound,
  toggleColVisible: action.bound,
})

export default OutlinerStore;