# Scheduler

- Services

  - constant

    - `slotMaxStudents`
      3
    - `slotMinutes`
      15
    - `slotsInDuration(minutes)`
    - `slotsPerHour`
    - `slotPrintTime(slot)`
    - `slotHourShift`
    - `displayTimeToSlot(time)`
    - `jsDateToSlot(date)`
    - `printRowTeachers`
      3
    - `printTeacherGroup(teachers)`

  - ~~SchedulerService~~

    Retire to hold data only

    - `acceptPref`

    - `shuffleTeacher`

    - `prepare()`

    - `fill()`

    - `stepForward(index)`
      Move one step further in position

    - `stepFill()`
      Try to fill based on current step

    - `step()`

      One step forward and fill 

      - `return`
        notStopped flag

    - `stepToNext()`

      Step until find next possible success

      - `return`
        canContinue flag

  - Filler

    - `config`
    - `counts`
      [2,3,2] choices
    - `typeFunc`
      check if works
    - `initConfig`
    - `init(counts, initConfig, tryFunc)`
    - `solve(config)`
    - `* start()`
      Generator for solutions

  - Scheduler2

    - `shuffleTeacher`
      Boolean
    - `maxStudentsPerTeacher`
      3
    - `data`
      - `students`
      - `teachers`
      - `prefs`
    - `filler`
      Filler object
    - `prepare(data)`
    - `solver()`

  - AppStore

    - `teachers`
    - `students`
    - `prefs`
    - `schedule`
    - `setupSchedule`
    - `planSchedule`

- Components

  - index

    - Layout
    - App
    - AppStore

  - Layout

    via `material-ui`

    - createMuiTheme
    - MuiThemeProvider
    - CssBaseline
    - Navbar
      - AppBar
        via `Material`

  - App

    - Teacher `/teacher`

      - `teachers`
        teachers
      - `onChange`
        setTeachers
      - Table
        via `material-ui`
      - CsvParse
        via `react-csv-parse`

    - Student `/student`

    - Preference `/pref`

    - Schedule `/`

      - Print

        Print version of plans

        - `slots`
        - `usages`
        - ReactToPrint
          via `react-to-print`
        - Slots
          - `slots`
          - `ids`
          - Table
            via `Material`

      - ~~PlanList the schedules plan~~

    - ~~PrintPage `/print`~~