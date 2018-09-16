const teachersInfo = [
    { id: 'Simon',      start: 12, end: 27 },     // 3:00 - 7:00am
    { id: 'Jenni',      start: 12, end: 27 },     // 3:00 - 7:00am
    { id: 'Mohammed',   start: 12, end: 27 },     // 3:00 - 7:00am
    { id: 'Jeff',       start: 12, end: 27 },     // 3:00 - 7:00am
    { id: 'Liam',       start: 12, end: 27 },     // 3:00 - 7:00am
    { id: 'Laura',      start: 12, end: 27 },     // 3:00 - 7:00am
  ];
  const studentsInfo = [
    { id: 'Libba',    start: 12, end: 15 },   // 3:00 - 4:00am
    { id: 'Amir',     start: 12, end: 15 },   // 3:00 - 4:00am
    { id: 'Walker',   start: 12, end: 15 },   // 3:00 - 4:00am
    { id: 'Louise',   start: 12, end: 15 },   // 3:00 - 4:00am
    { id: 'Simon',    start: 12, end: 15 },   // 3:00 - 4:00am
    { id: 'Yaseen',   start: 12, end: 15 },   // 3:00 - 4:00am
    { id: 'Kate P',   start: 12, end: 15 },   // 3:00 - 4:00am
    { id: 'Quaid',    start: 13, end: 16 },   // 3:15 - 4:15am
    { id: 'Jackson',  start: 13, end: 16 },   // 3:15 - 4:15am
    { id: 'Charles',  start: 13, end: 16 },   // 3:15 - 4:15am
    { id: 'Harper',   start: 13, end: 16 },   // 3:15 - 4:15am
    { id: 'Lollie',   start: 14, end: 17 },   // 3:30 - 4:30am
    { id: 'Cooper',   start: 14, end: 17 },   // 3:30 - 4:30am
    { id: 'Guy',      start: 14, end: 17 },   // 3:30 - 4:30am
    { id: 'Lada',     start: 15, end: 18 },   // 3:45 - 4:45am
    { id: 'Addison',  start: 16, end: 19 },   // 4:00 - 5:00am
    { id: 'Bowen',    start: 16, end: 19 },   // 4:00 - 5:00am
    { id: 'Hannah',   start: 16, end: 19 },   // 4:00 - 5:00am
    { id: 'Varsha',   start: 16, end: 19 },   // 4:00 - 5:00am
    { id: 'Heyward',  start: 16, end: 19 },   // 4:00 - 5:00am
    { id: 'Austin',   start: 16, end: 19 },   // 4:00 - 5:00am
    { id: 'Ryan T',   start: 16, end: 19 },   // 4:00 - 5:00am
    { id: 'Eliza',    start: 16, end: 19 },   // 4:00 - 5:00am
    { id: 'Nolan',    start: 17, end: 20 },   // 4:15 - 5:15am
    { id: 'Walker',   start: 17, end: 20 },   // 4:15 - 5:15am
    { id: 'Taylor',   start: 17, end: 20 },   // 4:15 - 5:15am
    { id: 'Ian',      start: 18, end: 21 },   // 4:30 - 5:30am
    { id: 'Berkely',  start: 18, end: 21 },   // 4:30 - 5:30am
    { id: 'George B', start: 18, end: 21 },   // 4:30 - 5:30am
    { id: 'Lennox',   start: 18, end: 21 },   // 4:30 - 5:30am
    { id: 'Sam',      start: 18, end: 21 },   // 4:30 - 5:30am
    { id: 'Yusuf',    start: 20, end: 23 },   // 5:00 - 6:00am
    { id: 'Meagan',   start: 20, end: 23 },   // 5:00 - 6:00am
    { id: 'Peri',     start: 20, end: 23 },   // 5:00 - 6:00am
    { id: 'Hasan',    start: 20, end: 23 },   // 5:00 - 6:00am
    { id: 'Sydney',   start: 20, end: 23 },   // 5:00 - 6:00am
    { id: 'Reese',    start: 20, end: 23 },   // 5:00 - 6:00am
    { id: 'Eva V',    start: 20, end: 23 },   // 5:00 - 6:00am
    { id: 'Joe',      start: 20, end: 23 },   // 5:00 - 6:00am
    { id: 'Katie',    start: 20, end: 23 },   // 5:00 - 6:00am
    { id: 'Tyler B',  start: 21, end: 24 },   // 5:15 - 6:15am
    { id: 'Morgan',   start: 21, end: 24 },   // 5:15 - 6:15am
    { id: 'Audrey',   start: 22, end: 25 },   // 5:30 - 6:30am
    { id: 'Anton',    start: 22, end: 27 },   // 5:30 - 7:00am
    { id: 'Smedes',   start: 22, end: 25 },   // 5:30 - 6:30am
    { id: 'Fiona',    start: 22, end: 25 },   // 5:30 - 6:30am
    { id: 'Joel',     start: 22, end: 27 },   // 5:30 - 7:00am
    { id: 'Lily M',   start: 24, end: 27 },   // 6:00 - 7:00am
    { id: 'Bennett',  start: 24, end: 27 },   // 6:00 - 7:00am
    { id: 'Hayes',    start: 24, end: 27 },   // 6:00 - 7:00am
    { id: 'Isla',     start: 24, end: 27 },   // 6:00 - 7:00am
    { id: 'AG',       start: 24, end: 27 },   // 6:00 - 7:00am
  ];
  const prefsInfo = [
    // { id: 'Libba',  prefers: [], rejects: ['CS'] },
    // { id: 'Louise', prefers: [], rejects: ['CS'] },
    // { id: 'Simon',  prefers: [], rejects: ['SH'] },
    // { id: 'Yaseen', prefers: [], rejects: ['SH'] },
    // { id: 'Hannah', prefers: ['JP'], rejects: ['CS'] },
    // { id: 'Lily M', prefers: ['SH','JP'], rejects: ['CS'] },
    // { id: 'Hayes',  prefers: ['CS'], rejects: [] },
  ];

  export {
      teachersInfo, studentsInfo, prefsInfo
  };