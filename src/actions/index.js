import {
  FETCH_JOKE,
  FETCH_JOKE_BY_ID,
  FETCH_JOKES_SUCCESS,
  UPVOTE_JOKE,
  DOWNVOTE_JOKE,
  REQUEST_ERRORED,
} from './types';
import {
  fetchJoke as fetchJokeApi,
  upvoteJoke as upvoteJokeApi,
  downvoteJoke as downvoteJokeApi,
  fetchJokeById as fetchJokeByIdApi,
} from '../api';

const getJokes = joke => dispatch => {
  dispatch({
    type: FETCH_JOKES_SUCCESS,
    payload: joke,
  });
};

export const fetchJokes = () => async dispatch => {
  dispatch({
    type: FETCH_JOKE,
    isFetching: true,
  });
  try {
    await fetchJokeApi().then(data => {
      dispatch(getJokes(data));
    });
  } catch (err) {
    dispatch({
      type: REQUEST_ERRORED,
      payload: err.message,
    });
  }
};

export const fetchJokesById = id => async dispatch => {
  dispatch({
    type: FETCH_JOKE_BY_ID,
    isFetching: true,
  });
  try {
    await fetchJokeByIdApi(id).then(data => {
      dispatch(getJokes(data));
    });
  } catch (err) {
    dispatch({
      type: REQUEST_ERRORED,
      payload: err,
      error: true,
    });
  }
};

export const upvoteJoke = id => async dispatch => {
  dispatch({
    type: UPVOTE_JOKE,
  });
  try {
    await upvoteJokeApi(id).then(() => {
      dispatch(fetchJokesById(id));
    });
  } catch (err) {
    dispatch({
      type: REQUEST_ERRORED,
      payload: err,
      error: true,
    });
  }
};

export const downvoteJoke = id => async dispatch => {
  dispatch({
    type: DOWNVOTE_JOKE,
  });
  try {
    await downvoteJokeApi(id).then(() => {
      dispatch(fetchJokesById(id));
    });
  } catch (err) {
    dispatch({
      type: REQUEST_ERRORED,
      payload: err,
      error: true,
    });
  }
};
