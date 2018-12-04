// libraries
import { types, onSnapshot } from "mobx-state-tree"

const Node = types.model('Node', {
  title: types.string,
  collapsed: false
}).actions(self => ({
  toggle() {
    self.collapsed = !self.collapsed
  }
}))

// const Tree = types.model('Tree', {
//   root: types.reference(Node)
// })

const node = Node.create({
  title: 'ABC',
  collapsed: false
})

onSnapshot(node, snapshot => {
  console.dir(snapshot)
})

export default node;