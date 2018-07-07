# Event Services

03/16/2016

UI, API, and backend services for GMI IR Events. Currently it contains backend services `eventAPI` ([Go](server/eventAPI/README.md)), `eventEvaluator`, `eventSubscription`, `eventMail`as well as frontend admin portal `eventUI`. For more information about these services other than deployment information, please visit each service folder.

## Deploy

Install a node app launch/monitor tool `pm2`

```
npm install -g pm2
```

Launch `eventAPI` (optional `--watch --ignore-watch="log"`)

```    
cd eventAPI
_ENV=sit pm2 start index.js --name="eventAPI"
```

Launch `eventUI` with API channeled to `eventAPI`

```
cd eventUI
pm2 start http-server --name="eventUI" -- -p 28190 -P http://localhost:28189
```

Launch `eventMail`

```
cd eventMail
pm2 start server.js --name="eventMail"
```

## Maintenance

```
pm2 monit
pm2 list
pm2 stop "eventAPI"
pm2 restart "eventUI"
pm2 delete "eventMail"
pm2 show "eventAPI"
pm2 describe "eventUI"
```

## Developer

- [Fang-A Jin]('mailto:fang-a.jin@db.com'), AngularJS/NodeJS Developer
- [Sagar Kale]('mailto:sagar.kale@db.com'), Java/NodeJS Developer

# Event API

Event API routes and schedules. `EventAPI` is a `nodeJS` application build with `kingslanding` server, which contains 8 models, 3 schedules (9 jobs), and 2 plugins.  

## Installation

```
npm install
npm start
```

### Check syntax

```
npm run lint
```

## Components
### Routes

```

[REST]  /v1/event
[REST]  /v1/notification
[REST]  /v1/subscription
[REST]  /v1/userNotification
[REST]  /v1/report
[REST]  /v1/sla
[REST]  /v1/reportSLA
[REST]  /v1/reportStatus
[POST]  /v1/prepare
[REST]  /v1/stat
[GET]  /v1/info
```

### Schedules

```

slaNotification every 5 minutes
reportDaily every */10 * * * *
reportDaily every 30 15 * * *
reportDaily once in 1 minutes
reportEmail every 0 16 * * 1,2,3,4,5
reportEmail every 1 16 * * 2,3,4,5,6
reportEmail once in 4 minutes
reportEmail every 5 * * * 1,2,3,4,5
statUpdate every 2 hours
```

### Plugins

```
env - output environment string, ex. 'UAT'
stat - process and update entities count

```


## Configuration

`kingslanding` is a configurable server.

### Config

 For each environment, you can write config in a file such as `local.js`,

```
module.exports = {
    port: 28189,
    debug: 'verbose',
    log: 'log',
    mongo: 'mongodb://localhost/gmi',
    model: _path('model'),
    controller: _path('controller'),
    prefix: '/v1',
    routes: routes,
    scheduler: _path('scheduler'),
    schedules: schedules,
    plugger: _path('plugin'),
    plugins: plugins,
    email: ''
};
```

### Routes

Routes can be referred from config file in `route.js`.

```

var routes = module.exports = {};
routes.event = {};          // blueprint Event routes
routes.notification = {};   // blueprint Notification routes
...
routes.prepare = {          // import report file
    path: '/prepare',
    controller: 'reportSLA',
    POST: 'prepare',
};

```

### Models and Controllers

Blueprint routes does lots of things behind the scene, ex. loading all models and controllers and restify them with Rest routes. All you need to do is to define a model definition file, such as 'event.js'.

```

module.exports = {
    fields: {
        app: { type: String, required: true },
        subSystem: { type: String, required: true },
        eventName: { type: String, required: true },
        correlationId: { type: String, required: true },
        ...
    },
    options: {
        collection: 'event',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {
        app: true,
        subSystem: true,
        eventName: true,
        ...
    },
    virtuals: {}
};

```

### Schedules

For tasks that you need to run once, every hours, etc, these schedules can be referred from config file in `schedule.js`

```

module.exports = {
    'slaNotification': {        // SLA check every 5 minutes
        every: '5 minutes',
        priority: 'high',
    },
    'reportDaily': {            // Report daily processing
        priority: 'normal',
        concurrency: 1,
        jobs: [
            {                   // [T0] every 10 minutes

                data: { day: 0 },
                every: '*/10 * * * *',
            },
            ...
        ]
    }
    ...
};

```

### Plugins

Plugin is a useful architect to help you scale your application when it grows. Before you can take the component out as another module, you can simply define a plugin and test the theory. Sometimes when a module isn't really reusable due to any reason, you can leave it as a plugin along with main trunk.

Plugin config file follows similar structure, ex.

```

module.exports = {
    routes: {
        stat: {}                // blueprint Stat routes
    },
    schedules: {
        statUpdate: {           // update stats every two hours
            every: '2 hours'
        }
    },
    hooks: {}
};

```