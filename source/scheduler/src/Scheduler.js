// libraries
import {find, cloneDeep, sortBy, filter, shuffle} from 'lodash';
// services
import {slotMinutes, slotPrintTime, slotMaxStudents} from './constant';

const findId = (arr, obj) => {
  var search = obj.id.toLowerCase();
  return find(arr, function (item) {
    return item.id.toLowerCase() === search;
  });  
}

export default class SchedulerService {
  constructor() {
    this.slotMins = slotMinutes;
    this.maxStudents = slotMaxStudents;
    this.acceptPref = true;
    this.shuffleTeacher = true;
    this.maxSteps = 1000;
    this.data = { students: [], teachers: [], prefs: [] };
    this.reset();
  }

  min2slot(min) {
    return min/this.slotMins;
  }

  slot2time = slotPrintTime;

  totalSlots() {
    const usages = this.teacherUsage;
    return Object.keys(usages).reduce((acc, teacher) => {
      return acc + usages[teacher];
    }, 0);
  }
  
  // apply map
  tryMapStudentToTeacher(slots, student, teacher) {
    let matchAllSlots = true;
    const slotsMap = cloneDeep(slots);
    const lastName = name => {
      const parts = name.split(' ');
      return parts.length > 1 ? parts[1] : null;
    };
    const studentLastName = lastName(student.id);

    // for each slot required by the student
    for (let i = student.start; i <= student.end; i++) { 
      // skip if not work 
      if (!matchAllSlots) break;
      
      // find the slot in the map
      if (!(i in slotsMap)) {
        slotsMap[i] = {};
      }
      const slot = slotsMap[i];

      // get current students for the slot
      if (!(teacher.id in slot)) {
        slot[teacher.id] = [];
      }
      const students = slot[teacher.id];
      
      // if teacher has enough students
      if (students.length === this.maxStudents) {
        matchAllSlots = false;
      }
      // if teacher has students with unique last name
      if (studentLastName) {
        const lastNames = students.map(prev => lastName(prev));
        if (lastNames.indexOf(studentLastName) >= 0) {
          matchAllSlots = false;
        } 
      }
      // accept this teacher
      if (matchAllSlots) {
        students.push(student.id);

        if (!(teacher.id in this.teacherUsage)) {
          this.teacherUsage[teacher.id] = 1;
        } else {
          this.teacherUsage[teacher.id]++;
        }
      }
    }
    
    if (matchAllSlots) {
      return slotsMap;
    } else {
      return null;
    }
  }
  
  // find a teacher
  tryMapTeachers(slots, student, teachers, start) {
    const init = start || 0;
    for (let i=init; i<teachers.length; i++) {
      const teacher = teachers[i];
      // if teacher quality
      if ((student.start >= teacher.start) && (student.end <= teacher.end)) {
        // try use this teacher
        const tryMap = this.tryMapStudentToTeacher(slots, student, teacher);
        if (tryMap) {
          return tryMap; 
        }
      }
    }
    return null;
  }
  
  // TODO: retire this function
  // sort teachers by preferences
  sortTeachers(teachers, pref) {
    if (!pref) return teachers;
    const list = cloneDeep(teachers);
    list.forEach(teacher => {
      let ranking = 0;
      if (pref.prefers.indexOf(teacher.id) >=0) {
        ranking = -100;
      } 
      if (pref.rejects.indexOf(teacher.id) >=0) {
        ranking = 100;
      }
      teacher.ranking = ranking;

      let usage = 0;
      if (this.teacherUsage[teacher.id]) {
        usage = this.teacherUsage[teacher.id];
      }
      teacher.ranking = ranking - usage;
    });

    const filtered = filter(list, function(o) { return o.ranking <= 0; });
    return sortBy(filtered, ['ranking']);
  }

  // filter teacher based on pref
  preferTeachers(teachers, pref, isShuffled) {
    let list = cloneDeep(teachers);
    if (isShuffled) {
      list = shuffle(list);
    }
    if (!pref) return list;
    list.forEach((teacher, index) => {
      let ranking = 0;
      if (pref.prefers.indexOf(teacher.id) >= 0) {
        ranking = ranking - 10000;
      } 
      if (pref.rejects.indexOf(teacher.id) >= 0) {
        ranking = ranking + 10000;
      }
      teacher.ranking = ranking;
    });
    const filtered = filter(list, function(o) { return o.ranking <= 0; });
    return sortBy(filtered, ['ranking']);
  }

  // sort students by preferences
  sortStudents(students, prefs) {
    if (!prefs.length) return students;
    const list = cloneDeep(students);
    const len = students.length / 2;
    list.forEach((student, index) => {
      let ranking = index;
      // const pref = find(prefs, { 'id': student.id });
      const pref = findId(prefs, student);
      if (pref) {
        const prefers = pref.prefers;
        if (prefers.length) {
          ranking = ranking - len;
        }
        // const rejects = pref.rejects;
        // if (rejects.length) {
        //   ranking = ranking - 5;
        // }
      }
      student.ranking = ranking;
    });
    return sortBy(list, ['ranking']);
  }

