# Mongoose Restify Server

4/29/2016

A quick API server setup using mongoose and restify. Configuration files are used to setup model, routes and restful services.

## Installation

npm install --save kingslanding

## Test

npm test

## Usage

index.js

```

var server = require('kingslanding');
server.lift(config, function() {
    console.log('Server lifted.');
});

```

where the configuration settings `config` can be defined either in a variable or in separate config.js as

```
module.exports = {
    port: 8085,
    mongo: 'mongodb://localhost/test',
    model: __dirname,
    controller: __dirname,
    routes: {
        blog: {}
    }
}

```

Here the blog is defined using Mongoose model in blog.js

```

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var Mixed = Schema.Types.Mixed;
module.exports = {
    fields: {
        title: { type: String },
    },
    options: {
        collection: 'blog',
        versionKey: false,
        timestamps: {},
        runValidators: false
    },
    methods: {},
    indexes: {},
    virtuals: {}
}

```

Since we use the module to do all the heavy lifting for us, we can just leave empty in the blogController.js

```

module.exports = {
};

```

That's it, if you fire the server, you should see a restful resources for blog on port 8085.

## More

The routes in the config.js can have non-restful calls,

```

var config = {
    port: 8085,
    routes: {
        /**
         * GET call
         */
        get: {
            path: '/get',
            GET: httpCall,
        },
        /**
         * POST call
         */
        post: {
            path: '/post',
            POST: httpCall,
        },
        /**
         * Bundle call
         */
        bundle: {
            path: '/bundle',
            GET: httpCall,
            POST: httpCall,
        },
        /**
         * REST call
         */
        rest: {
            path: '/rest',
            REST: {
                query: httpCall,
                detail: httpCall,
                insert: httpCall,
                patch: httpCall,
                del: httpCall
            }
        },
        /**
         * Group call
         */
        group: {
            path: '/group',
            items: {
                get: {
                    path: '/get',
                    GET: httpCall,
                },
                post: {
                    path: '/post',
                    POST: httpCall,
                },
                bundle: {
                    path: '/bundle',
                    GET: httpCall,
                    POST: httpCall,
                },
                rest: {
                    path: '/rest',
                    REST: {
                        query: httpCall,
                    }
                }
            }
        },
        /**
         * Mixed call
         */
        mixed: {
            path: '/mixed',
            items: {
                get: {
                    path: '/get',
                    GET: httpCall
                }
            },
            REST: {
                query: httpCall,
                insert: httpCall,
            }
        }
    }
};

```

In that case, you do not need to specify the mongo, model and controller, because each httpCall can be a simple express route function

```

var httpCall = function(req, res, next) {
    res.send('Hello server');
    next();
};

```

In case you want to organize routes using controller actions, you can do

```

var config = {
    port: 8085,
    controller: '../../test/fixture',
    routes: {
        /**
         * GET call with controller
         */
        ctrl: {
            path: '/ctrl',
            controller: 'index',
            GET: 'index',
        },
        /**
         * REST call with controller
         */
        rest: {
            path: '/rest',
            controller: 'rest',
            REST: ['query', 'detail']
        },
        /**
         * Group call with controller
         */
        group: {
            path: '/group',
            controller: 'index',
            items: {
                'index': {
                    path: '',
                    GET: 'index'
                },
                'debug': {
                    path: '/debug',
                    POST: 'debug'
                },
                'rest': {
                    path: '/rest',
                    REST: ['query', 'detail']
                }
            }
        },
    }
};

```

where the method value (ex. GET) is replaced by the action name if controller is specified.