// libraries
import {find, cloneDeep, sortBy, filter, shuffle} from 'lodash';
// services
// import {slotMaxStudents} from './constant';
import Filler from './Filler';
 
function lastName(name) {
  const parts = name.split(' ');
  return parts.length > 1 ? parts[parts.length - 1] : null;
}

// try fill
 function tryFill(config) {
  const student = config.consts.students[config.index];
  const studentLastName = lastName(student.id);
  const teacherIndex = config.positions[config.index];
  const teachers = config.consts.studentTeachers[config.index];
  const teacher = teachers[teacherIndex];
  const maxStudents = config.consts.maxStudents;
  // console.log(student.id, teacher.id);

  const tryFillStudent = (slots) => {
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
      if (students.length === maxStudents) {
        matchAllSlots = false;
      }

      // if teacher has students with unique last name
      if (studentLastName) {
        const lastNames = students.map(prev => lastName(prev));
        if (lastNames.indexOf(studentLastName) >= 0) {
          matchAllSlots = false;
        } 
      }

      // accept teacher on the slot
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

  const newSlots = tryFillStudent(config.slots);

  if (!newSlots) {
    return {
      success: false,
      configNew: config
    };
  }
  return {
    success: true,
    configNew: Object.assign({}, config, { slots: newSlots })
  };
}

// available teacher
function availableTeachers(student, teachers) {
  const avaialbles = teachers.reduce((acc, teacher) => {
    if ((student.start >= teacher.start) && (student.end <= teacher.end)) {
      acc.push(teacher);
    }
    return acc;
  }, []);
  return avaialbles;
}

// filter teacher based on pref
function preferTeachers(teachers, pref, isShuffled) {
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

const findId = (arr, obj) => {
  var search = obj.id.toLowerCase();
  return find(arr, function (item) {
    return item.id.toLowerCase() === search;
  });  
}

// prepare students
function getStudentTeachers(data, shuffleTeacher) {
  const {students, teachers, prefs} = data;
  return students.map(student => {
    // find student pref
    let prefTeachers = availableTeachers(student, teachers);
    const pref = findId(prefs, student);
    prefTeachers = preferTeachers(teachers, pref, shuffleTeacher);
    return prefTeachers;
  });
}

// Use filler to schedule
export default class Scheduler2 {
  // if a teacher order should be shuffled
  shuffleTeacher = true;
  // max steps for solver
  maxSteps = 1000;
  // max students per teacher
  maxStudentsPerTeacher = 3;
  // filler
  filler = null;
  
  constructor() {
    this.filler = new Filler();
  }

  // prepare solver
  prepare(data) {
    const studentTeachers = getStudentTeachers(data, this.shuffleTeacher);
    const students = data.students;
    const consts = {
      maxStudents: this.maxStudentsPerTeacher, 
      students, 
      studentTeachers
    };
    const slots = {};
    const counts = students.map((student,i) => studentTeachers[i].length);
    const config = {consts, slots};
    this.filler.init(counts, config, tryFill);
  }

  // solve to get a solution
  solve() {
    const start = this.filler.start();
    let done = false;
    let solution = null;
    while (!done) {
      const obj = start.next();
      done = obj.done;
      if (!done) {
        solution = obj.value;
      }
    }
    return solution;
  }

}

const scheduler2 = new Scheduler2();
export {
  scheduler2
};
