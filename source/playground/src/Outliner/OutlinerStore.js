// libraries
import {decorate, observable, action} from 'mobx';
// services
import {getXml} from '../utils/callApi';

class OutlinerStore {
  root = {};

  fetchOutliner() {
    return getXml('opml/blueprints.opml').then(res => {
      this.root = res.opml.body;
      console.log(this.root);
      return res;
    });
  }
}

decorate(OutlinerStore, {
  root: observable,
  fetchOutliner: action.bound,
})

export default OutlinerStore;