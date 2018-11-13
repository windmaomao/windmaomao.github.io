// third party
import {observable, action, decorate} from 'mobx';
// services
import {scheduler} from './Scheduler';
import {scheduler2} from './Scheduler2';

class AppStore {
  schedule = { 
    stepIndex: -1, canContinue: false, restarted: true, calculating: false,
    slots: {}, usages: {}, ids: [], total: 0, error: false, found: false,
  };
  data = { students: [], teachers: [], prefs: [] };

  collectResults(found) {
    // update students data
    // TODO: should update store only
    scheduler.data.students = found.consts.students;
    scheduler.data.students.forEach((student, i) => {
      student.teacherIndex = found.positions[i];
    });

    // update store status
    this.schedule.slots = found.slots;
    this.schedule.usages = Object.keys(found.slots).reduce((acc, key) => {
      Object.keys(found.slots[key]).forEach(teacher => {
        acc[teacher] = 1;
      });
      return acc;
    }, {});
  }

  planSchedule() {
    scheduler2.prepare(scheduler.data);
    const found = scheduler2.solve();
    this.collectResults(found);
  }

  planScheduleN() {
    const found = scheduler2.solveN(scheduler.data);
    if (!found) {
      console.error('No solution');
      this.schedule.error = true;
    } else {
      this.collectResults(found);
      this.schedule.error = false;
    }
  }

}

decorate(AppStore, {
  schedule: observable,
  planSchedule: action.bound,
  planScheduleN: action.bound,
  collectResults: action.bound,
});

export default AppStore;