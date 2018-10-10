// third party
import {observable, action, computed, decorate} from 'mobx';
// services
import {scheduler} from './Scheduler';
class AppStore {
  schedule = { 
    stepIndex: -1, canContinue: false, restarted: true, calculating: false,
    slots: {}, usages: {}, ids: [], total: 0, errors: []
  };

  _gatherPrint() {
    this.schedule.slots = scheduler.slots;
    this.schedule.usages = scheduler.teacherUsage;
    this.schedule.ids = Object.keys(scheduler.teacherUsage);
    this.schedule.total = scheduler.totalSlots();
    this.schedule.errors = scheduler.errors;
  }

  resetSchedule() {
    scheduler.prepare();
    this.schedule.stepIndex = scheduler.studentStepIndex;
    this.schedule.canContinue = true;
    this._gatherPrint();
  }

  async searchSchedule() {
    this.schedule.calculating = true;
    try {
      const canContinue = await scheduler.stepThrough();
      this.schedule.canContinue = canContinue;
      this.schedule.calculating = false;
      this._gatherPrint();
    } catch (ex) {
      this.schedule.calculating = false;
    }
  }

  get stepProgress() {
    return this.schedule.stepIndex;
  }
}

decorate(AppStore, {
  schedule: observable,
  resetSchedule: action.bound,
  searchSchedule: action.bound,
  stepProgress: computed,
});

export default AppStore;