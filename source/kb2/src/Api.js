export default class ApiService {
  // static domain = 'http://localhost:3000/';
  static domain = 'https://sleepy-kalam-ff10a0.netlify.com/kb/';
  
  static getArticle(id) {
    const url = ApiService.domain + id + '.md?v=' + Date.now();
    return fetch(url).then(res => res.text());
  }

  static getMenu() {
    const url = this.domain + 'menu.json';
    return fetch(url).then(res => res.json());
  }
}
  