// libraries
import {decorate, observable, action, toJS, autorun} from 'mobx';


// // Given a tree root, return row configs
// function setupTreeNodes(root) {
//   const attrsAssigned = (node, level, parent) => {
//     Object.assign(node, {
//       level: level,
//       folder: node.children.length > 0,
//       collapsed: false,
//       children: node.children || []
//     });
//     node.children.forEach(item => {
//       attrsAssigned(item, level + 1, node);
//     });
//   }
//   attrsAssigned(root, 0, null);
//   return root;
// }

class NodeStore {
  title = 'abc';
  children = [];
  node = observable.object({
    title: 'level0',
    children: observable.array([
      { title: 'level1' }
    ])
  })

  constructor() {
    autorun(() => {
      console.log(this.node.title);
      const length = this.node.children.length;
      if (length) {
        console.log(this.node.children[0].title);
      }
    });
  }
}

decorate(NodeStore, {
  title: observable,
  children: observable,  
})

export default NodeStore;