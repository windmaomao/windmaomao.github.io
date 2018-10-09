// third party
import {observable, action, decorate} from 'mobx';
// services
import {scheduler} from './Scheduler';
class AppStore {
  schedule = { stepIndex: -1, canContinue: false, restarted: true };

  resetSchedule() {
    scheduler.prepare();
    this.schedule.stepIndex = scheduler.studentStepIndex;
    this.schedule.restarted = true;
  }

  searchSchedule() {
    this.schedule.restarted = false;
    this.schedule.canContinue = scheduler.stepToNext((index) => {
      this.schedule.stepIndex = index;
    });
  }
}

decorate(AppStore, {
  schedule: observable,
  resetSchedule: action.bound,
  searchSchedule: action.bound,
});

export default AppStore;