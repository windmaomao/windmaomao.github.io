// How many students a teacher can take at the same slot
const slotMaxStudents = 3;
// How many minutes in a slot
const slotMinutes = 15;
// How many slots in minutes
const slotsInDuration = minutes => minutes / slotMinutes;
// How many slots in a hour
const slotsPerHour = slotsInDuration(60);
// Display time of a slot
const slotPrintTime = slot => {
  const total = slot * slotMinutes;  
  const hours = Math.floor(total/60);
  const mins = total - hours*60;
  var s = "00" + mins;
  return hours + ':' + s.substr(s.length-2);
}
// How many hour do we shift to start the day
const slotHourShift = 12;
// How many slots in hour and min
const _time2slot = (hour, min) => {
  return hour * slotsPerHour + min / slotMinutes - slotHourShift * slotsPerHour;  
}
// Slot number of a display time
const displayTimeToSlot = time => {
  const parts = time.split(':').map(item => parseInt(item, 10));
  return _time2slot(parts[0], parts[1]);
}
// Slot number of a js date
const jsDateToSlot = date => {
  return _time2slot(date.getHours(), date.getMinutes());
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
  slotMaxStudents,
  slotMinutes, slotsInDuration, slotsPerHour, slotPrintTime,
  slotHourShift, displayTimeToSlot, jsDateToSlot,
  printRowTeachers, printTeacherGroup
}