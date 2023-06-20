import axios from 'axios';

const API_BASE_URL = 'https://swapi.dev/api/';

let cancelToken;

export const getPeople = async (currentPage, searchTerm = '') => {
  if (cancelToken) {
    cancelToken.cancel();
  }

  cancelToken = axios.CancelToken.source();

  try {
    const response = await axios.get(
      `${API_BASE_URL}people?page=${currentPage}&format=json&search=${searchTerm}`,
      { cancelToken: cancelToken.token }
    );

    if (response.data.results) {
      const requests = response.data.results.map(person => {
        return axios.get(person.homeworld).then(homeworldResponse => {
          person.homeworldDetails = homeworldResponse.data;
        });
      });

      await Promise.all(requests);
    }

    console.log('response:', response);
    return response.data;
  } catch (error) {
    if (axios.isCancel(error)) {
      console.log('Request canceled:', error.message);
    } else {
      console.error('Failed to fetch people:', error);
      throw error;
    }
  }
};
