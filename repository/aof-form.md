# MCSDH AOF West UI

6/12/2016

AngularJS implementation of service and UI for west AOFs. One resuable component `app.form` is responsible for rendering form layout and elements based on configuration settings.

```javascript
    angular.module('app', [
        // Core
        'db',
        // Features
        'app.lodash',               // -> _
        'app.shared',               // -> $shared
        'app.env',                  // -> env
        'app.api',                  // -> central
        'app.route',
        'app.layout',
        'app.aof',
        'app.grid',
        'app.form'
    ]);
```

## Install

```
    cd bootstrap
    npm install
    gulp serve
```

For more information on development, please refers to 'README.md' under `/bootstrap`.

## Form

Form module `app.form` is responsible for rendering form layout and elements. You can find example `form.test.html` under `/src/app/form` and `form-fields.spec.js` under `/test/bootstrap/form`.

#### Individual field

Each field can be rendered via directive `aof-form-field` with properties `name`, `field`, `value` and event `on-change`.

```html
  <aof-form-field
    name="'name1'"
    field="fields1[0]"
    value="values1.name1"
    on-change="onChange"
  ></aof-form-field>
```

Field name `name` is used for form handler, and `value` holds the field value at run time before and after form submission.

Field meta is governed by `field` with the following format.

```javascript
  {
    type: 'text',
    label: 'Account Code',
    description: 'Account Code',
    required: true, disabled: false, maxlength: 8, minlength:8
    messages: {
      'required': {
        'error': 'Invalid cRDS RUID'
      }
    },
    options: {
      key: 'key', value: 'value',
      items: items
    }
  },
```

Field type `type` supports couple of types,

- 'text', text input
- 'text-plus', text input with a button
- 'select', select dropdown, requires `options` for key, value and items
- 'select-plus', select dropwdown with a button, similar to select
- 'date', date selection, with a  button to date selection
- 'radio', radio choices, requires `options` for items
- 'textarea', text area input for entering comments

When `value` changes for each field, `on-change` event fires with attached data, `field` as field name, `type` as field type, `value` the new value of the field.

```
  function e(field, type, value) {
    if (field === 'cRDSRUID' && type === 'click') {
      console.log(field, value);
    }
  }
```

#### Form section

You can group bunch of fields and display them in columns via directive `aof-form-section`.

```html
  <aof-form-section
    fields="fields2"
    values="values2"
    columns="2"
    on-change="onChange"
    subset="keys4"
  ></aof-form-section>
```

Array of `fields` and `values` needs to be given as well as the columns layout, such as one column, two columns, and three columns. Event can be handled centralized via single `on-change`.

```javascript
  var fields = [
    { model: 'first', label: 'First Name', type: 'text' },
    { model: 'last', label: 'Second Name', type: 'text' },
    { model: 'title', label: 'Title', type: 'text' }
  ];
  var values = {
    first: 'Fang',
    last: 'Jin',
    title: 'Angular Developer'
  };
  var subset = ['first', 'last'];
```

If you don't want to include all fields in field array, you can use `subset` to specify an array of keys to the `fields`.

#### Entire form

Form is complicated, which can be composed by various sections and lots of fields. If they follow specific layout, you can use directive `aof-form`.

```html
  <form name="clientForm" class="form-horizontal">
    <h4>Client, Broker and House Information</h4>
    <aof-form fields="fields" values="values" sections="sections" columns="2" on-change="onChange"></aof-form>
  </form>
```

The layout is controlled by `columns` and `sections`, where `sections` specify how many section and how many fields in each section.

```javascript
  var sections = [
    {
      title: 'Account',
      fields: ['copyAccount', 'accountCode', 'salesman']
    },
    {
      title: 'Classification',
      fields: [
        'classification', 'activityClass', 'office',
        'firm', 'class', 'subClass'
      ]
    }
  ];
```

## Developer
- [Fang-A Jin]('mailto:fang-a.jin@db.com'), AngularJS Architect
- [Munib Shaikh]('mailto:munib.shaikh@db.com'), Business/AngularJS Developer
- [Vaibhav Parohan]('mailto:vaibhav.paroha@db.com'), AngularJS Developer
- [Priya Joseph]('mailto:priya-cgi.joseph@db.com'), AngularJS/UI Developer
- [Arnabh Chakravarty]('mailto:arnabh.chakravarty@db.com'), Project Manager

## README

UI is implemented via Angular modular approach following Stacy's Market Clearing DB guildline Specification.

Both `src` and `dist` folder are committed to facilliate the deployment on DB server.

## Develop

```
    npm install
    gulp serve
```

Website is hosted under port `3000` as  `http://localhost:3000/`.

In order to connect to a testing service, service needs to be registered (proxyed) under `3001` via

```
    http-server . -p 3001 http://lonindapnp666.uk.db.com:16401/

```

Website is authenticated via `SessionStorage`, since they are populated by server, they need to be set manually in local.

```
    'ENV': 'LOCAL',
    'USER': 'fang-a.jin@db.com'
```

## Deploy

```
    gulp build
```

Please use `develop` branch for contribution, and `master` branch for production deployment.