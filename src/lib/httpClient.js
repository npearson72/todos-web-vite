import axios from 'axios';

export const httpClient = {
  create(options = {}) {
    this.axios = axios.create(options);

    const originalPatch = this.axios.patch;

    this.axios.patch = async function (url, body, config = {}) {
      const { id } = body.data;
      return originalPatch(`${url}/${id}`, body, config);
    };

    return this.axios;
  }
};
