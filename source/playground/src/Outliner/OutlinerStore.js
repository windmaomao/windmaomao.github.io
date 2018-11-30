// libraries
import {decorate, observable, action} from 'mobx';
// services
import {getXml} from '../utils/callApi';

class OutlinerStore {
  root = {};
  options = {
    noteInRow: true
  };

  fetchOutliner() {
    return getXml('opml/projects.opml').then(res => {
      this.root = res.opml.body;
      console.log(this.root);
      return res;
    });
  }
}

decorate(OutlinerStore, {
  root: observable,
  options: observable,
  fetchOutliner: action.bound,
})

export default OutlinerStore;