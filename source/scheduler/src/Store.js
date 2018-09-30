// third party
import {observable, action, decorate} from 'mobx';
// services
import ApiService from './Api';

class AppStore {
  students = [];
  teachers = [];
  prefs = [];
  plan = { id: '', html: '', title: '', anchors: [], anchor: '' };

  initApp() {}

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
}

decorate(AppStore, {
  teachers: observable,
  students: observable,
  prefs: observable,
  plan: observable,
  planSchedule: action.bound,
});

export default AppStore;