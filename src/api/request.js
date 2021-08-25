import axios from "axios";

class Request {
  constructor(baseURL) {
    this.request = axios.create({
      baseURL
    });
  }

  get = (url) => this.request.get(url);

  post = (url, params) => this.request.get(url, params);
}

export const art = new Request("https://api.artic.edu/api/v1");
