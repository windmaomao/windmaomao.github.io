// third party
import {observable, action, decorate, computed} from 'mobx';
// services
import ApiService from './Api';
import MarkdownService from './Markdown';
import {defaultArticleId, storedKeys, appId} from './constant';

const apiFailedErrorMsg = 'API Error';
const md = new MarkdownService();
const startArticleId = localStorage.getItem(storedKeys.articleId) || defaultArticleId;

class AppStore {
  status = '';
  menu = [];
  article = { id: '', html: '', title: '', anchors: [], anchor: '' };
  ui = { sidenavOn: false, appnavOn: false };
  apps = [];
  appId = appId;

  get articleId() {
    return this.article.id;
  }

  constructor() {
    this.fetchApps();
    this.fetchMenu();
    this.fetchArticle(startArticleId);
  }

  fetchMenu() {
    ApiService.getMenu().then(
      action('fetchMenu:Success', menu => {
        this.menu.replace(menu);
      }),
      action('fetchMenu:Error', error => {
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
      action('fetchArticle:Success', source => {
        this.article.id = id;
        const {html, title, anchors} = this._renderMarkdown(source);
        this.article.html = html;
        this.article.title = title;
        this.article.anchors = anchors;
        this._storeArticleId(id);
      }),
      action('fetchArticle:Error', error => {
        this.state = apiFailedErrorMsg;
      })
    );
  }

  toggleSidenav() {
    this.ui.sidenavOn = !this.ui.sidenavOn;
  }

  toggleAppnav() {
    this.ui.appnavOn = !this.ui.appnavOn;
  }

  fetchApps() {
    ApiService.getApps().then(
      action('fetchApps:Success', apps => {
        this.apps.replace(apps);
      }),
      action('fetchApps:Error', error => {
        this.state = apiFailedErrorMsg;
      })
    );
  }
}

decorate(AppStore, {
  status: observable,
  menu: observable,
  article: observable,
  ui: observable,
  apps: observable,
  appId: observable,
  articleId: computed,
  toggleSidenav: action.bound,
  toggleAppnav: action.bound,
  fetchMenu: action.bound,
  fetchArticle: action.bound,
  fetchApps: action.bound,
});

export default AppStore;