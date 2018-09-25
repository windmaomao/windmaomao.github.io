export default class ApiService {
  static debugDomain = 'http://localhost:3000/';
  static domain = 'https://sleepy-kalam-ff10a0.netlify.com/kb/';
  static debug = false;
  
  static getArticle(id) {
    let url = ApiService.debug ? ApiService.debugDomain : ApiService.domain;
    url = url + id + '.md?v=' + Date.now();
    return fetch(url).then(res => res.text());
  }
}
  