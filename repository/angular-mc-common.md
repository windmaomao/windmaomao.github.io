![Market Clearing Header](https://mydb.intranet.db.com/servlet/JiveServlet/downloadImage/38-84374-462499/mc-common-header.PNG)

# Market Clearing Common Stylesheet and Components

Common *CSS* stylesheet and *Angular* components used for *Global Prime Portal* and *Market Clearing Console* apps. The idea is to create common elements, such as header, footer, menus and etc., so that they can be plugged in to apps without lines of change.

For more information on reusable components, and the rational behind this approach, please check out [Reusable components of websites](https://stash.gto.intranet.db.com:8081/projects/CPORT/repos/angular-mc-common/browse/REUSABLE.md) *- Building UI with less tech burden*.

<br />

## Demo

Follow the simple three steps program, a) identify your current content, b) wrap it with a *HTML* tag, and c) apply a *CSS* tag.

![](https://mydb.intranet.db.com/servlet/JiveServlet/downloadImage/38-84374-462497/mc-common-code.PNG)

Step 1 - _Start with your current content_

```html
  <h1>Hello World</h1>
```

Step 2 – _Wrap your content with header and footer_

```html
  <div mc-body>
    <h1>Hello World</h1>
  </div>
```

Step 3 – _Apply styles to your content_

```html
  <div mc-body class="content-mc">
    <h1>Hello World</h1>
  </div>
```

<br />

## Apps

There're quite a list of (domain) applications on-boarding with this swiss-knife approach, it not only works with *Angular* app, but aslo adapts easily to *JSP*, *GWT* or any other embedded DB framework.

![](https://mydb.intranet.db.com/servlet/JiveServlet/showImage/38-84374-462498/mc-common-sidebar-slim.PNG)

- GlobalPrime domain (35 apps +), via *JSP* native
- ReportNow app, via *Angular* native
- Dispute Management app, via *Angular* native lazy bootstrap
- Internal Reporting app, via *Angular* native
- Invoice Management, via *Angular* native
- StaticData Hub domain (xx apps +), via GWT native

<br />

#### Features

Common service
- Auth service (swappable)
- Spinner service (wired with http)
- Spinner service (manual)
- Theme service
- Dialog service

Angular components

- Branding component
- Menu component
- Fly-in menu component
- Footer component
- Single select component
- Multiple select component
- Dialog component
- Page slides component
- Datepicker component
- Highchart component
- Error component

CSS styles

- Dark & light theme
- DB Icons
- Navbar
- Sidebar
- Dropdown
- Buttons
- Checkbox
- Input
- Table
- Dialog
- Grid UI

<br />

## Install

#### Local

Setup your angular application as you normally do via `npm` or `bower`. Install it manually to the modules folder, and then check out the repo there

```bash
  cd node_modules (or bower_components)
  git clone {this repo}
```

*Notes: Local pull is currently required since npm custom git install does not work well with DB proxy.*

<br />

#### CDN

Depending on different environement that you're deploying the application, you should have this library already installed as third party library. You can grab it directly from the following links.

- [Dev1, v3](https://dev1.gpx.db.com/global-console/mc-common/v3/mc-common.js)

*Notes: CDN is a better approach if you want the last official deployed version. Use relative link if possible to faciliate future deployment.*

> To prevent getting an earlier version, you could code the link with a version tag, ex. `mc-comm.js?_rev=439834`.

<br />

## Usage

In your app, ex. `app.js`, add the following dependency

```javascript
  angular.module('app', ['dbMC']);
```

In your entry template, ex. `index.html`, add the following reference

```html
  <script src="./dist/mc-common.js"></script>
```

If you want to checkout examples, you need to include demo directives
```html
  <script src="./dist/mc-common-demo.js"></script>
```

and

```html
  <div mc-body>
    <h1>Hello World</h1>
  </div>
```

*jQuery, Bootstrap and AngularJS* need to be referenced in your app `index.html`.

- jQuery 1.x+
- Bootstrap 3.x
- AngularJS 1.5 or 1.6
- AngularJS Sanitize
- AngularJS Animate
- Moment 2.18 (if date picker is used)
- Moment range (if range picker is used)

> A working example `index.html` can be found under `/src` folder, [visit](https://stash.gto.intranet.db.com:8081/projects/CPORT/repos/angular-mc-common/browse/src/index.html).
>
> Warning: please make sure your content ('Hello World' as an example here) sit inside `mc-body` div, not before or after, even though `header` and `footer` are injected before and after your content,
>
> Warning: please load the above dependencies first, and then load your application specific dependencies. Your application specific `CSS` or `JS` can override the default behavior after, not before.
>
> Warning: please make sure `ng-app` is defined on tag `<body>` or `<div>` but not `<html>`, some team experienced library conflict due to this issue, ex. dropdown is not popping up etc. Not really sure the cause of the [issue](http://stackoverflow.com/questions/15790432/placement-of-the-ng-app-directive-html-vs-body).

<br />

## Style Guide

A visual overview of all supported UI elements is hosted at [Cggmiu](http://cggmiu02.us.db.com:8081/) and [Gpp](https://dev1.gpx.db.com/global-console/mc-common/v3/).

<br />

#### Theme

_Light_ and _Dark_ theme are supported natively and can be switched between using the dropdown menu on the right top corner of the branding bar. When _Dark_ theme is turned on, `dark` class is set to your `body` tag.

![](https://mydb.intranet.db.com/servlet/JiveServlet/downloadImage/38-84374-462478/mc-common-colors.PNG)

You can flip between them programmatically on the run via event.

```javascript
  // option is 'dark' or 'light', or empty to just toggle
  $rootScope.$broadcast('theme', option);
```

> Each theme supports 3 background, 3 front and 1 border colors. Additional primary, default as well as common Bootstrap colors are provided.

<br />

#### Content

In general, styles are borrowed from *Bootstrap*, especially the syntax. However in order to support our version, we need to attach additional class tag, mostly in the prefix or postfix format of `-mc`, ex. for content, we do `content-mc`.

```html
  <div class="content-mc">
    <p>Hello World</p>
    <!-- all other elements -->
  </div>
```

<br />

#### Link

Add a class `link` to element `a` to get theme aware links.

```html
  <a class="link" href="/">Link</a>
```

#### Icons

![](https://mydb.intranet.db.com/servlet/JiveServlet/downloadImage/38-84374-462489/mc-common-icons.PNG)

All DB supported icons (20+) are built inside. Use class tag `mc-` to include them.

```html
  <i class="mc-db-logo"></i>
  <i class="mc-search"></i>
```

<br />

#### Navbar

Navbar uses `nav-mc` class on top of `nav`.

```html
  <ul class="nav nav-mc">
    <li><a href="index-content.html">Content</a></li>
  </ul>
```

<br />

#### Table

Table uses `table-mc` class on top of `table-condensed` and `table-hover`.

```html
  <table class="table table-hover table-condensed table-mc">
    <!-- ... -->
  </table>
```

If you want to support basic functionalities with filter, sort, and group-by, you can checkout one of the implementation via 'ng-table' at `index-table.html` under `dist` folder.

<br />

#### Button

Button uses `btn-mc`, similar to `btn-primary` and etc.

```html
  <button class="btn btn-mc btn-xs"></button>
  <!-- OR -->
  <a class="btn btn-mc btn-xs"></a>
```

<br />

#### Checkbox

Checkbox uses `checkbox` default tag.

```html
  <div class="checkbox checkbox-primary checkbox-inline">
    <input type="checkbox" checked />
    <label>Apple</label>
  </div>
```

There's a special tree like checkbox, you can toggle it to collapse and expand tree nodes.

```html
  <div class="checkbox checkbox-tree">
    <input type="checkbox" checked />
    <label></label>
  </div>
```

<br />

#### Form

Form element by default uses extra small version `-xs` as the default size.

```html
  <!-- Text -->
  <input class="form-control input-xs" />
  <!-- Native select -->
  <select class="form-control input-xs"></select>
```

> Warning: you should not use `<span>` for form elements.

<br />

#### Field - Select

MC Common select input requires special attention, in order to use it with consistent look and feel across browsers, we'll rely on a directive `mc-select2` for single select and `mc-select2-multiple` for multiple selection.

```html
  <div mc-select2 name="'select1'" ng-model="value" items="selection" options="options"></div>
  <div mc-select2-multiple name="'select2'" ng-model="values" items="selection" options="options"></div>
```

Here, the parameters includes

- `name`, a string for classical input name, needs quotation around it
- `items`, key/value array, { key: 'a', title: 'v' }
- `ng-model`, the select input form variable, holds one key for single selection, a key array for multiple selection
- `ng-change`, fire when selection value(s) changed.
- `options`, settings associative array
- `options.icon`, specifies the button class, ex. 'btn-gray'
- `options.search`, allow input to search options
- `options.key`, key name if not `key`
- `options.title`, title name if not `title`
- `options.clear`, support a clear button inside the input
- `options.group`, key for grouping items for display

<br />

#### Field - Date picker

Date picker relys on directive `mc-datepicker` or `mc-datepicker-double`.

```javascript
  <div mc-datepicker name="datePS1" ng-model="date" options="options"></div>
  <div mc-datepicker-double name="datePS2" ng-model="dates" options="options"></div>
```

- `name`, a string for classical input name, needs quotation around it
- `ng-model`, holds date in string fomrat, or array of strings for range picker
- `ng-change`, fire when selection values changed
- `options`, settings associative array
- `options.format`, specifies the input date format, ex. 'L'
- `options.icon`, specifies the button class, ex. 'btn-gray'
- `options.before`, allow selection before a certain date
- `options.after`, allow selection after a certain date
- `options.clear`, if clear button is supported
- `options.today`, if today button is supported
- `options.apply`, a function call when apply button is clicked
- `options.monthSelect`, if month and year can be picked

If you find more examples under `/src/demo/page/page.calendar.*`.

<br />

#### Dialog

Modal dialogs are built-in as services that you can read more in `Dialog` sections. `Dialog` service depends on 'ngSanitize' module which needs to be added to `index.html` and app module definition.

<br />

#### Spinner

There're two version of spinner. One is a build-in service coupled with each http call. You can turn it off via `settings`, read more in `Settings` section. When enabled, this will display a spinner on right side of menu.

Another version of spinner is site-wide spinner which can be triggered by user at run time by adjusting the spinned variable at `rootScope`.

```javascript
  $rootScope.spinned = false;
  $rootScope.spin = function(status) {
    if (status) {
      $rootScope.spinned = status;
    } else {
      $rootScope.spinned = !$rootScope.spinned;
    }
  }
```

<br />

#### Grid UI

Attach `grid-mc` class as well as `grid-header` and `grid-footer` under.

```html
  <div class="grid-mc">
    <div class="grid-header">
      <!-- Header dropdowns -->
    </div>
    <div ui-grid="options"></div>
  </div>
```

```javascript
    var footerTempate = '<div class="grid-footer"></div>';
```

<br />

#### Error

Use `mc-auth` to display a simple error to the screen.

```html
  <div mc-auth error="error"></div>
```

`error` can be a single string or an object of,
- `status`, a status string, ex. '404'
- `data`, complete description of the error.

#### CSS

Stylesheets can be exported as `mc-common.css` by running `node-sass mc.scss mc.css`. By default the stylesheet is **not** exported separately. If you want to use it separately, you need to switch to use `mc-common.slim.js` which exclude the `CSS` from `JS`. An example can be found in `index-slim.html`.

<br />

## Layout (Experimental)

> Layout isn't 100% supported by the library, we provide them as an example on how you can create custom one. Please feel free use your own version if you don't find them suitable for your application.

In order to have inner content layout (ex. sidebar), you can use `mc-content` inside `mc-body`.

```html
  <div mc-body>
    <div mc-content>
      <p>Hello World</p>
    </div>
  </div>
```

`mc-content` supports two placeholder, `content-sidebar` and `content-editor`. If you place any content inside them, they will be displayed in sidebar and editor panel respectively. You can find a working example `index-content.html` under `dist` folder.

```html
  <div mc-content>
    <content-sidebar>
      <!-- your implementation of sidebar content -->      
    </content-sidebar>
    <!-- your implementation of content -->
    <p>Hello World</p>
    <content-editor>
      <!-- your implementation of editor content -->
      <p>Advanced search</p>
    </content-editor>
  </div>
```

> Every application has different needs for overall layout, so `mc-content` is provided here just an _Example_ instead of the _One_ layout for your application. Couple of other options includes,
>
> a) Simple, use bootstrap basic layout. Example in `index-styles.html`
>
> b) Medium, use custom layout, similar to `mc-content`. Example in `index-content.html`
>
> c) Advanced, use layout framework, ex. flex etc. Example in `index-layout.html`
>

<br />

## Settings

```javascript
  angular.module('app', ['dbMC'])
    .config(function(CommonProvider) {
      CommonProvider.setOptions({
        domain: 'Market Clearing Console',
        app: 'Dispute Management',
        server: 'UAT',
        type: 'mcc',
        menu: false,
        sidebar: true,
        editor: true,
        panel: true,
        footer: false,
        skin: 'light',
        spinner: false,
      });
```

General settings can be set via `Common` provider. They include,

- `domain`: domain name, ex. "GlobalPrime" or "Market Clearing Console".
- `app`: application name, ex. "Static Data Hub" or "Dispute Management".
- `server`: server name, ex. "DEV", "UAT" and should be unset for production.
- `type`: shortcut name, ex. "gpp" or "mcc", it'll set default options.
- `menu`: set to false if you don't want to load menu row.
- `sidebar`: set to true if you want to display side menu upon loading.
- `editor`: set to false if you want to disable editor panel.
- `panel`: set to true if you want to toggle right panel.
- `footer`: set to false if you don't want to display footer.
- `skin`: toggle between 'light' and 'dark' theme. Or set 'off' to disable it.
- `spinner`: set to true if you want to use spinner for http calls.

<br />

## Auth

You get build-in authentication and authorization via `Auth` service. If you want to bypass it, you  can set the service to `dev`, otherwise the service will be turned on by default.

Rules can be turned on/off via auth implementation services, ex. `Portal` or `Ea` etc.  

```javascript
  angular.module('app', ['dbMC'])
    .config(function(AuthProvider) {
      AuthProvider.setOptions({ service: 'dev' });
    })
```

> Warning: any `Auth` service's job is to communicate with *WebSSO* via browser cookie session and resolve entitlement for accessing applications. In order for your app to on-board, there're two options.
>
> Option 1: deploy your app to *GlobalPrime* server equipped with *WebSSO* and *Auth* service `PortalServices`.
>
> Option 2: deploy your app to your own server equipped with *WebSSO* and your own implementation of *Auth* service, similar to `PortalServices`.

<br />

### Portal Service

`Portal` service is one of the `Auth` implemenation, since we could have multiple auth server and different ways of handling authroization for app domains. If the service is enabled, it'll call `/PortalService`. You can setup to use sample data for your dev environment.

```javascript
  angular.module('app', ['dbMC'])
    .config(function(PortalProvider) {
      PortalProvider.setOptions({ sample: true });
    })
```

<br />

### EA Service

`Ea` service is our next new `Auth` implementation. You can disable it in your dev environment via below approach, otherwise it'll be enabled by default in any deployed server.

```javascript
    var locals = ['localhost', 'cggmiu02.us.db.com'];
    if (locals.indexOf(location.hostname) >=0 ) {
      PortalProvider.setOptions({ sample: true });
      EaProvider.setOptions({ sample: true });
    }
```

In order to prevent conflicts between different auth system, currently EA information will be attached to `Auth.user.ea` under `Auth` service. Ex.

<br />

### User

Once authenticated in, you can access `user` variable (*Singleton*) of *Auth* in two ways, inside controller via `Auth` component,

```javascript
  angular.module('app')
    .controller('Ctrl', function($scope, Auth) {
      $scope.user = Auth.user;
    })
```

and inside template via `$parent`

```html
  {{ $parent.user }}
```

<br />

### Hook

Getting authenticated and fetching `user` information can be a daunting task, however it can be generalized as a `Hook` in our library. It's especially useful when you want to add common application specific data before reaching your app route (and after the auth is finished).  

```javascript
  angular.module('App', [])
  .service('Globals', function() {
    var attach = function(user) {
      // attach your data
      user.globals = {};
    }
    return {
      attach: attach
    }
  })
  .run(function(Hook, Globals) {
    Hook.register(Globals.attach);
  })
```

In the above example, you can create your own service to hold your app specific `Globals` and then during runtime register it once to the `Hook`. Your service(s) needs to provide your own data via API calls or presets, which then can be accessed via `Auth.user.globals` in any other part of your application, ex. controller etc.

> For curiosity, the auth here isn't attached to the angular bootstrap as you might assume. In order to walkaround Angular 1.x architect issue (Read more for [$http inside provider](https://stackoverflow.com/questions/17497006/use-http-inside-custom-provider-in-app-config-angular-js/45644082#45644082) and [Directive being rendered before promise resolved](https://stackoverflow.com/questions/21177582/directive-is-being-rendered-before-promise-is-resolved)), it's attached to one of the top scope `mc-body` directive, where it calls `Auth.login()`to handle the entire authentication process. All the other directives are attached in scopes under individual routes, therefore the top scope serves as a bootstrap for the rest of scopes.

<br />

## Dialog

By default, you get build-in modal and dialog utilities via `Dialog` service, and `mc-common` expose global varialbe `dialog` in `$rootScope`. Therefore you can open dialogs in views.

```javascript
    dialog.ok('Happy', 'Simply Ok!');
    dialog.success('Wonderful', 'Great job!');
    dialog.error('Error', 'Problem spotted!');
    dialog.prompt('Question', 'Your name', 'Fang');
```

Preset dialogs are defined in calls such as `ok`, `success`, `error`, and `prompt` and `warining`. They differs in the color of dialog title. Each call accepts the following parameters.

- `title`, title of the dialog
- `message`, HTML displayed in the dialog body
- `cb`, callback function when dialog is accepted or dismissed
- `size`, empty or 'lg' which covers 90% of the screen
- `time`, close the dialog automatically after time in milli-second

All the above preset dialog calls are derived from a base call,

```javascript
  dialog.open(
    'ok',
    { title: title, message: message, size: lg },
    cb
  );
```

You can close the dialog on screen via `dialog.close()`.

If you want to further gain full control of the dialog display, you can use base service `ModalService` that `Dialog` depends on internally.

```javascript
  ModalService.showModal({
    // template of the dialog,
    template: 'This is a dialog',
    // controller of the dialog
    controller: function($scope) {}
  }).then(function(modal) {
    // handle modal functionalities
  });
```

You can find more custom dialog examples in `mc.dialog.js` as well as templates `mc.dialog.prefs.html` and `mc.dialog.terms.html` under `src` folder.

> Make sure angular-sanitize is used and dependency is added to your app module.
> This is because the `message` suports HTML template which is not safe.

<br />

## Slide

Slides are hard coded in hamburger menu as well as sidebar. For generic purpose, you can use directive `pageslide`.

```
  <span ng-init="checked = false;">
    <a class="btn btn-xs btn-mc" ng-click="checked = !checked">
      <i class="mc-chevron-right"></i>
    </a>
    <div pageslide ps-open="checked3" ps-side="right" ps-size="500px">
      <h2>Advanced Search</h2>
      ...
    </div>
  </span>
```

The `pageslide` directive is driven mainly by a switch variable `checked`. Use this variable to slide the panel in and out. Other useful options includes

```
  pageslide (required)
  ps-side (optional) = Where the panel should appear (right,left,top,bottom), if empty defaults to "right"
  ps-click-outside (optional) = close the sidebar by clicking outside (defaults to true)
  ps-push (optional) = push the main body to show the panel (defaults to false)
  ps-size (optional) = desired height/width of panel (defaults to 300px)
```

You can find quite a few examples in file `slides.html` under `/demo/directive` folder.

If you want to make panel size adjustable, you can embed a drag directive `resize` inside directive `pageslide`.

```html
  <div id="main"> Your container </div>

  <div class="pane-mc" pageslide
    ps-size="{{ size4 }}px" ps-container="main"
    ps-click-outside="false"
  >
    <div class="pane-body">
      <div class="pane-drag" resize
        rs-container="#main" rs-size="size4"
      ></div>
    </div>
  </div>
```

Here the `resize` requires,

```
  resize (required)
  rs-size (required) = variable to hold current width of the panel
  rs-container (required) = id of the container of this page slide
```

Since we need to wire `resize` with `pageslide`, we need to specify the container id and update the size back to page slide.

<br />

## Author

- [Fang-A Jin](mailto:fang-a.jin@db.com), AngularJS Architect
- [Anton Bogdan](mailto:anton.bogdan@db.com), Deployment Engineer
- [Lakshmi Satish-Kumar](mailto:lakshmi.satish-kumar@db.com), Project Manager
- [Shikha-A Singh](mailto:shikha-a.singh@db.com), Project Manager
- [Dave Brinson](mailto:dave.brinson@db.com), Project Manager
- [Rex Santee](mailto:rex.santee@db.com), Program Manager
- [Thomas Rudolph](mailto:thomas.rudolph@db.com), Technical Director
- [Andrew Kaiser](mailto:andrew.kaiser@db.com), Program Director

Many thanks goes to each app contributor who is dedicated to put efforts in integrating this work to their applications: `Rishi Tandon`, `Ravikumar Kubusada`, `Munib Shaikh`, `Harjas-S Ahuja`, `Valmik-Laxman Khandagale`, `Vishal Patwari`, `Ashish-B Saxena`.

