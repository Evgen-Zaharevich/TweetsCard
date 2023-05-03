import axios from 'axios';

axios.defaults.baseURL = 'https://64468888ee791e1e290201f9.mockapi.io/users/';

export const FetchUsers = async (page, abortController) => {
  const response = await axios.get('/user', {
    params: {
      page,
      limit: 3,
    },
    signal: abortController.signal,
  });
  return response;
};

export const updateUser = async (id, statusFollowed, followers) => {
  try {
    const { data } = await axios.put(`/user/${id}`, {
      followers: followers,
      statusFollowed: statusFollowed,
    });
    return data;
  } catch (e) {
    console.log(e.message);
  }
};
