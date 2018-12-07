// libraries
import { types } from "mobx-state-tree"

const Node = types.model('Node', {
  id: types.identifier,
  title: types.string,
  note: types.string,
  level: types.number,
  collapsed: false,
  children: types.array(types.late(() => types.reference(Node))),
  folder: false,
  data: types.optional(types.map(types.string), {}),
}).actions(self => ({
  toggle() {
    self.collapsed = !self.collapsed
  },
  found(text) {
    return self.title.toLowerCase().search(text) !== -1;
  }
}))

const Col = types.model('Col', {
  name: types.string,
  visible: true
}).actions(self => ({
  toggle() {
    self.visible = !self.visible
  },
  value(node) {
    return node.data.get(self.name)
  }
}))

const TreeStore = types.model('TreeStore', {
  nodes: types.array(Node),
  root: types.maybeNull(types.reference(Node)),
  cols: types.array(Col),
  title: types.string,
  noteEnabled: types.boolean,
  noteInRow: types.boolean,
  filterText: types.string
}).actions(self => ({
  populate(root) {
    let genId = 0

    const addNode = (item, level) => {
      const {title, note, children, cols, ...data} = item;
      // add current node
      const node = {
        id: `${genId}`,
        title: title,
        note: note,
        level: level,
        collapsed: false,
        data: data
      }
      genId++
      // process node children
      node.children = children.map(child => {
        return addNode(child, level + 1)
      })
      node.folder = node.children.length > 0
      // process node cols
      cols.forEach(col => {
        if (!self.cols.find(v => v.name === col)) {
          self.cols.push({ name: col, visible: true });
        }
      })
      // append to the nodes
      self.nodes.push(node)
      return node.id
    }
  
    self.root = addNode(root, 0)
  },
  applyFilter(text) {
    self.filterText = text.toLowerCase();
  },
  toggleNote() {
    self.noteEnabled = !self.noteEnabled;
  }
}))

export default TreeStore;