  // set schedule data
  setData(teachers, students, prefs) {
    if (teachers) {
      this.data.teachers = teachers;
    }
    if (students) {
      this.data.students = students;
    }
    if (prefs) {
      this.data.prefs = prefs;
    }
  }

  // reset step
  reset() {
    this.slots = {};
    this.errors = [];
    this.teacherUsage = {};
  }

  // fill slots info
  fill() {
    this.reset();
    const {students} = this.data;
    this.slots = students.reduce((acc, student) => {
      const tryMap = this.tryMapTeachers(acc, student, student.teachers);
      if (!tryMap) {
        this.errors.push(student.id + ' |'); 
        return acc;
      }
      return tryMap;
    }, {});
    return this.slots;
  }  

  // prepare
  prepare() {
    const {students, teachers, prefs} = this.data;
    students.forEach(student => {
      // find student pref
      let prefTeachers = teachers;
      if (this.acceptPref) {
        // const pref = find(prefs, { 'id': student.id });
        const pref = findId(prefs, student);
        prefTeachers = this.preferTeachers(teachers, pref, this.shuffleTeacher);
      }
      student.teachers = prefTeachers;
      student.teacherIndex = 0;
    });
    this.restartStep = true;
    this.studentStepIndex = -1;
  }

  // plan schedule
  plan() {
    this.prepare();
    this.fill();
  }

  // step forward
  stepForward(index) {
    if (index < 0) return false;
    const {students} = this.data;

    let i = index;
    do {
      const student = students[i];
      student.teacherIndex++;
      if (student.teacherIndex < student.teachers.length) {
        return true;
      }
      student.teacherIndex = 0;
      i = i -1;
      console.log('Back:', i);
    } while (i>=0);
    return false;
  }

  // fill this step run, 
  // return failed student index
  stepFill() {
    const {students} = this.data;
    this.reset();
    for(let i=0; i < students.length; i++) {
      const student = students[i];
      const teacher = student.teachers[student.teacherIndex];
      let newSlots = null;
      if ((student.start >= teacher.start) && (student.end <= teacher.end)) {
        newSlots= this.tryMapStudentToTeacher(this.slots, student, teacher);
      }
      if (!newSlots) {
        console.log('End:', i);
        return i;
      } else {
        this.slots = newSlots;
      }
    }
    return students.length;
  }

  // step after prepare
  step() {
    let canStep = true;
    if (!this.restartStep) {
      const index = this.studentStepIndex;
      canStep = this.stepForward(index);
    } else {
      this.restartStep = false;
    }
    if (canStep) {
      this.studentStepIndex = this.stepFill();
    }
    const {students} = this.data;
    const notStopped = this.studentStepIndex >=0 && 
      this.studentStepIndex < students.length;
    return notStopped;
  }

  // step until success, sync version
  stepToNext(cb) {
    // restart or positive index can start
    const canStart = (this.studentStepIndex >=0) || (this.restartStep);
    if (!canStart) return false;
    // index adjusted before start
    if (this.studentStepIndex >=0) {
      this.studentStepIndex = this.studentStepIndex - 1;
    }
    // step until found or stopped
    let notStopped;
    do {
      notStopped = this.step();
      cb && cb(this.studentStepIndex);
    } while (notStopped);
    const canContinue = !(this.studentStepIndex < 0);
    return canContinue;
  }

  // step until found, async version
  stepThrough() {
    // restart or positive index can start
    const canStart = (this.studentStepIndex >=0) || (this.restartStep);
    if (!canStart) {
      return Promise.reject(true);
    };

    // index adjusted before start
    this.studentStepIndex = 0;
    const promise = new Promise((resolve, reject) => {
      let notStopped;
      let i = 0;
      do {
        notStopped = this.step();
        i++;
      } while (notStopped && (i < this.maxSteps));
      const canContinue = !(this.studentStepIndex < 0);
      resolve(canContinue);
    })
    return promise;
  }

  stepError() {
    const {students} = this.data;
    return students.length - this.studentStepIndex;
  }

  stepFound() {
    const {students} = this.data;
    return this.studentStepIndex === students.length;
  }

  // debug info
  teacherInfo() {
    const {students} = this.data;
    return students.map(student => {
      return {
        s: student.id,
        t: student.teachers[student.teacherIndex].id,
        list: student.teachers.map(teacher => teacher.id).join('|')
      }
    })
  }

  stepInfo() {
    const {students} = this.data;
    return students.map(student => student.teacherIndex);
  }
}

const scheduler = new SchedulerService();

export {scheduler};