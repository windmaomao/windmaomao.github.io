// libraries
import {decorate, observable, action, toJS} from 'mobx';
// services
import {getXml} from '../utils/callApi';
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
      parent: parent,
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
  nodes = null;
  cols = [];
  options = {
    outliner: this,
    markdown: md,
    noteInRow: true,
    hiddenCols: [],
    searchText: 'ABC',
  };

  fetchOutliner() {
    return getXml('opml/projects.opml').then(res => {
      this.root = res.opml.body;
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
  nodes: observable.deep,
  cols: observable,
  options: observable,
  fetchOutliner: action.bound,
  toggleColVisible: action.bound,
  toggleNodeCollapsed: action.bound,
})

export default OutlinerStore;