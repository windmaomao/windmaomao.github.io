export default class ApiService {
  static debugDomain = 'http://localhost:3000/';
  static domain = 'https://sleepy-kalam-ff10a0.netlify.com/kb/';
  static debug = false;
  
  static getArticle() {
    let url = 'resume/frontend';
    if (ApiService.debug) {
      url = ApiService.debugDomain + url;
    } else {
      url = ApiService.domain + url;
    }
    url = url + '.md?v=' + Date.now();
    return fetch(url).then(res => res.text());
  }
}
  