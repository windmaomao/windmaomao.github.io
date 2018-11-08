// third party
import {observable, action, computed, decorate} from 'mobx';
// services
import {scheduler} from './Scheduler';
import Filler from './Filler';
class AppStore {
  schedule = { 
    stepIndex: -1, canContinue: false, restarted: true, calculating: false,
    slots: {}, usages: {}, ids: [], total: 0, error: false, found: false,
  };

  _gatherPrint() {
    this.schedule.slots = scheduler.slots;
    this.schedule.usages = scheduler.teacherUsage;
    this.schedule.ids = Object.keys(scheduler.teacherUsage);
    this.schedule.total = scheduler.totalSlots();
    this.schedule.stepIndex = scheduler.studentStepIndex;
    this.schedule.error = scheduler.stepError();
    this.schedule.found = scheduler.stepFound();
  }

  resetSchedule() {
    scheduler.prepare();
    this.schedule.stepIndex = scheduler.studentStepIndex;
    this.schedule.canContinue = true;
    this._gatherPrint();
  }

  async searchSchedule() {
    this.schedule.calculating = true;
    this.schedule.found = false;
    try {
      const canContinue = await scheduler.stepThrough();
      this.schedule.canContinue = canContinue;
      this._gatherPrint();
      console.log(this.schedule.stepIndex);
      this.schedule.calculating = false;
    } catch (ex) {
      this.schedule.calculating = false;
    }
  }

  get stepProgress() {
    return this.schedule.stepIndex;
  }

  runFiller() {
    const filler = new Filler(scheduler.counts);
    const start = filler.start();
    let done = false;
    while (!done) {
      const obj = start.next();
      done = obj.done;
    }              
    console.warn('done');
  }
}

decorate(AppStore, {
  schedule: observable,
  resetSchedule: action.bound,
  searchSchedule: action.bound,
  stepProgress: computed,
});

export default AppStore;