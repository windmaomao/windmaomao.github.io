const getDefaultNode = () => ({
  title: 'A',
  children: []
});

const getSampleTree = getDefaultNode();
getSampleTree.children.push(getDefaultNode());
getSampleTree.children.push(getDefaultNode());
getSampleTree.children[0].children.push(getDefaultNode());
getSampleTree.children[0].children[0].children.push(getDefaultNode());

const menu = [
  {
    "title": "Blueprint", "type": "blueprint",
    "items": [
      "mg-posted",
      "pd-apnea",
      "qp-kb2"
    ]
  },
  {
    "title": "Idea", "type": "other",
    "items": [
      "crash",
      "rendering",
      "timesheet"
    ]
  },
  {
    "title": "Resume", "type": "resume",
    "items": [
      "company",
      "frontend",
      "performance",
      "project",
      "publication",
      "recommendation"
    ]
  },
  {
    "title": "Todo", "type": "todo",
    "items": [
      "fang",
      "contact",
      "china-trip",
      "flymile",
      "idea"
    ]
  },
  {
    "title": "Financial", "type": "finance",
    "items": [
      "account",
      "balace-sheet",
      "debt",
      "direxion",
      "family-trust",
      "income-statement",
      "investment",
      "loan",
      "pay-stub",
      "payment",
      "property",
      "purchase",
      "tax"
    ]
  },
  {
    "title": "Repos", "type": "repository",
    "items": [
      "angular2-mc-common",
      "angular-adk",
      "angular-mc-common",
      "aof-form",
      "dbvals-audit",
      "event-services",
      "figure-caption",
      "kingslanding",
      "markdown-it",
      "mg-react",
      "mg-tms",
      "mongoose-restify",
      "ng-admin-restify",
      "qp-github",
      "reports-center"
    ]
  },
  {
    "title": "Packages", "type": "package",
    "items": [
      "angular2-mc-common",
      "angular-mc-common",
      "mg-react",
      "qp-github",
      "reports-center-ui"
    ]
  },
  {
    "title": "Books", "type": "book",
    "items": [
      "index",
      "angular2-training",
      "art-of-war",
      "art-of-war-wisdom",
      "big-shifts-ahead",
      "bonds-unbeaten-path",
      "dao-of-capital",
      "data-visualization-d3",
      "five-rules-stock-investing",
      "flexbox-in-css",
      "history-of-interest-rate",
      "intelligent-investor",
      "living-trust-everyone",
      "mu-ai-ning-xiang",
      "next-economic-disaster",
      "pay-zero-taxes",
      "predicting-markets",
      "react-quickly",
      "react-up-running",
      "reactive-programming",
      "sale-of-lifetime",
      "slash-retirement-risk",
      "spending-waves",
      "value-of-debt",
      "vue-up-running"
    ]
  },
  {
    "title": "Blogs", "type": "blog",
	  "items": [
      "index", 
      "active-management", 
      "angular-on-windows", 
      "angular-react-vue", 
      "being-dependent", 
      "build-new-system", 
      "consequence-of-bailout",
      "container-to-rescue", 
      "dynamic-static-approach", 
      "floating-pot",
      "helping-others", 
      "html-the-one",
      "identity-debt", 
      "law-of-winning", 
      "middle-ground", 
      "perfect-google-map", 
      "power-of-loss", 
      "protection-from-loss", 
      "reusable-components", 
      "reusable-form", 
      "sustainable-prototyping", 
      "tiny-upscaling"
    ]
  }
];

const getSampleMenu = {
  title: 'Menu',
  children: menu.map(category => ({
    title: category.title,
    children: category.items.map(article => ({
      title: article,
      children: [],
      type: article
    })),
    type: category.type
  }))
};

const trades = [
  { name: 'ADSK', quantity: -13, cost: -1743.69 },
  { name: 'ALNY', quantity: -8, cost: -706.08 },
  { name: 'BC', quantity: -8, cost: -426.24 },
  { name: 'BFAM', quantity: -8, cost: -927.44 },
  { name: 'BKS', quantity: -80, cost: -536.00 },
  { name: 'BLUE', quantity: -6, cost: -796.14 },
  { name: 'DTYS', quantity: 130, cost: 3264.91 },
  { name: 'EUM', quantity: 130, cost: 2602.60 },
  { name: 'CHAD', quantity: 100, cost: 3706.00 },
  { name: 'EFZ', quantity: 25, cost: 692.75 },
  { name: 'SH', quantity: 40, cost: 1166.40 },
];

