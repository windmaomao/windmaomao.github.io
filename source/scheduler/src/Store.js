// third party
import {observable, action, decorate} from 'mobx';
// services
import {scheduler} from './Scheduler';
class AppStore {
  schedule = { stepIndex: -1, canContinue: false, restarted: true, calculating: false };
  print = { slots: {}, usages: {}, ids: [], total: 0, errors: [] };

  _gatherPrint() {
    this.print.slots = scheduler.slots;
    this.print.usages = scheduler.teacherUsage;
    this.print.ids = Object.keys(scheduler.teacherUsage);
    this.print.total = scheduler.totalSlots();
    this.print.errors = scheduler.errors;
  }

  resetSchedule() {
    scheduler.prepare();
    this.schedule.stepIndex = scheduler.studentStepIndex;
    this.schedule.restarted = true;
    this._gatherPrint();
  }

  searchSchedule() {
    this.schedule.restarted = false;
    this.schedule.calculating = true;
    this.schedule.canContinue = scheduler.stepToNext((index) => {
      this.schedule.stepIndex = index;
    });
    // this.schedule.calculating = false;
    this._gatherPrint();
  }
}

decorate(AppStore, {
  schedule: observable,
  resetSchedule: action.bound,
  searchSchedule: action.bound,
});

export default AppStore;