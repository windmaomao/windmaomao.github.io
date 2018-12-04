// libraries
import {decorate, observable, action, toJS} from 'mobx';
import { onSnapshot } from "mobx-state-tree"
// services
import {getXml} from '../utils/callApi';
import TreeStore from './TreeStore';
// locals
const MarkdownIt = require('markdown-it'), 
  md = new MarkdownIt({ breaks: true });


// Given a tree root, return row configs
function setupTreeNodes(root) {
  const attrsAssigned = (node, level, parent) => {
    Object.assign(node, {
      level: level,
      folder: node.children.length > 0,
      collapsed: false,
      children: node.children || []
    });
    node.children.forEach(item => {
      attrsAssigned(item, level + 1, node);
    });
  }
  attrsAssigned(root, 0, null);
  return root;
}

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
  root = {};
  nodes = {};
  cols = [];
  options = {
    outliner: this,
    markdown: md,
    noteInRow: true,
    hiddenCols: [],
    searchText: 'ABC',
  };
  tree = null;

  constructor() {
    this.tree = TreeStore.create({
      nodes: [],
      root: null
    });

    onSnapshot(this.tree, snapshot => {
      console.dir(snapshot)
    });
  }

  fetchOutliner() {
    return getXml('opml/projects.opml').then(res => {
      this.root = res.opml.body;
      this.tree.populate(this.root);
      this.nodes = setupTreeNodes(this.root);
      this.cols = setupTreeCols(this.root);
      console.log(toJS(this.root));
      console.log(toJS(this.options));
      console.log(toJS(this.nodes));
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

  toggleNodeCollapsed(node) {
    node.collapsed = !node.collapsed;
  }
}

decorate(OutlinerStore, {
  root: observable,
  nodes: observable,
  cols: observable,
  options: observable,
  fetchOutliner: action.bound,
  toggleColVisible: action.bound,
  toggleNodeCollapsed: action.bound,
})

export default OutlinerStore;