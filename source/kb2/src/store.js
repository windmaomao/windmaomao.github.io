// third party
import {observable, action, decorate, computed} from 'mobx';
// services
import ApiService from './Api';

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

class AppStore {
  status = '';
  menu = [];
  article = { id: '', html: '', title: '', anchors: [], anchor: '' };

  get articleId() {
    return this.article.id;
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

  fetchArticle(id) {
    this.article.id = id;
  }
}

decorate(AppStore, {
  status: observable,
  menu: observable,
  article: observable,
  articleId: computed,
  fetchArticle: action.bound
});

export default AppStore;