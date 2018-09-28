// third party
import {observable, action, decorate, computed} from 'mobx';
// services
import ApiService from './Api';
import MarkdownService from './Markdown';
import {defaultArticleId, storedKeys} from './constant';

// const initAppContext = {
//   apps: [],
//   menu: [],
//   article: {
//     id: '',
//     html: '',
//     title: '',
//     anchors: [],
//     anchor: '',
//   },
//   appnav: {
//     toggled: false
//   },
//   sidenav: {
//     toggled: false,
//     selected: '',
//   },
//   navbar: {
//     toggled: false,
//     title: 'Knowledgebase',
//   },
// };

const apiFailedErrorMsg = 'API Error';
const md = new MarkdownService();
const startArticleId = localStorage.getItem(storedKeys.articleId) || defaultArticleId;

class AppStore {
  status = '';
  menu = [];
  article = { id: '', html: '', title: '', anchors: [], anchor: '' };
  ui = { sidenavOn: false };

  get articleId() {
    return this.article.id;
  }

  constructor() {
    this.fetchMenu();
    this.fetchArticle(startArticleId);
  }

  fetchMenu() {
    ApiService.getMenu().then(
      action('fetchSuccess', menu => {
        this.menu.replace(menu);
      }),
      action('fetchError', error => {
        this.state = apiFailedErrorMsg;
      })
    );
  }

  _renderMarkdown(source) {
    const html = md.render(source);
    return {
      html,
      title: md.title,
      anchors: md.anchors
    };
  }

  _storeArticleId(id) {
    localStorage.setItem(storedKeys.articleId, id);
  }

  fetchArticle(id) {
    ApiService.getArticle(id).then(
      action('fetchSuccess', source => {
        this.article.id = id;
        const {html, title, anchors} = this._renderMarkdown(source);
        this.article.html = html;
        this.article.title = title;
        this.article.anchors = anchors;
        this._storeArticleId(id);
      }),
      action('fetchError', error => {
        this.state = apiFailedErrorMsg;
      })
    );
  }

  toggleSidenav() {
    this.ui.sidenavOn = !this.ui.sidenavOn;
  }
}

decorate(AppStore, {
  status: observable,
  menu: observable,
  article: observable,
  ui: observable,
  articleId: computed,
  fetchArticle: action.bound,
  toggleSidenav: action.bound
});

export default AppStore;