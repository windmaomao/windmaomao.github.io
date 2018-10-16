import {types} from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import {Todo} from './types';

const RootStore = types.model('RootStore', {
  todos: types.map(Todo)
}).actions(self => ({
  addTodo(title) {
    self.todos.put({ title, id: Math.random() });
  }
}));

const store = RootStore.create({
  todos: {
    13: {
      id: 13,
      title: 'Eat'
    }
  }
});

makeInspectable(store)

export default store
