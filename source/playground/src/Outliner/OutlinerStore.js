// libraries
import {decorate, observable, action, toJS} from 'mobx';
// services
import {getXml} from '../utils/callApi';
// locals
const MarkdownIt = require('markdown-it'), 
  md = new MarkdownIt({ breaks: true });


// Given a tree root, return row configs
function setupTreeRows(root) {
  const rows = [];
  let idGen = 0;

  const assignAttrs = (node, level, parent) => {
    // assign node id
    node.id = idGen++;
    const row = {
      parent: parent,
      level: level,
      collapsed: false,
      node: node,
    };
    rows.push(row);
    node.children.forEach(item => {
      assignAttrs(item, level + 1, node);
    });
  }

  assignAttrs(root, 0, null);
  return rows;
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
  rows = [];
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
      this.rows = setupTreeRows(this.root);
      this.cols = setupTreeCols(this.root);
      console.log(toJS(this.root));
      console.log(toJS(this.options));
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

  toggleRowCollapsed(row) {
    row.collapsed = !row.collapsed;
  }
}

decorate(OutlinerStore, {
  root: observable,
  rows: observable,
  cols: observable,
  options: observable,
  fetchOutliner: action.bound,
  toggleColVisible: action.bound,
  toggleRowCollapsed: action.bound,
})

export default OutlinerStore;