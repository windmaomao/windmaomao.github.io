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

export {
  getSampleTree,
  getSampleMenu,
  getSampleInvest,
}

