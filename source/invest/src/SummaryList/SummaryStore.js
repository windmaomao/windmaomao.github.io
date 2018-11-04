import {observable, decorate, action} from 'mobx';
import { getDefaultSummary } from './summary.model';

export class SummaryStore {
  summaries = [getDefaultSummary()];
  editing = new Map();

  edit(name) {
    const on = !!this.editing.get(name);
    this.editing.set(name, !on);
  }

  // async loadSummaries() {
  //   try {
  //     const data = await api.loadSummaries();
  //     this.summaries.replace(data);
  //   } finally {}
  // }
}

decorate(SummaryStore, {
  summaries: observable,
  editing: observable,
  editSummary: action.bound,
});

export const getSummaryStore = () => (new SummaryStore());

export default SummaryStore;