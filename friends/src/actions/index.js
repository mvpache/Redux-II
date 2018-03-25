import axios from 'axios';

export const LOADING = 'LOADING';
export const GOT_FRIENDS = 'GOT_FRIENDS';
export const ERROR = 'ERROR';
export const ADDED_FRIEND = 'ADDED_FRIEND';

export const getFriends = () => dispatch => {
  dispatch({ type: LOADING });

  axios.get('http://localhost:5000/api/friends')
    .then(response => {
      dispatch({ type: GOT_FRIENDS, friends: response.data });
    })
    .catch(err => {
      dispatch({ type: ERROR, errorMessage: 'GET ERROR' })
    });
};

export const addFriend = (friend) => dispatch => {
  dispatch({ type: LOADING });

  axios.post('http://localhost:5000/api/friends', friend)
    .then(response => {
      dispatch({ type: ADDED_FRIEND, message: 'Added friend', friends: response.data })
    })
    .catch(err => {
      dispatch({ type: ERROR, message: 'POST ERROR' })
    })
}



