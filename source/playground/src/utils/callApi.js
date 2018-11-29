const domain = 'https://qplot.com/playground/';

function callApi(url) {
  return fetch(domain + url).then(res => res.json());
}

export default callApi;