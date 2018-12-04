// libraries
import { types, onSnapshot } from "mobx-state-tree"

const Node = types.model('Node', {
  id: types.identifier,
  title: types.string,
  collapsed: false
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
    self.nodes.push(obj);
    self.root = obj.id;
  }
}))

// const node = Node.create({
//   id: '47',
//   title: 'ABC',
//   collapsed: false
// })

// const tree = Tree.create({
//   nodes: [node],
//   root: '47'
// })

// onSnapshot(tree, snapshot => {
//   console.dir(snapshot)
// })

export default TreeStore;