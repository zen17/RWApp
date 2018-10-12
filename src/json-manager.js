export class Fetch {
  constructor() {}
  get(url) {
    return fetch(url);
  }
  post(url, obj) {
    return fetch(url, {
      method: "POST",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: obj
    });
  }
}
