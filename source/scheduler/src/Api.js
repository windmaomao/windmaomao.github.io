export default class ApiService {
  static debugDomain = 'http://localhost:3000/';
  static domain = 'https://sleepy-kalam-ff10a0.netlify.com/scheduler/';
  static debug = false;

  static getInfo() {
    let url = 'schedule.json';
    if (ApiService.debug) {
      url = ApiService.debugDomain + url;
    } else {
      url = ApiService.domain + url;
    }
    return fetch(url).then(res => res.json());
  }
}
