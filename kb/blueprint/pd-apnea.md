# Apnea

## Services

### storage

- `saveStorage(answers)`
- `resetStorage()`
- `fetchStorage()`

### questions

- `questionDefs`
  - `key: array`
    - `type`
    - `keys`
    - `options` 
- `questionList`
  Question List Array
- `questionAnswers`
  - `key: answer`

### pages

- `pageList`
  Page List Array
  - 'landing'
  - 'tour'
  - etc.
- `pageRoutes`
  - `name`
  - `path` 
- `pageDefs`
  - `name`
  - `next`
  - `question` 
{.tree}

### AppStore

- `status: observable`
- `answers: observable`
  Store all answers
  - pt_idea
- `setAnswer: action.bound`
- `isAnswered: action.bound`
- `storeAnswers: action.bound`
- `fetchAnswers: action.bound`

### router

Routes Array

- `name`
  'about'
- `path`
  '/about'
- `children`
  `pages.pageRoutes`

## Components

### index

- Root
  - `router`
    `router`

### Root

- `router`
- RouterProvider
  via `react-router5`
  - `router`
- App

### App

- Provider
  - `store`
    AppStore
- ScrollToTop
  - `children`
  - `router`
    `withRoute` via `react-router5`
- Page
  - Header
    - `route`
      `routeNode` via `react-router5`
    - `options`
    - Link
      via `react-router5`
  - Main
    - `route`
      `withRoute` via `react-router5`
    - Content
      - `store`
        AppStore
    - Question
      - `field` 
    - Navigation
      - `page` 
      - `store`
      - NextLink
        - `next`
      - Link
  - Footer
    - `route`
      `routeNode` via `react-router5`
    - Link
      via `react-router5`

### Question

Quesiton field and different field type

- Question
  - `field`
  - Field
    - `label`
    - `options`
    - `keys`
    - `component`
- Text
  - `label`
  - `options`
  - `keys`
  - `answers`
  - `answerChange`
- Radio
- Checkbox
- Embedded
  - `options`
  - `keys`
  - `answers`
  - `answerChange`
- Fieldset
  - `label`
  - `options`
  - Field
    - `label`
    - `options`
    - `keys`
    - `component`










