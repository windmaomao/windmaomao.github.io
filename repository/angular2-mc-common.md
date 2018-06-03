# Global Console - Angular 5
![Market Clearing Header](https://s3.amazonaws.com/qp-photo/mc-common2-header.PNG)

Works with both *Internet Explorer* 11 and the rest of modern browsers.

<br />

## What is it?

Common *CSS* stylesheet and *Angular* components used for *Global Console* apps. 

|          | Framework      | Type      | Version |  Source     | Build       |
|----------| ---------------|-----------|---------|-------------|-------------|
| **_Is_** | Global Console | Demo App  | 3.0     | `src/app`   | `dist`      |
| **_Is_** | Global Console | Style     | 3.0     | `core/scss` | artifactory |
| **_Is_** | Angular        | Module    | 5.0+    | `core`      | artifactory |

The repo is written in typescript and it is a demo app as well as a core library (with styles) published to artifactory `com.db.ce.ngx-gc`.

> Originated from the success of [*Angular* 1.x version](https://stash.gto.intranet.db.com:8081/projects/CPORT/repos/angular-mc-common/browse), the idea is to share common elements, such as header, footer, menus, form, grid, chart and etc., so that they can be plugged into web applications across different business lines with only couple lines of code. 

<br />

## Install

In order to install it, you'll need the module, the configuration and the styles.

### Module 

Install [`angular-cli`](https://cli.angular.io/) (v1.6 up) to create new app with scss support.

```bash
  ng new test-app --style=scss
```

Install the dependency to your application, 

```bash
  npm i --save com.db.ce.ngx-gc
```

Make sure `typescript` module is installed with version `2.5.2`, if not, please delete the current version and replace it.

```bash
  rm -rf node_modules/typescript
  npm i -D typescript@2.5.2
```

<br /> 

### Configuration

Then add it to your app module `app.module.ts`,

```javascript
  import { GcModule } from 'com.db.ce.ngx-gc';

  @NgModule({
    ...
    imports: [
      GcModule.forRoot(environment),
    ],
    ...
  })
  export class AppModule { }  
```

> Once the module is installed, you want to run `ng serve --aot` to make sure it works with production compilation.

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

### Styles

In order to get style installed, in your `styles.scss`,

```javascript
  $gc-font-path: "../node_modules/com.db.ce.ngx-gc/scss/fonts";
  @import "~com.db.ce.ngx-gc/scss/gc";
```

<br />

## Usage

Both `Jquery` 3.x and `Bootstrap` 3.x is required in `index.html`.

```html
  <script src="assets/js/jquery.min.js"></script>
  <script src="assets/js/bootstrap.min.js"></script>
```

At the body, wrap your content with `gc-layout` tag. That's it, all the rest of components will be displayed on this page, ex. branding, menu, footer, etc.

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
- Select component (More on `Select` section)
- Datepicker component (More on `Datepicker` section)
- Dialog component (More on `Dialog` section)

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

## Layout

### Layout (with auth)

The layout component is not visible but controls erro handing and the visibility of the rest of components.

```html
  <gc-layout>
    <h1>Hello World</h1>    
  </gc-layout>
```

### Body (with header/footer)

In order to including all branding materials, ex. header, footer and etc., you can wrap your content within a body component `gc-body`.

```html
  <gc-body>
    <h1>Hello World</h1>    
  </gc-body>
```

### Content (with sidebar)

To have inner page layout design, ex. sidebar etc., you can further wrap your content within a content component. Currently we have two content components, `gc-content` or `gc-content-flex`.

```html
<gc-content>
  <div content-sidebar>
    Sidebar
  </div>
  <div class="content-mc">
    <h1>Hello World</h1>    
  </div>
</gc-content>
```

```html
<gc-content-flex>
  <div sidebar>Sidebar</div>
  <div detail>Detail</div>
  <div main>
    <div class="content-mc">
      <h1>Hello World</h1>    
    </div>
  </div>
</gc-content-flex>
```

<br /> 

## Components

### Common

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

### Theme

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

### Select

For single select, 

```html
  <gc-select [(ngModel)]="value" 
    [items]="selection" [options]="options"
    [disabled]="disabled"
  ></gc-select>
```

Here, the parameters includes

- `ngModel`, the select input form variable
- `items`, key/value array, { key: 'a', title: 'v' }
- `options`, settings associative array
- `disabled`, true to disable the input
- `options.icon`, specifies the button class, ex. 'btn-gray'
- `options.search`, allow input to search options
- `options.clear`, support a clear button inside the input

For multiple selection list,

```html
  <gc-selects [(ngModel)]="values" 
    [items]="selection" [options]="options"
    [disabled]="disabled"
  ></gc-selects>
```

Here, the parameters are similar as single select, except the `values` variable holds an array of keys in the options list.

<br />

### Datepicker

To pick a date, 

```html
  <gc-datepicker 
    [(ngModel)]="date" [options]="options"
    [disabled]="disabled"
  ></gc-datepicker>
```

The parameters includes

- `ngModel`, holds date in string fomrat
- `options`, settings associative array
- `disabled`, true to disable the input
- `options.format`, specifies the input date format, ex. 'L' or 'D MMM YYYY'
- `options.icon`, specifies the button class, ex. 'btn-gray'
- `options.clear`, if clear button is supported
- `options.today`, if today button is supported

For the range picker, 

```html
  <gc-daterangepicker 
    [(ngModel)]="dates" [options]="options"
    [disabled]="disabled"
  ></gc-daterangepicker>
```

- `ngModel`, holds dates array in string fomrat
- `options`, settings associative array
- `disabled`, true to disable the input
- `options.format`, specifies the input date format, ex. 'L' or 'D MMM YYYY'
- `options.icon`, specifies the button class, ex. 'btn-gray'
- `options.clear`, if clear button is supported
- `options.preset`, true if you want to display presets panel
- `options.presets`, presets array if `preset` is true
- `options.extended`, true to have presets on the left

The `presets` array is given as 

```javascript
    [
      {
        key: 'c0', 
        title: 'Your range',
        dates: [new Date(), new Date(new Date().setDate(new Date().getDate() + 1))]
      }
    ],
```

where 

- `key`, holds an internal key for selection
- `title`, displayed title
- `dates`, the range of the dates in javscript date format


<br />

### Dialog

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

In order to update the core, you can 

```bash
  cd core
  npm publish     // publish to artifctory repo
```

<br />

## Author

- [Fang-A Jin](mailto:fang-a.jin@db.com), Angular Architect
- [Rex Santee](mailto:rex.santee@db.com), Program Manager
- [Andrew Kaiser](mailto:andrew.kaiser@db.com), Program Director

Many thanks goes to ideas and suggestions from `Thomas Rudolph`, `Dave Brinson`, `Lakshmi Satish-Kumar`, `Shikha-A Singh`.

Big thank you to Reports Center app author `Rishi Tandon` for various back port contribution from _AngularJS_ to _Angular_.
