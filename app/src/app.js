$(document).ready(() => {
  setup();

  // toggle burger button
  $('.navbar-burger').click(() => {
    $('#burger').toggleClass('is-active');
    $('#navbar').toggleClass('is-active');
  });
});

function setup() {
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
      compiled: "",
    },
    filters: {
      formatId: function(value) {
        return value ? value.split("-").join(' ') : '';
      }
    },
    watch: {
      source: function(oldSource, newSource) {
        this.compiled = marked(this.source, { sanitize: true, smartypants: true });
        this.$nextTick(function() {
          Prism.highlightAll();
          $("#toc").empty().toc({ content: '#write', headings: "h2, h3" });
          $('#burger').removeClass('is-active');
          $('#navbar').removeClass('is-active');
        });
      }
    },
    methods: {
      reset() {
        this.style = 'github';
        this.changeStyle();
      },
      loadMd(name) {
        const fn = this.root + name + ".md";
        $.get(fn, (data) => { this.source  = data; });
      },
      changeStyle() {
        const root = this.root + "style/";
        var found = document.getElementById('style');
        if (found) {
          found.href = root + this.style + ".css";
        }
        localStorage.setItem('qp-style', this.style);
      },
      toggleSidebar() {
        this.sidebar = !this.sidebar;
      },
      getParams() {
        var params={};
        window.location.search.replace(/[?&]+([^=&]+)=([^&]*)/gi, function(str,key,value) {
          params[key] = value;
        });
        this.style = params['st'] || this.style;
        this.md = params['md'] || this.md;
        this.single = params['single'] || this.single;
        this.admin = params['ad'] || false;
        this.sidebar = params['nt'] ? false : this.sidebar;
      }
    },
    created() {
      this.blogs = ['index', 'power-of-loss', 'identity-debt', 'sustainable-prototyping', 'protection-from-loss', 'perfect-google-map', 'middle-ground', 'reusable-form', 'helping-others', 'law-of-winning', 'reusable-components', 'angular-on-windows', 'tiny-upscaling', 'build-new-system', 'dynamic-static-approach', 'container-to-rescue', 'being-dependent', 'active-management', 'floating-pot'];
      this.books = ['index', 'art-of-war', 'big-shifts-ahead', 'five-rules-stock-investing', 'slash-retirement-risk'];
      this.repos = ['angular-mc-common', 'angular2-mc-common'];
      this.financials = ['tree-structure', 'balace-sheet', 'income-statement', 'investment'];
      this.purchases = ['index'];
      this.resources = [
        { type: 'book', title: 'Books', items: this.books },
        { type: 'repository', title: 'Repos', items: this.repos },
        { type: 'blog', title: 'Blogs', items: this.blogs },
        { type: 'finance', title: 'Financials', items: this.financials },
        { type: 'purchase', title: 'Purchases', items: this.purchases }
      ];
      this.styles = ['academic', 'dropbox', 'github', 'gothic', 'han', 'newsprint', 'pixyll', 'whitey'];
      this.style = localStorage.getItem('qp-style') || this.style;

      this.getParams();
      this.changeStyle();
      this.loadMd(this.md);
    },
  });
}