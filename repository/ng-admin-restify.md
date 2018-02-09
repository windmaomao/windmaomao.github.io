#NG Admin restify

04/16/2016, https://raw.githubusercontent.com/windmaomao/ng-admin-restify

AngularJS module providing configuration settings for `ng-admin`.

## Install
npm install --save ng-admin-restify

## Setup

You basically reference `ng-admin` and `ng-admin-restify` scripts and setup `angularJS` application by configuring the `ngAdminRestifyProvider`.

```
<!doctype html>
<html lang="en">
  <head>
    <title>ngAdmin Restify</title>
    <link rel="stylesheet" href="node_modules/ng-admin/build/ng-admin.min.css">
  </head>
  <body ng-app="myApp">
    <div ui-view></div>

    <script src="node_modules/ng-admin/build/ng-admin.min.js"></script>
    <script src="node_modules/ng-admin-restify/build/app.js"></script>

    <script type="text/javascript">
        angular
            .module('myApp', ['ng-admin-restify'])
            .config(function(ngAdminRestifyProvider) {
                // specify options
                var options = {
                    site: 'My Blogs',
                    url: '/v1/',
                    rest: {
                        url: '/v1/',
                        filter: 'flat',
                        page: {
                            start: '_start',
                            end: '_end',
                            limit: '_limit',
                            page: false,
                        },
                        sort: {
                            field: '_sort',
                            order: '_order',
                            plus: false
                        }
                    },
                    entities: {
                        post: {
                            entity: 'post',
                            model: {
                                id: { type: 'integer' },
                                title: { type: 'string', required: true },
                                author: 'string',
                                url: 'string',
                                comments: { type: '' },
                                tags: { type: '' },
                                images: { type: '' },
                            },
                            id: 'id',
                            fields: {
                                title: {
                                    type: 'string',
                                    detailRoute: 'show'
                                },
                                comments: {
                                    type: 'referenced_list',
                                    targetEntity: 'comment',
                                    targetReferenceField: 'postId',
                                    targetFields: ['id','body'],
                                    sort: {
                                        field: 'id',
                                        dir: 'DESC'
                                    }
                                },
                                tags: {
                                    field: 'tags',
                                    type: 'reference_many',
                                    label: 'Tags',
                                    targetEntity: 'tag',
                                    targetField: 'name',
                                    sort: {
                                        field: 'name',
                                        dir: 'ASC'
                                    }
                                },
                                url: {
                                    field: 'url',
                                    type: 'string',
                                    format: 'url',
                                    caption: 'Go'
                                },
                                images: {
                                    type: 'referenced_list',
                                    targetEntity: 'image',
                                    targetReferenceField: 'postId',
                                    targetFields: ['id','caption','name'],
                                    sort: {
                                        field: 'id',
                                        dir: 'DESC'
                                    }
                                },
                            },
                            default: {
                                fields: [ 'id', 'title', 'author', 'comments', 'tags', 'url', 'images' ],
                            },
                            list: {
                                fields: [ 'id', 'title', 'author', 'tags', 'url'],
                                actions: ['edit']
                            },
                            creation: {},
                            edition: {},
                            show: {
                                title: 'title',
                            },
                            search: {
                                fields: ['id']
                            },
                        },
                        comment: {
                            entity: 'comment',
                            model: {
                                id: { type: 'integer' },
                                postId: { type: 'id', ref: 'post' },
                                body: { type: 'string', required: true },
                                createdAt: { type: 'date' }
                            },
                            id: 'id',
                            fields: {
                                postId: {
                                    label: 'Post',
                                    field: 'postId',
                                    type: 'reference',
                                    targetEntity: 'post',
                                    targetField: 'title',
                                    sort: {
                                        field: 'title',
                                        dir: 'ASC'
                                    },
                                    perPage: 200,
                                    pinned: true
                                },
                                createdAt: {
                                    label: 'Created',
                                    type: 'datetime',
                                    formatString: 'yyyy-MM-dd'
                                },
                                body: {
                                    map: function(value, entry) {
                                        return entry.postId + '-' + value;
                                    }
                                }
                            },
                            default: {
                                fields: [ 'id', 'postId', 'body', 'createdAt' ],
                            },
                            list: {},
                            creation: {},
                            edition: {},
                            show: {
                                title: 'body'
                            },
                            search: {
                                fields: ['id', 'postId']
                            },
                        },
                        tag: {
                            entity: 'tag',
                            model: {
                                id: { type: 'integer' },
                                name: { type: 'string', required: true },
                            },
                            id: 'id',
                            fields: {},
                            default: {
                                fields: ['id', 'name']
                            },
                            list: {},
                            creation: {},
                            edition: {},
                            show: {
                                title: 'name'
                            },
                            search: {
                                fields: ['id', 'name']
                            },
                        },
                        image: {
                            entity: 'image',
                            model: {
                                id: { type: 'integer' },
                                postId: { type: 'id', ref: 'post' },
                                name: { type: 'string', required: true },
                                caption: 'string'
                            },
                            id: 'id',
                            fields: {
                                postId: {
                                    label: 'Post',
                                    field: 'postId',
                                    type: 'reference',
                                    targetEntity: 'post',
                                    targetField: 'title',
                                    sort: {
                                        field: 'title',
                                        dir: 'ASC'
                                    },
                                    perPage: 200,
                                    pinned: true
                                },
                                name: {
                                    field: 'name',
                                    type: 'string',
                                    format: 'image',
                                    url: 'https://s3-us-west-1.amazonaws.com/qplot-showcase/',
                                    width: 200
                                }
                            },
                            default: {
                                fields: ['id', 'postId', 'name', 'caption']
                            },
                            list: {},
                            creation: {},
                            edition: {},
                            show: {
                                title: 'name'
                            },
                            search: {
                                fields: ['postId', 'name']
                            },
                        }
                    }
                };
                // setup ngAdmin and get application handle
                var app = ngAdminRestifyProvider.configure(options);
            })
        ;
    </script>
```

## Develop
npm install
cd build && npm install --production
cd .. && gulp

