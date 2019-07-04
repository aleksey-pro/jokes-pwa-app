import {
  FETCH_JOKE,
  FETCH_JOKE_BY_ID,
  FETCH_JOKES_SUCCESS,
  REQUEST_ERRORED,
} from '../actions/types';

const getJokes = (
  state = {
    isFetching: false,
    error: false,
    joke: {
      id: '',
      content: '',
      upvotes: '',
      downvotes: '',
    },
    ids: [],
  },
  { type, payload }
) => {
  switch (type) {
    case FETCH_JOKE:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_JOKE_BY_ID:
      return {
        ...state,
        isFetching: true,
      };
    case FETCH_JOKES_SUCCESS:
      return {
        isFetching: false,
        joke: payload,
        ids: state.ids.concat(payload.id),
      };
    case REQUEST_ERRORED:
      return {
        ...state,
        isFetching: false,
        error: payload,
      };
    default:
      return state;
  }
};

export default getJokes;
