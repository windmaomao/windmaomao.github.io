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

  planSchedule() {
    scheduler2.prepare(scheduler.data);
    const found = scheduler2.solve();
    console.log(found.positions);

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
    this.schedule.error = found.positions.length - found.index;
  }

  planScheduleN() {
    const solution = scheduler2.solveN(scheduler.data);
    console.log(solution);
  }

}

decorate(AppStore, {
  schedule: observable,
  planSchedule: action.bound
});

export default AppStore;