const transactions = [
  { quantity: -2, price: 309.5, action: 'short', date: '2018-01-04' },
  { quantity: -1, price: 334.17, action: 'short', date: '2018-03-01' },
  { quantity: -2, price: 301.18, action: 'short', date: '2018-05-08' },
  { quantity: 5, price: 333.65, action: 'cover', date: '2018-10-29' },
]

const getSampleInvest = {
  title: 'Investment',
  cols: ['quantity', 'price', 'date'],
  children: trades.map(item => ({
    title: item.name,
    quantity: item.quantity,
    price: (item.cost / item.quantity).toFixed(2),
    children: transactions.map(transaction => ({
      title: transaction.date,
      quantity: transaction.quantity,
      price: transaction.price,
      date: transaction.date
    }))
  }))
};

const opml = {
  "opml": {
    "head": {
      "title": "",
      "flavor": "dynalist",
      "source": "https://dynalist.io",
      "ownerName": "Fang Jin",
      "ownerEmail": "windmaomao@gmail.com"
    },
    "body": {
      "outline": {
        "outline": [
          {
            "outline": [
              {
                "outline": [
                  {
                    "_text": "`questionList`",
                    "__note": "['whose-idea']"
                  },
                  {
                    "outline": {
                      "outline": [
                        {
                          "_text": "`name`",
                          "__note": "'q1'"
                        },
                        {
                          "_text": "`label`",
                          "__note": "'What is your name'"
                        },
                        {
                          "_text": "`type`",
                          "__note": "'Radio'"
                        },
                        {
                          "outline": [
                            {
                              "_text": "`key`"
                            },
                            {
                              "_text": "`title`"
                            }
                          ],
                          "_text": "`options`"
                        }
                      ],
                      "_text": "'whose-idea'"
                    },
                    "_text": "`questionDefs`"
                  }
                ],
                "_text": "questions"
              },
              {
                "outline": [
                  {
                    "_text": "`pageList`",
                    "__note": "['landing', 'tour']"
                  },
                  {
                    "outline": {
                      "outline": [
                        {
                          "_text": "`name`"
                        },
                        {
                          "_text": "`path`"
                        }
                      ],
                      "_text": "landing"
                    },
                    "_text": "`pageRoutes`"
                  },
                  {
                    "outline": {
                      "outline": [
                        {
                          "_text": "next",
                          "__note": "tour"
                        },
                        {
                          "_text": "question"
                        }
                      ],
                      "_text": "landing"
                    },
                    "_text": "`pageDefs`"
                  }
                ],
                "_text": "pages"
              },
              {
                "outline": [
                  {
                    "_text": "`basename`",
                    "__note": "'/apnea'"
                  },
                  {
                    "outline": {
                      "_text": "`idea_doc`",
                      "__note": "false"
                    },
                    "_text": "`answers`"
                  }
                ],
                "_text": "store",
                "__note": "via `mobx`"
              },
              {
                "outline": [
                  {
                    "_text": "`name`"
                  },
                  {
                    "_text": "`path`"
                  },
                  {
                    "outline": [
                      {
                        "_text": "`name`"
                      },
                      {
                        "_text": "`path`"
                      }
                    ],
                    "_text": "`children`"
                  }
                ],
                "_text": "router",
                "__note": "createRouter via `router5` "
              },
              {
                "outline": [
                  {
                    "_text": "Home `/`"
                  },
                  {
                    "_text": "About `/about`"
                  },
                  {
                    "_text": "Landing `/page/landing`"
                  },
                  {
                    "_text": "Tour `/page/tour`"
                  },
                  {
                    "_text": "..."
                  }
                ],
                "_text": "routePages"
              }
            ],
            "_text": "Services"
          },
          {
            "outline": [
              {
                "outline": [
                  {
                    "_text": "`router`"
                  },
                  {
                    "_text": "Root"
                  }
                ],
                "_text": "index"
              },
              {
                "outline": [
                  {
                    "_text": "`router`"
                  },
                  {
                    "_text": "RouterProvider",
                    "__note": "via `react-router5`"
                  },
                  {
                    "_text": "App"
                  }
                ],
                "_text": "Root"
              },
              {
                "outline": [
                  {
                    "_text": "Provider `store`",
                    "__note": "via `mobx-react`"
                  },
                  {
                    "outline": [
                      {
                        "outline": [
                          {
                            "_text": "`route`"
                          },
                          {
                            "_text": "PublicHeader"
                          },
                          {
                            "_text": "PageHeader"
                          }
                        ],
                        "_text": "Header"
                      },
                      {
                        "outline": [
                          {
                            "_text": "`route`"
                          },
                          {
                            "outline": {
                              "_text": "`field`"
                            },
                            "_text": "Question"
                          },
                          {
                            "outline": {
                              "_text": "`page`"
                            },
                            "_text": "Navigation"
                          }
                        ],
                        "_text": "Main"
                      },
                      {
                        "outline": [
                          {
                            "_text": "`route`"
                          },
                          {
                            "_text": "PublicFooter"
                          },
                          {
                            "_text": "PageFooter"
                          }
                        ],
                        "_text": "Footer"
                      }
                    ],
                    "_text": "Page"
                  },
                  {
                    "outline": [
                      {
                        "_text": "Field",
                        "__note": "Generic field"
                      },
                      {
                        "outline": [
                          {
                            "_text": "`label`"
                          },
                          {
                            "_text": "`keys`"
                          },
                          {
                            "_text": "`answers`"
                          }
                        ],
                        "_text": "Text"
                      },
                      {
                        "outline": [
                          {
                            "_text": "`label`"
                          },
                          {
                            "_text": "`options`"
                          },
                          {
                            "_text": "`keys`"
                          },
                          {
                            "_text": "`answers`"
                          },
                          {
                            "_text": "`answerChange`"
                          }
                        ],
                        "_text": "Checkbox"
                      },
                      {
                        "outline": [
                          {
                            "_text": "`label`"
                          },
                          {
                            "_text": "`options`"
                          },
                          {
                            "_text": "`keys`"
                          },
                          {
                            "_text": "`answers`"
                          },
                          {
                            "_text": "`answerChange`"
                          }
                        ],
                        "_text": "Radio"
                      },
                      {
                        "outline": [
                          {
                            "_text": "`field`"
                          },
                          {
                            "_text": "`store`"
                          }
                        ],
                        "_text": "Fieldset"
                      },
                      {
                        "_text": "Embedded"
                      }
                    ],
                    "_text": "Fields"
                  }
                ],
                "_text": "App"
              }
            ],
            "_text": "Components"
          }
        ],
        "_text": "Apnea"
      }
    },
    "_version": "2.0"
  }
};

