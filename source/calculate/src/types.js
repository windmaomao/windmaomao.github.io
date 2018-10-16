import {types} from 'mobx-state-tree';

const Todo = types
  .model({
    text: types.string,
    completed: false,
    id: types.identifierNumber 
  })

const Question = types
  .model({
    type: types.string,
    text: types.string,
    answer: types.string
  })

const Answer = types
  .model({
    question: types.string,
    input: types.string,
    correct: types.boolean
  })

export {
  Todo,
  Question,
  Answer
}