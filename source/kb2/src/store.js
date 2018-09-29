// third party
import {observable, action, decorate} from 'mobx';
// services
import ApiService from './Api';
import MarkdownService from './Markdown';
import {defaultArticleId, storedKeys, appId} from './constant';

const apiFailedErrorMsg = 'API Error';
const md = new MarkdownService();
const startArticleId = localStorage.getItem(storedKeys.articleId) || defaultArticleId;

class AppStore {
  status = {loading: false, active: false, message: ''};
  menu = [];
  article = { id: '', html: '', title: '', anchors: [], anchor: '' };
  ui = { sidenavOn: false, appnavOn: false, tocOn: false };
  apps = [];
  appId = appId;

  initApp() {
    const chain = this.fetchArticle(startArticleId);
    this.startRunner();
    this.fetchApps();
    this.fetchMenu();
    return chain;
  }

  fetchMenu() {
    return ApiService.getMenu().then(
      action('fetchMenu:Success', menu => {
        this.menu.replace(menu);
      }),
      action('fetchMenu:Error', error => {
        // this.state = apiFailedErrorMsg;
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
    this.startSpinner();
    return ApiService.getArticle(id).then(
      action('fetchArticle:Success', source => {
        this.article.id = id;
        const {html, title, anchors} = this._renderMarkdown(source);
        this.article.html = html;
        this.article.title = title;
        this.article.anchors = anchors;
        this._storeArticleId(id);
        this.stopSpinner();
      }),
      action('fetchArticle:Error', error => {
        this.stopSpinner(apiFailedErrorMsg);
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
    return ApiService.getApps().then(
      action('fetchApps:Success', apps => {
        this.apps.replace(apps);
      }),
      action('fetchApps:Error', error => {
        // this.state = apiFailedErrorMsg;
      })
    );
  }

  toggleToc() {
    this.ui.tocOn = !this.ui.tocOn;
  }

  startSpinner() {
    this.status.loading = true;
  }
  stopSpinner(msg) {
    this.status.loading = false;
    if (msg) {
      this.status.message = msg;
    }
  }

  startRunner(msg) {
    this.status.active = true;
    this.status.message = msg;
  }
  stopRunner() {
    this.status.active = false;
    this.status.message = '';
  }
}

decorate(AppStore, {
  status: observable,
  menu: observable,
  article: observable,
  ui: observable,
  apps: observable,
  appId: observable,
  toggleSidenav: action.bound,
  toggleAppnav: action.bound,
  toggleToc: action.bound,
  fetchMenu: action.bound,
  fetchArticle: action.bound,
  fetchApps: action.bound,
  startSpinner: action.bound,
  stopSpinner: action.bound,
  startRunner: action.bound,
  stopRunner: action.bound,
});

export default AppStore;