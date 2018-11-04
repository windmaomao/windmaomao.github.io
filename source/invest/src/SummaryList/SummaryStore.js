import {observable, decorate, action, set} from 'mobx';
import { getDefaultSummary } from './summary.model';

export class SummaryStore {
  summaries = [getDefaultSummary()];

  // async loadSummaries() {
  //   try {
  //     const data = await api.loadSummaries();
  //     this.summaries.replace(data);
  //   } finally {}
  // }
}

decorate(SummaryStore, {
  summaries: observable,
});

export const getSummaryStore = () => (new SummaryStore());

export default SummaryStore;