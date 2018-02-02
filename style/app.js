Vue.use(VueMarkdown);
new Vue({
  el: 'body',
  data: {
    root: "https://windmaomao.github.io/",
    resources: [],
    source: "",
    style: "github",
    toc: true,
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
      fetch(fn)
        .then((res) => res.text())
        .then((res) => { this.source = res; })
      ;    
    },
    changeStyle() {
      const root = this.root + "style/";
      var found = document.getElementById('style');
      if (found) {
        found.href = root + this.style + ".css";
      }
    },
    toggleToc() {
      this.toc = !this.toc;
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
    // this.load('blog/active-management');
    // this.load('repository/angular2-mc-common');
    this.load('resume/profile-frontend');
    this.changeStyle();
    // this.load('blog/index');
  } 
});