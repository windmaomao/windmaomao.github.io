// third party
import {observable, action, decorate, computed} from 'mobx';

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

class AppStore {
  apps = [];
  article = { id: '', html: '', title: '', anchors: [], anchor: '' };

  constructor() {}

  get articleId() {
    return this.article.id;
  }

  fetchArticle(id) {
    this.article.id = id;
  }
}

decorate(AppStore, {
  apps: observable.shallow,
  article: observable,
  articleId: computed,
  fetchArticle: action.bound
});

export default AppStore;