// third party
import {observable, action, decorate} from 'mobx';
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
    this.schedule.restarted = true;
    this.schedule.canContinue = true;
    this._gatherPrint();
  }

  searchSchedule() {
    this.schedule.restarted = false;
    this.schedule.calculating = true;
    this.schedule.canContinue = scheduler.stepToNext((index) => {
      this.schedule.stepIndex = index;
    });
    this._gatherPrint();
    this.schedule.calculating = false;
  }
}

decorate(AppStore, {
  schedule: observable,
  resetSchedule: action.bound,
  searchSchedule: action.bound,
});

export default AppStore;