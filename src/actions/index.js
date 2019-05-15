import axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';

export const getPeople = () => dispatch => {
  dispatch({ type: FETCHING });
  axios
    .get('https://swapi.co/api/people/')
    .then(res => {
      // console.log(res.data);
      dispatch({ type: SUCCESS, payload: res.data.results });
    })
    .catch(err => {
      console.log(err.response);
      dispatch({
        type: FAILURE,
        payload: err,
      });
    });
};
