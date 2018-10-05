// How many minutes in a slot
const slotMinutes = 15;
// How many students a teacher can take at the same slot
const slotMaxStudents = 3;
// Display time of a slot
const slotPrintTime = slot => {
  const total = slot * slotMinutes;  
  const hours = Math.floor(total/60);
  const mins = total - hours*60;
  var s = "00" + mins;
  return hours + ':' + s.substr(s.length-2);
}
// How many teachers in a row in print
const printRowTeachers = 3;
// Split teachers into groups
const printTeacherGroup = teachers => {
  const chunk = (arr, size) => arr.reduce((acc, _, i) =>
    (i % size) ? acc : [...acc, arr.slice(i, i + size)], []
  );
  return chunk(teachers, printRowTeachers);  
}

export {
  slotMinutes,
  slotPrintTime,
  slotMaxStudents,
  printRowTeachers,
  printTeacherGroup
}