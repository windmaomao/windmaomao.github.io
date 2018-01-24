![Market Clearing Header](https://mydb.intranet.db.com/servlet/JiveServlet/downloadImage/38-84374-585937/mc-common2-header.PNG)

# Global Console Angular (^5.0.0) with Autobahn(ADK) theme
Works with both *Internet Explorer* 11 and the rest of modern browsers.

> For more information on reusable components, and the rational behind this approach, please check out [Reusable components of websites](https://stash.gto.intranet.db.com:8081/projects/CPORT/repos/angular-mc-common/browse/REUSABLE.md) *- Building UI with less tech burden*.

<br />

Common *CSS* stylesheet and *Angular* components used for *Global Console* apps. This is written in new angular typescript and uses *Autobahn* *ADK* theme as the foundation. 

Continuing from the success of *Angular* 1.x, the idea is to share common elements, such as header, footer, menus, select, grid, calendar and etc., so that they can be plugged into web applications across different business lines with only couple lines of code. 

You can check out a [live demo site](http://cggmiu02.us.db.com:8082/) here.

<br />

## Install

Install the dependency to your application, 

```
  npm i --save @com.db.globalconsole/ngx-gc
```

> In case you have trouble getting this package, you can pull this repo and copy folder `/core/dist` under your project folder `node_modules` and rename it to `@com.db.globalconsole/ngx-gc`.

> Or you can try `npm` link approach, go to folder `/core/dist`, launch `npm link`. Then go to your project folder and launch `npm link @com.db.globalconsole/ngx-gc`.

<br /> 

Then add it to your app module `app.module.ts`,

```javascript
  import { GcModule } from '@com.db.globalconsole/ngx-gc';

  @NgModule({
    ...
    imports: [
      GcModule.forRoot(environment),
    ],
    ...
  })
  export class AppModule { }  
```

The global console settings variable `environment` has the following format,

```javascript
  const environment = {
    common: { 
      app: 'App',
      theme: 'dark',
      menu: true,
    },
    portal: {},
    entitlement: {}
  }
```

> The `environment` variable can be stored using the angular built-in environment file located at `/src/environments`, but it is optional.

<br />

In order to get style installed, in your `styles.scss`,

```javascript
  @import "./adk/adk";  <- your wadk-core repo or source code

  $gc-font-path: "~@com.db.globalconsole/ngx-gc/scss/fonts";
  @import "~@com.db.globalconsole/ngx-gc/scss/gc";
```

> The above example uses `adk` light theme source code inside the app, and officially you can use `wadk-core` [SASS repo](https://stash.gto.intranet.db.com:8081/projects/ADKW/repos/wadk-core/browse) directly. 

<br />

## Dependency

Both `Jquery` and `Bootstrap` is required in `index.html`.

```html
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
```

## Usage

Wrap your content with `gc-layout` tag. That's it, all the rest of components will be displayed on this page, ex. branding, menu, footer, etc.

```html
  <gc-layout>
    <h1>Hello World</h1>    
  </gc-layout>
```

<br />

## Features

Common services
- Config service
- Auth service
- Entitlement service
- Theme service
- Spinner service
- Dialog service

Angular components
- Error component
- Branding component
- Menu component
- Menu component (ADK style)
- Appnav component
- Fly-in menu component
- Footer component
- Select component (More on `Select component` below)
- Datepicker component (More on `Datepicker component` below)
- Dialog component (More on `Dialog component` below)

Styles
- ADK light style
- Global console light and dark style
- Global console icon set
- AgGrid style (ag-wadk and ag-mc)
- HighCharts theme configuration

Layouts
- Global console error wrapper layout
- Global console body layout
- Global console main content layout
- ADK flex body layout
- Custom plain layout (w/o Auth entitlement)
- Embedded iframe layout (w/o header and footer)

Thrid Party used in Demo
- AgGrid
- Highcharts

<br />

## Components

### Common service

Once `GcCommonService` is imported, you can use utility function

- `toggleTheme`, toggle light and dark
- `toggleFly`, toggle the hamburger fly menu
- `toggleSpinner`, activate the spinner manually
- `toggleSidebar`, toggle app sidebar navigation

```javascript
  import { GcCommonService } from '@com.db.globalconsole/ngx-gc';

  @Component({
    ...
  })
  export class AppComponent {   
    constructor(private cs: GcCommonService) {}
    theme(val) { this.cs.toggleTheme(val); }
    fly(val) { this.cs.toggleFly(val); }
    spin(val) { this.cs.toggleSpinner(val); }
    slide(val) { this.cs.toggleSidebar(val); }
  }
```

<br />

### Theme aware

Call `toggleTheme` to switch theme manaully and in order to auto load/set theme via local storage,

```javascript
  export class AppComponent {   
    constructor(private cs: GcCommonService) {
      const themeKey = 'global-console-theme';
      const theme = localStorage.getItem(themeKey) || cs.settings.theme;
      cs.toggleTheme(theme);
      cs.themer$.subscribe((value) => {
        localStorage.setItem(themeKey, value);
      });
    }
  }
```

### Select component

For single select, 

```html
  <gc-select [(ngModel)]="value" [items]="selection" [options]="options"></gc-select>
```

Here, the parameters includes

- `ngModel`, the select input form variable
- `items`, key/value array, { key: 'a', title: 'v' }
- `options`, settings associative array
- `options.icon`, specifies the button class, ex. 'btn-gray'
- `options.search`, allow input to search options
- `options.clear`, support a clear button inside the input

For multiple selection list,

```html
  <gc-selects [(ngModel)]="values" [items]="selection" [options]="options"></gc-selects>
```

Here, the parameters are similar as single select, except the `values` variable holds an array of keys in the options list.

<br />

### Datepicker component

To pick a date, 

```html
  <gc-datepicker [(ngModel)]="date" [options]="options"></gc-datepicker>
```

The parameters includes

- `ngModel`, holds date in string fomrat
- `options`, settings associative array
- `options.format`, specifies the input date format, ex. 'L' or 'D MMM YYYY'
- `options.icon`, specifies the button class, ex. 'btn-gray'
- `options.clear`, if clear button is supported
- `options.today`, if today button is supported

For the range picker, 

```html
  <gc-daterangepicker [(ngModel)]="dates" [options]="options"></gc-daterangepicker>
```

- `ngModel`, holds dates array in string fomrat
- `options`, settings associative array
- `options.format`, specifies the input date format, ex. 'L' or 'D MMM YYYY'
- `options.icon`, specifies the button class, ex. 'btn-gray'
- `options.clear`, if clear button is supported


<br />

### Dialog Component

```javascript
  import { GcModalService } from '@com.db.globalconsole/ngx-gc';

  @Component({ ... })
  export class AppDemoServicesComponent {
    constructor(private ms: GcModalService) {}
    open() { this.ms.open('alert', { title: 'Title', body: 'Question?' }); }
    ok() { this.ms.open('alert', { title: 'Happy', body: 'Simply Ok!<br />Second line...' }); }
    prompt() { this.ms.open('prompt', { title: 'Question', body: 'Your name?' }); }
    terms() { this.ms.openTerms(); }
}

```

<br />

## Third Party

### Ag Grid

#### Setup

```javascript

  import { AgGridModule } from 'ag-grid-angular';
  import { LicenseManager } from 'ag-grid-enterprise/main';
  LicenseManager.setLicenseKey('xxx');

  @NgModule({
    imports: [
      AgGridModule.withComponents([]),
```

<br />

#### Usage

The library provides the style for integration with third party grid components. For instance,

```html
  <ag-grid-angular class="ag-mc"></ag-grid-angular>
```

<br />

### Highcharts

#### Setup

```javascript
  import { ChartModule } from 'angular2-highcharts';
  import * as highcharts from 'highcharts';
  import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
  export function highchartsFactory() {
    const hc = require('highcharts');
    const dd = require('highcharts/modules/drilldown');
    dd(hc);
    return hc;
  }

  @NgModule({
    imports: [
      ChartModule,
    ],
    providers: [
      {
        provide: HighchartsStatic,
        useFactory: highchartsFactory
      }
    ]

```

<br />

#### Usage

```html
  <chart [options]="options"></chart>
```

<br />

## Core module

The library is build via the core module `@com.db.globalconsole/ngx-gc`, which is located inside `core` folder. From there the `npm` package is published inside `core/dist` folder.

<br />

## Development

To develop, pull the developer branch and you can do one of the following

```
  npm start       // start dev mode in watch mode
  npm run build   // build the production version
  npm test        // perform unit testing in watch mode
  npm run e2e     // perform e2e testing in single run
  npm run e2e:watch   // in watch mode
```

<br />

## Author

- [Fang-A Jin](mailto:fang-a.jin@db.com), Angular Architect
- [Rex Santee](mailto:rex.santee@db.com), Program Manager
- [Thomas Rudolph](mailto:thomas.rudolph@db.com), Technical Director
- [Andrew Kaiser](mailto:andrew.kaiser@db.com), Program Director

Many thanks goes to each app contributor who is dedicated to put efforts in integrating this work to their applications.

