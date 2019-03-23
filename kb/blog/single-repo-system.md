# Mono Repo Setup

> Pattern: "Don't touch me! If you have to, you need to go through a process." 

*Note: the process mentioned above is mainly through refactoring, which ends up with a unit in a parent folder. What a parent folder does is mainly composition which treats its children as independent  identities.*  

The idea is to see if we can follow the above pattern inside a single repo to achieve the first level of module seperation therefore, if required, we can spin off module to a different codebase upon the project maturity. 

## Folder

```bash
/src
  App.js          
  /Main
    Main.js
    /About
  /Registration
  /Gpat
```

Under each App folder (first letter uppercase), it stictly follows the above pattern recursively so that the child is **restricted** in accessing code from the parent folder, as long as it is servering the feature role, call it an app, a page or a feature. Inisde an App folder, direct reference via `../` or `sibling App package` could be avoided in general while `./` or `@package` is encouraged. 

Not Good
```
  import ... from '../../../xxx'
  import GPAT from '@icomply-GPAT'        <- sibling app
```

Good
```
  import ... from './xxx'
  import { once } from '@icomply-core'    <- core or shared repo
```

*Note: Not being able to refer material from the parent folder directly creates problem for using legacy code, in order to do that requires putting them into an utility folder which doesn't follow this pattern. And these special utility folder will be the first place to look for refactoring into a resuable repo in future. In general, a parent folder collects information from its child folders and then (re-)publish the nessary interface that its parent can collect. This ensures we can rely on composition to reach an isolated scope for child components. This circles back to the "Process" concept defined at the beginning.*


## App

Take a sample App `Registration`, it can be self-contained with its own routes, states as well as components. 

```bash
  /Registration
    Registration.js
    regRoutes.js
    regReducers.js
```

`Routes` are defined as 

```javascript
const Routes = [
  {
    path: '/', 
    routes: [
      {
        path: '/faq',
        component: FaqPage
      },
      {
        path: '/about',
        component: AboutPage
      }
    ]
  },
]
```

`Reducers` is also recursively collected form within as,

```javascript
import counterReducer from './Page1/counterReducer'
const mainReducers = combineReducers({
  counter: couterReducer,
  ...
})
```

*Note: You can think of the `Root` folder as the root application sitting right under `/src` folder without being created explicitly. The name `Root` varies from project to project, and could be called `Root`, `App`, `Main`, or remains un-named implicitely.*

## Reusability

> "By limiting the cases of the parent dependency, during the expansion it gives the project back the sanity and clarity while leaving the debt burden behind."

This repo setup is more or less like some degree of anti-reusability asking to limit the resusability usage to only certain folders. It sets the boundary where you can apply this capability and limit your reach of code reuse within its own domain. 

## Summary

In order to grow quickly, we spin new repos. But the new topology hides the complexity of the business and leaves complex dependency matrix behind. Therefore here we put things back into a mono repo so we can get a closer look at their relationship once again and hopefully make better decisions on how to execute our masterplan. And by doing that, we don't sacrefice the posibility of spin-off, on the country, we reinforce it by understanding the intrinsic relationship better. 



