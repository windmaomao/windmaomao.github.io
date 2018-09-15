import {find, cloneDeep, sortBy} from 'lodash';

export default class SchedulerService {
  constructor() {
    this.slotMins = 15;
    this.maxStudents = 3;
    this.acceptPref = true;
    this.acceptCapacity = true;
    this.teacherMaxCap = 100;
    this.studentMinCap = 30;
    this.errors = [];
    this.studentCap = {};
  }

  min2slot(min) {
    return min/this.slotMins;
  }
  slot2time(slot) {
    const total = slot*this.slotMins;  
    const hours = Math.floor(total/60);
    const mins = total - hours*60;
    var s = "00" + mins;
    return hours + ':' + s.substr(s.length-2);
  }
  
  // match a techer
  matchTeacher(student, teachers, slot) {
    return teachers.reduce((acc, teacher) => {
      // if found, skip to the end
      if (acc) {
        return acc;
      }
      // if teach qualify
      if ((student.start < teacher.start) || (student.end > teacher.end)) {
        return null;
      }
      
      if (teacher.id in slot) {
        const students = slot[teacher.id];
        if (students.length < this.maxStudents) {
          return teacher;
        } else {
          return null;
        }
      } 
      return teacher;
    }, null);
  }

  totalCapacity(students) {
    return students.reduce((acc, student) => {
      return acc + this.studentCap[student];
    }, 0);
  }
  
  // apply map
  tryMapStudentToTeacher(slots, student, teacher) {
    let matchAllSlots = true;
    const slotsMap = cloneDeep(slots);

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
      // if teacher has reach max capacity
      if (this.acceptCapacity) {
        const currCap = this.totalCapacity([...students, student.id]);
        if (currCap > this.teacherMaxCap) {
          matchAllSlots = false;
        }  
      }
      // accept this teacher
      if (matchAllSlots) {
        students.push(student.id);
      }
    }
    
    if (matchAllSlots) {
      return slotsMap;
    } else {
      return null;
    }
  }
  
  // find a teacher
  tryMapTeachers(slots, student, teachers) {
    for (let i=0; i<teachers.length; i++) {
      const teacher = teachers[i];
      // console.log('Teacher', teacher);

      // if teacher quality
      if ((student.start >= teacher.start) && (student.end <= teacher.end)) {
        // try use this teacher
        const tryMap = this.tryMapStudentToTeacher(slots, student, teacher);
        // console.log('Map', tryMap);
        if (tryMap) {
          return tryMap; 
        }
      }
    }
    return null;
  }
  
  // fill slots info
  fillSlots(students, teachers, prefs) {
    this.errors = [];
    // populate student cap
    if (this.acceptCapacity) {
      this.studentCap = {};
      students.forEach(student => {
        this.studentCap[student.id] = student.capacity || this.studentMinCap
      });
    }
    const slots = students.reduce((acc, student) => {
      // console.log(student);
      
      // find student pref
      let prefTeachers = [];
      if (this.acceptPref) {
        const pref = find(prefs, { 'id': student.id });
        prefTeachers = this.sortTeachers(teachers, pref);
        // console.log(prefTeachers);
      } else {
        prefTeachers = teachers;
      }
      const tryMap = this.tryMapTeachers(acc, student, prefTeachers);
      // console.log(tryMap);
      if (!tryMap) {
        this.errors.push(student.id + ' cannot find teacher.'); 
        return acc;
      }
      return tryMap;
    }, {});
    return slots;
  }
  
  // sort teachers by preferences
  sortTeachers(teachers, pref) {
    if (!pref) return teachers;
    const list = cloneDeep(teachers);
    list.forEach(teacher => {
      let ranking = 0;
      if (pref.prefers.indexOf(teacher.id) >=0) {
        ranking = -1;
      } 
      if (pref.rejects.indexOf(teacher.id) >=0) {
        ranking = 1;
      }
      teacher.ranking = ranking;
    });
    return sortBy(list, ['ranking']);
  }
}