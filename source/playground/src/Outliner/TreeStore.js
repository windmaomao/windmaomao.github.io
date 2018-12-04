// libraries
import { types } from "mobx-state-tree"

const Node = types.model('Node', {
  id: types.identifier,
  title: types.string,
  level: types.number,
  collapsed: false,
  children: types.array(types.late(() => types.reference(Node)))
}).actions(self => ({
  toggle() {
    self.collapsed = !self.collapsed
  }
}))

const TreeStore = types.model('Tree', {
  nodes: types.array(Node),
  root: types.maybeNull(types.reference(Node))
}).actions(self => ({
  addNode(obj) {
    self.nodes.push(obj)
    self.root = obj.id
  },
  populate(root) {
    let genId = 0

    const addNode = (item, level) => {
      // add current node
      const node = {
        id: `${genId}`,
        title: item.title,
        level: level,
        collapsed: false,
      }
      genId++
      node.children = item.children.map(child => {
        return addNode(child, level + 1)
      })
      self.nodes.push(node);
      return node.id;
    }
  
    self.root = addNode(root, 0)
  }
}))

// onSnapshot(tree, snapshot => {
//   console.dir(snapshot)
// })

export default TreeStore;