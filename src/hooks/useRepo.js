import config from '@config';
import { httpClient } from '@lib';
import { todosRepo } from '@repos';
import { useAuth } from '@hooks';

export function useRepo() {
  const { accessToken } = useAuth();

  const privateApi = httpClient.create({
    baseURL: config.api.url,
    headers: {
      Authorization: `Bearer ${accessToken}`,
      Accept: 'application/vnd.api+json',
      'Content-Type': 'application/vnd.api+json'
    }
  });

  privateApi.interceptors.response.use(
    response => response,
    error => {
      if (error && error.response) {
        const message = error.response.data.errors
          .map(err => err.detail)
          .toString();

        throw new Error(message);
      }

      return Promise.reject(error);
    }
  );

  return { todosRepo: todosRepo(privateApi) };
}
