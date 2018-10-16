import {types} from 'mobx-state-tree';

const Todo = types.model('Todo', {
  id: types.identifier(types.number),
  title: types.string,
  finished: false
})

export {
  Todo
}