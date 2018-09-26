const DOMAIN = 'https://sleepy-kalam-ff10a0.netlify.com/';
const APP = 'kb/';
const DATA = 'static/';

export default class ApiService {
  // static domain = 'http://localhost:3000/';
  static domain = DOMAIN + APP;
  static data = DOMAIN + DATA;
  
  static getArticle(id) {
    const url = ApiService.domain + id + '.md?v=' + Date.now();
    return fetch(url).then(res => res.text());
  }

  static getMenu() {
    const url = this.domain + 'menu.json';
    return fetch(url).then(res => res.json());
  }

  static getApps() {
    const url = this.domain + 'app.json';
    return fetch(url).then(res => res.json());
  }
}
  