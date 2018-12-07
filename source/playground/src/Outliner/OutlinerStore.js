// libraries
import {decorate, observable, action, toJS} from 'mobx';
import {onSnapshot} from "mobx-state-tree"
// services
import {getXml} from '../utils/callApi';
import TreeStore from './TreeStore';
// locals

class OutlinerStore {
  // raw xml tree data
  root = {};
  // tree store
  tree = null;

  constructor() {
    this.tree = TreeStore.create({
      title: '', filterText: '', 
      noteEnabled: true, noteInRow: true, 
      nodes: [], root: null, cols: []
    });

    onSnapshot(this.tree, snapshot => {
      console.dir(snapshot)
    });

    // onPatch(this.tree, patch => {
    //   console.log("Got change: ", patch)
    // }) 
    
    // onAction(this.tree, call => {
    //   console.log("Action was called: ", call)
    // })    
  }

  fetchOutliner() {
    return getXml('opml/resume.opml').then(res => {
      this.root = res.opml.body;
      console.log(toJS(this.root));
      this.tree.populate(this.root);
      return res;
    });
  }

}

decorate(OutlinerStore, {
  cols: observable,
  fetchOutliner: action.bound,
})

export default OutlinerStore;