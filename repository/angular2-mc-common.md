# Global Console - Angular 5
![Market Clearing Header](https://s3.amazonaws.com/qp-photo/mc-common2-header.PNG)

> Works with both *Internet Explorer* 11 and the rest of modern browsers. [Live demo site](http://cggmiu02.us.db.com:8082/)

<br />

## What is it?

Common *CSS* stylesheet and *Angular* components used for *Global Console* apps. 

|          | Framework      | Type      | Version |  Source     | Build       |
|----------| ---------------|-----------|---------|-------------|-------------|
| **_Is_** | Global Console | Demo App  | 3.0     | `src/app`   | `dist`      |
| **_Is_** | Global Console | Style     | 3.0     | `core/scss` | artifactory |
| **_Is_** | Angular        | Module    | 5.0+    | `core/lib`  | artifactory |

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
- Autocomplte component
- Select component (More on `Select` section)
- Datepicker component (More on `Datepicker` section)
- Dialog component (More on `Dialog` section)
- Pane right resizable component

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

The layout component is not visible but controls erro handing and the visibility of the rest of components. It is the default layout component wired with `gc-body` and `gc-content`. Most of time that's all you need to start to code the main area of the page.

```html
  <gc-layout>
    <h1>Hello World</h1>    
  </gc-layout>
```

### Body (with header/footer)

Under the skin, `gc-layout` calls `gc-body` for all branding materials, ex. header, footer and etc..

```html
  <gc-body>
    <h1>Hello World</h1>    
  </gc-body>
```

### Content (with sidebar)

To help inner page layout design, ex. sidebar etc., `gc-body` calls a content layout component. Currently we have two components, `gc-content` and `gc-content-flex`, where `gc-content-flex` uses the latest `flexbox` UI.

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

### Autocomplete

```html
  <gc-autocomplete [(ngModel)]="value" 
    [ngModel]="value" (selectChange)="selectionChange($event)" 
    [items]="selection" [options]="options"
    [disabled]="disabled"
  ></gc-autocomplete>
```

Here, the parameters includes

- `ngModel`, the input form variable
- `items`, key/value array, { key: 'a', title: 'v' }
- `options`, settings associative array
- `disabled`, true to disable the input
- `selectionChange`, event that return selected item
- `options.key`, key of the array, default 'key'
- `options.title`, search of the array, default 'title'

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
- `options.buttons`, if the button row is displayed
- `options.clear`, if clear button is supported
- `options.today`, if today button is supported
- `options.before`, if set, dates before is enabled, JS Date
- `options.after`, if set, JS dates after is enabled, JS Date

For the range picker, 

```html
  <gc-daterangepicker 
    [(ngModel)]="dates" [options]="options"
    [disabled]="disabled" (datesApply)="datesApplied($event)"
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
- `options.apply`, true to have apply button
- `datesApply`, output function when apply button is clicked

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

The `dialog` support quick type such as `ok` and `error`.

```javascript
  import { GcModalService } from '@com.db.globalconsole/ngx-gc';

  @Component({ ... })
  export class AppDemoServicesComponent {
    constructor(private ms: GcModalService) {}
    ok() { 
      this.ms.ok({ 
        title: 'Happy', 
        body: 'Simply Ok!<br />Second line...' 
      }); 
    }
    error() { 
      this.ms.error({ 
        title: 'Error', 
        body: 'Something is wrong here.' 
      });
    }
    prompt() {
      this.ms.prompt({
        title: 'Question',
        body: 'Please enter your name?',
        data: 'Fang'
      }).result.then(res => {
        console.log('Answer:', res);
      }, err => {});
    }
    confirm() {
      this.ms.confirm({
        title: 'Confirmation',
        body: 'Are you sure you want to delete it?'
      }).result.then(res => {
        console.log('Confirmed', res);
      }, err => {});
    }
  }
}
```

The options passed to the above functions are 

- `size`, supports 'sm' and 'lg',
- `dialogClass`, supports 'modal-dialog', 'modal-danger', 'modal-middle',
- `showClose`, display the close button to the dialog,
- `title`, dialog header title,
- `body`, dialog body can be multi-line HTML or text,
- `confirmCaption`, caption for confirm button,
- `confirmClass`: supports 'btn-mc', 'btn-gray' and 'btn-danger'

If you need to build a custom dialog from scratch, ex. with your custom header, footer and body area, you can use `openCustom`.

```javascript
  import { GcModalService } from '@com.db.globalconsole/ngx-gc';
  import { AppDialog } from './ui/dialog';

  @Component({ ... })
  export class AppDemoServicesComponent {
    constructor(private ms: GcModalService) {}
    open() { this.ms.openCustom(AppDialog); }
  }
}
```

The dialog can be custom coded inside `AppDialog` as a regular component with your business logic,

```javascript
  import { DialogRef, ModalComponent, CloseGuard } from 'ngx-modialog';
  import { GcModalContext } from 'com.db.ce.ngx-gc';

  @Component({
    templateUrl: './dialog.progress.html'
  })
  export class AppDialog implements ModalComponent<GcModalContext> {
    context: GcModalContext;
    constructor(public dialog: DialogRef<GcModalContext>) {
      this.context = dialog.context;
    }
  }
```

<br />

### Pane Right

To slide a panel from the right, the width of the panel can be set initially. The content of the panel needs to be provided by inner templates. And the width of the panel can be adjusted by user to make viewing area comfortable.

```html
  <gc-pane-right
    [maxWidth]="width"
    [paneActive]="active"
    (paneToggled)="onToggled($event)"
    (paneResized)="onResized($event)"
  >
    <h1>Report Details</h1>
    <div class="pane-body">...</div>
  </gc-pane-right>
```

The parameters includes

- `width`, the default width of the panel
- `active`, control the visiblity of the pane
- `paneToggled`, event fired when pane is togged
- `paneResized`, event fired when pane is resized

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

Big thank you to Reports Center app author `Rishi Tandon` for various back port contribution from _AngularJS_ to _Angular_.