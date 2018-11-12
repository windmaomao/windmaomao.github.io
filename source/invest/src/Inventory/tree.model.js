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

export {
  getSampleTree,
  getSampleMenu,
  getSampleInvest,
  getSampleOutline 
}

