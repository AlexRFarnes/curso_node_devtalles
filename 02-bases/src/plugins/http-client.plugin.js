const axios = require("axios");

const httpClientPlugin = {
  get: async url => {
    const { data } = await axios.get(url);
    console.log(data);
    return data;
  },
  post: async (url, body) => {},
  put: async (url, body) => {},
  delete: async url => {},
};

module.exports = { httpClient: httpClientPlugin };
