import {types} from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import {Todo} from './types';

const RootStore = types
  .model({
    todos: types.array(Todo)
  }).actions(self => ({
    addTodo(text) {
      const id = self.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
      self.todos.unshift({
          id,
          text
      })
    }
  }))

const store = RootStore.create({
  todos: [
    {
      id: 13,
      text: 'Eat',
      completed: false
    }
  ]
});

makeInspectable(store)

export default store
