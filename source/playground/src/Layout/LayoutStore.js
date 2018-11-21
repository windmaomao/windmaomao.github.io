import {decorate, observable, action} from 'mobx';

class LayoutStore {
  status = { 
    messageOn: false 
  }
  showMessage() {
    this.status.messageOn = true;
  }
  hideMessage() {
    this.status.messageOn = false;
  }
}

decorate(LayoutStore, {
  status: observable,
  showMessage: action.bound,
  hideMessage: action.bound
})

export default LayoutStore;