import axios from '../../axios';

export const setUser = (payload) => {
  return {
    type: 'SET_USER',
    payload,
  };
};

export const handleUser = (token) => {
  return async (dispatch) => {
    try {
      const { data } = await axios.get('/api/user/getdata', {
        headers: {
          authorization: token,
        },
      });
      dispatch(setUser(data));
    } catch (err) {
      console.log(err);
    }
  };
};
