import {types} from 'mobx-state-tree';
import makeInspectable from 'mobx-devtools-mst';
import {Todo, Question} from './types';

const RootStore = types
  .model({
    todos: types.array(Todo),
    questions: types.array(Question),
  }).actions(self => ({
    addTodo(text) {
      const id = self.todos.reduce((maxId, todo) => Math.max(todo.id, maxId), -1) + 1
      self.todos.unshift({
          id,
          text
      })
    },
    genQuestion() {
      const type = 'plus';
      const text = '3+2';
      const answer = '5';
      self.questions.push({ type, text, answer });
    }
  }))

const store = RootStore.create();
makeInspectable(store);

export default store