const parseOutline = (item) => {
  return {
    title: item._text || '',
    note: item.__note || '',
    children: item.outline ? (Array.isArray(item.outline) ? 
        item.outline.map(parseOutline) : [parseOutline(item.outline)]
    ) : []
  }
}

const getSampleOutline = Object.assign({}, parseOutline(opml.opml.body.outline), {
  cols: ['note']
});
// console.log(getSampleBlueprint);

const omniOutliner ={
  "_declaration":{
     "_attributes":{
        "version":"1.0",
        "encoding":"utf-8"
     }
  },
  "opml":{
     "_attributes":{
        "version":"1.0"
     },
     "head":{
        "title":{
           "_text":"projects"
        },
        "expansionState":{
           "_text":"0,9,10,20,24,26"
        }
     },
     "body":{
        "outline":{
           "_attributes":{
              "text":"QPLOT",
              "_note":"Position: Owner",
              "Since":"Jan 14"
           },
           "outline":[
              {
                 "_attributes":{
                    "text":"Playground",
                    "_note":"Project: Repo\nDescription: Would like to reduce cost in developing prototyping decent apps by leveraging infrastructure provided by framework. This is to explore an idea to see if a long term development environment can be established for sustainability. And this is extended by using GitHub one repo and further inspired by MercuryGate’ large code reservoir.",
                    "Since":"Nov 18",
                    "Rating":"★★"
                 },
                 "outline":[
                    {
                       "_attributes":{
                          "text":"Outliner",
                          "_note":"Display xml outliner file on web via opml file format",
                          "Since":"Nov 18"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"TestSheet",
                          "_note":"Math question answer sheet for basic operations",
                          "Since":"Nov 18"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Layout",
                          "_note":"Unified layout shell for common message handling and header",
                          "Since":"Nov 18"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Highlights",
                          "Since":"Nov 18"
                       }
                    }
                 ]
              },
              {
                 "_attributes":{
                    "text":"Scheduler",
                    "_note":"Project: Repo\nDescription: Develop for mathnasium app for scheduling app that assign teacher with students. The effort is paid via Mathnasium.",
                    "Since":"Sep 18",
                    "Rating":"★★★"
                 },
                 "outline":[
                    {
                       "_attributes":{
                          "text":"stable"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"init",
                          "Since":"Sep 18"
                       }
                    }
                 ]
              },
              {
                 "_attributes":{
                    "text":"Github - aka. KB",
                    "_note":"Project: Repo\nDescription: Started as a new workflow from working local markdown file to online viewer, this project goes very successful in becoming the dream-about personal knowledgebase system. And from idea to production it takes less than one month. “The workflow it established is fundamental scalable in terms of bringing ideas/data from paper level to potential organized format.”",
                    "Since":"Jan 18",
                    "Rating":"★★★★"
                 },
                 "outline":[
                    {
                       "_attributes":{
                          "text":"Hosting"
                       },
                       "outline":{
                          "_attributes":{
                             "text":"Main"
                          }
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Updates",
                          "Since":"Jan 18"
                       },
                       "outline":[
                          {
                             "_attributes":{
                                "text":"Knowledgebase 2 using react",
                                "Since":"Sep 18"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Use codeine to prototype the site and features"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Use Markdown local to draft all documentations"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Auto deployment via Github"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Init",
                                "Since":"Jan 18"
                             }
                          }
                       ]
                    }
                 ]
              },
              {
                 "_attributes":{
                    "text":"Diagram",
                    "_note":"Project: Codepen\nDescription: Prototype for stim a person I met from DB using angular2 and GoJs. The project stopped before going into serious development.",
                    "Since":"Aug 17"
                 },
                 "outline":{
                    "_attributes":{
                       "text":"Init",
                       "Since":"Aug 17"
                    }
                 }
              },
              {
                 "_attributes":{
                    "text":"Knowledge-base",
                    "_note":"Product: Dropbox\nDescription: Centralize project, payment, and other knowledge-base information into more organized outliner data format such as OmniOutliner files. Over five years of practice, this is proven to be a strong stepping stone in supporting hierarchy data with relatively well defined format. Currently it includes blueprints, payment, projects, purchases, storages and trades. ",
                    "Since":"Nov 15",
                    "Rating":"★★★★★"
                 },
                 "outline":[
                    {
                       "_attributes":{
                          "text":"Purchases",
                          "_note":"Inventory purchased books, software, subscription and hardware.",
                          "Since":"Nov 18"
                       },
                       "outline":[
                          {
                             "_attributes":{
                                "text":"Books",
                                "Since":"Nov 18"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Hardware"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Software"
                             },
                             "outline":{
                                "_attributes":{
                                   "text":"Paid"
                                }
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Subscriptions"
                             },
                             "outline":{
                                "_attributes":{
                                   "text":"Active"
                                }
                             }
                          }
                       ]
                    },
                    {
                       "_attributes":{
                          "text":"Storages",
                          "_note":"Collection of all scattered file resources from dropbox, S3 and git repos.",
                          "Since":"Nov 18"
                       },
                       "outline":[
                          {
                             "_attributes":{
                                "text":"Dropbox",
                                "Since":"Nov 18"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"S3"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Github"
                             }
                          }
                       ]
                    },
                    {
                       "_attributes":{
                          "text":"Trades",
                          "_note":"Trading log with trade symbol, action, size, price as well as realized gain and annualized yield.",
                          "Since":"Nov 18"
                       },
                       "outline":[
                          {
                             "_attributes":{
                                "text":"Owned",
                                "Since":"Nov 18"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Realized"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Analyze"
                             }
                          }
                       ]
                    },
                    {
                       "_attributes":{
                          "text":"Blueprints",
                          "_note":"Architect documentation of technical projects with components and their usages.",
                          "Since":"Oct 18"
                       },
                       "outline":[
                          {
                             "_attributes":{
                                "text":"Projects"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"UI",
                                "Since":"Oct 18"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Services"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Dependencies"
                             }
                          }
                       ]
                    },
                    {
                       "_attributes":{
                          "text":"Projects",
                          "_note":"Listing of all projects with company, description, highlights and manuals.",
                          "Since":"Jan 17"
                       },
                       "outline":[
                          {
                             "_attributes":{
                                "text":"Companies",
                                "Since":"Jan 17"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Projects"
                             }
                          }
                       ]
                    },
                    {
                       "_attributes":{
                          "text":"Payment",
                          "_note":"Aggregation of receivable payments by each company.",
                          "Since":"Nov 15"
                       },
                       "outline":[
                          {
                             "_attributes":{
                                "text":"Companies",
                                "Since":"Nov 15"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Payments"
                             }
                          }
                       ]
                    },
                    {
                       "_attributes":{
                          "text":"Highlights",
                          "Since":"Nov 15"
                       },
                       "outline":[
                          {
                             "_attributes":{
                                "text":"Reaffirmed to use this format",
                                "Since":"Oct 18"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Add sitemap outline file",
                                "Since":"Jan 16"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Add goals outline file",
                                "Since":"Jan 16"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Add skills outline file",
                                "Since":"Dec 15"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Add knowledge outline file",
                                "Since":"Nov 15"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Add projects outline file",
                                "Since":"Nov 15"
                             }
                          }
                       ]
                    }
                 ]
              },
              {
                 "_attributes":{
                    "text":"PKB Tasks",
                    "_note":"Project: Repo\nTechnology: AngularJS, NodeJS\nDescription: PKB was designed to track knowledge-base, however it end up with  just to track the project tasks and timesheet. And it’s been very effective when there’re lots of contracting work. Recently it’s retired and instead Github KB app is used.",
                    "Since":"Feb 15",
                    "Rating":"★★★"
                 },
                 "outline":[
                    {
                       "_attributes":{
                          "text":"Retired and not used that much ",
                          "Since":"Aug 18"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Make tasks list view responsive ",
                          "Since":"Jun 15"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Add custom calendar for timesheet",
                          "Since":"May 15"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Add task list",
                          "Since":"Apr 15"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Add userapp authentication integration",
                          "Since":"Apr 15"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Kickoff",
                          "Since":"Feb 15"
                       }
                    }
                 ]
              },
              {
                 "_attributes":{
                    "text":"Monthly and Annually",
                    "_note":"Product: Google Sheets\nTechnology: Excel and Outliner\nDescription: Keep track of income statement and balance sheet from all financial accounts. Every month balance sheet and income flow is collected from all accounts and filled in the excel sheet. It became the watch tower on money in and out the system and how well each of them is performing therefore provides the ground that financial decisions can be based on.",
                    "Since":"Jan 14",
                    "Rating":"★★★★★"
                 },
                 "outline":[
                    {
                       "_attributes":{
                          "text":"2018 Income Statement",
                          "Since":"Jan 18"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"2018 Account Balance",
                          "Since":"Jan 18"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"2017 Income Statement",
                          "Since":"Jan 17"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"2017 Account Balance",
                          "Since":"Jan 17"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Account balance and gain",
                          "Since":"Dec 16"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Highlights",
                          "Since":"Jan 14"
                       },
                       "outline":[
                          {
                             "_attributes":{
                                "text":"Add spend outline to keep track of vendor contribution",
                                "Since":"Jan 16"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Add payment outline to keep track of client contribution",
                                "Since":"Nov 15"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Setup annual schedule in updating the doc",
                                "Since":"Jan 15"
                             }
                          },
                          {
                             "_attributes":{
                                "text":"Setup monthly schedule in updating the doc",
                                "Since":"Jan 14"
                             }
                          }
                       ]
                    }
                 ]
              },
              {
                 "_attributes":{
                    "text":"Seven Website",
                    "_note":"Project: Repo\nTechnology: Assemble and mixed\nDescription: QPLOT website, blog, and some experiment projects",
                    "Since":"Aug 15"
                 },
                 "outline":{
                    "_attributes":{
                       "text":"Kickoff",
                       "Since":"Aug 15"
                    }
                 }
              },
              {
                 "_attributes":{
                    "text":"Docs go",
                    "_note":"Description: be able to create simple page so that it’ll navigate to all the documentations\nTechnology: html from nsdoc, jsdoc\nProject: repo",
                    "Since":"Jan 15"
                 },
                 "outline":[
                    {
                       "_attributes":{
                          "text":"Host docs on qplot via nginx and digital ocean subdomain",
                          "Since":"Jan 15"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Apply pure.css framework and blog theme",
                          "Since":"Dec 15"
                       }
                    },
                    {
                       "_attributes":{
                          "text":"Kickoff the idea",
                          "Since":"Dec 15"
                       }
                    }
                 ]
              },
              {
                 "_attributes":{
                    "text":"Promise bucket",
                    "_note":"Project: Repo\nDescription: create a shared repo so that we can create unified and centralized place to add APIs and handle APIs.",
                    "Since":"Dec 15"
                 },
                 "outline":{
                    "_attributes":{
                       "text":"Setup project with tests at github",
                       "Since":"Dec 15"
                    }
                 }
              }
           ]
        }
     }
  }
};

const parseOmniOutliner = (item) => {
  return {
    title: item._attributes.text || '',
    note: item._attributes._note || '',
    children: item.outline ? (Array.isArray(item.outline) ? 
        item.outline.map(parseOmniOutliner) : [parseOmniOutliner(item.outline)]
    ) : []
  }
}

const getSampleOmniOutliner = Object.assign({}, parseOmniOutliner(omniOutliner.opml.body.outline), {
  cols: []
});

export {
  getSampleTree,
  getSampleMenu,
  getSampleInvest,
  getSampleOutline,
  getSampleOmniOutliner
}

