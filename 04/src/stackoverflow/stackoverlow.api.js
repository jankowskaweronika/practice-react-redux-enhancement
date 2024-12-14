const BASE_URL = "https://api.stackexchange.com";

export default class StackOverflowAPI {
  constructor() {
    this.url = BASE_URL;
  }

  getThreads(title, sortOrder) {
    return fetch(
      `${this.url
      }/2.3/similar?pagesize=20&order=desc&sort=${sortOrder}&title=${encodeURIComponent(
        title
      )}&site=stackoverflow`
    )
      .then((resp) => {
        if (!resp.ok) {
          throw Error(resp.statusText);
        }
        return resp.json();
      })
      .then((data) => {
        if (data && data.items) {
          return data.items;
        }
        throw new Error("Błędna struktura danych");
      });
  }
}
