import axios from 'axios';

axios.defaults.baseURL = 'https://64468888ee791e1e290201f9.mockapi.io/users';

export const FetchUsers = async page => {
  const response = await axios.get('/user', {
    params: {
      page,
      limit: 3,
    },
  });
  return response;
};
