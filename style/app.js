Vue.use(VueMarkdown);
new Vue({
  el: 'body',
  data: {
    root: "https://windmaomao.github.io/",
    resources: [],
    source: "",
    style: "whitey",
    md: "resume/profile-frontend",
    toc: true,
    single: false,
    admin: false,
    sidebar: true,
  },
  filters: {
    formatId: function(value) {
      if (!value) return '';
      segs = value.split("-");
      return segs.join(' '); 
    }
  },
  methods: {
    reset() {
      this.style = 'github';
      this.changeStyle();
    },
    load(name) {
      var fn = this.root + name + ".md";
      var that = this;
      fetch(fn)
        .then(function(res) { return res.text(); })
        .then(function(res) { that.source = res; })
      ;    
    },
    changeStyle() {
      const root = this.root + "style/";
      var found = document.getElementById('style');
      if (found) {
        found.href = root + this.style + ".css";
      }
    },
    toggleSidebar() {
      this.sidebar = !this.sidebar;
    },
    getParams() {
      var params = new URLSearchParams(window.location.search);
      this.style = params.get('st') || this.style;
      this.md = params.get('md') || this.md;
      this.single = params.get('single') || this.single;
      this.admin = params.get('ad') || false;
      this.sidebar = params.get('nt') ? false : this.sidebar;
    },
    highlight() {
      Prism.highlightAll();
    }
  },
  created() {
    this.blogs = ['index', 'power-of-loss', 'identity-debt', 'sustainable-prototyping', 'protection-from-loss', 'perfect-google-map', 'middle-ground', 'reusable-form', 'helping-others', 'law-of-winning', 'reusable-components', 'angular-on-windows', 'tiny-upscaling', 'build-new-system', 'dynamic-static-approach', 'container-to-rescue', 'being-dependent', 'active-management', 'floating-pot'];
    this.books = ['index', 'art-of-war', 'big-shifts-ahead', 'five-rules-stock-investing', 'slash-retirement-risk'];
    this.repos = ['angular-mc-common', 'angular2-mc-common'];
    this.financials = ['tree-structure', 'balace-sheet', 'income-statement'];
    this.purchases = ['index'];
    this.resources = [
      { type: 'book', title: 'Books', items: this.books },
      { type: 'repository', title: 'Repos', items: this.repos },
      { type: 'blog', title: 'Blogs', items: this.blogs },
      { type: 'finance', title: 'Financials', items: this.financials },
      { type: 'purchase', title: 'Purchases', items: this.purchases }
    ];
    this.styles = ['academic', 'ash', 'github', 'han', 'newsprint', 'pixyll', 'whitey'];
    
    this.getParams();
    this.changeStyle();

    // this.load('blog/active-management');
    // this.load('repository/angular2-mc-common');
    // this.load('blog/index');
    this.load(this.md);
  } 
});