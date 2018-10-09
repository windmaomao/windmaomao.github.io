// third party
import {observable, action, decorate} from 'mobx';
// services
import {scheduler} from './Scheduler';
class AppStore {
  schedule = { stepIndex: -1, canContinue: false, restarted: true, calculating: false };

  resetSchedule() {
    scheduler.prepare();
    this.schedule.stepIndex = scheduler.studentStepIndex;
    this.schedule.restarted = true;
  }

  searchSchedule() {
    this.schedule.restarted = false;
    this.schedule.calculating = true;
    this.schedule.canContinue = scheduler.stepToNext((index) => {
      this.schedule.stepIndex = index;
    });
    // this.schedule.calculating = false;
    return this.schedule.canContinue;
  }
}

decorate(AppStore, {
  schedule: observable,
  resetSchedule: action.bound,
  searchSchedule: action.bound,
});

export default AppStore;