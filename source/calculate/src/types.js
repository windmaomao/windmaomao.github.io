import {types} from 'mobx-state-tree';

const Todo = types
  .model({
    text: types.string,
    completed: false,
    id: types.identifierNumber 
  })

export {
  Todo
}