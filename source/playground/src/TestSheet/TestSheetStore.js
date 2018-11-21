import {decorate, observable, action, computed} from 'mobx';

class TestSheetStore {
  status = { 
    questionCount: 0,
    questionIndex: 0,
    testStart: false,
    testEnd: false
  };
  test = { questions: [], score: 0 };

  addNewTest() {
    this.test.questions = [
      { title: '1+2', answer: 3, correct: false },
      { title: '3+2', answer: 3, correct: false }
    ];
    this.status = {
      questionCount: this.test.questions.length,
      questionIndex: 0,
      testStart: true,
      testEnd: false
    };
  }

  get curQuestion() {
    if (this.status.questionIndex >= this.test.questions.length) {
      return null;
    }
    return this.test.questions[this.status.questionIndex];
  }
}

decorate(TestSheetStore, {
  status: observable,
  test: observable,
  addNewTest: action.bound,
  curQuestion: computed,
})

export default TestSheetStore;