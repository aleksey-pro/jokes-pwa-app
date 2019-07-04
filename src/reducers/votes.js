import { UPVOTE_JOKE, DOWNVOTE_JOKE, FETCH_JOKE } from '../actions/types';

const getVotes = (
  state = {
    upvoted: false,
    downvoted: false,
  },
  { type }
) => {
  switch (type) {
    case UPVOTE_JOKE:
      return {
        upvoted: true,
      };
    case DOWNVOTE_JOKE:
      return {
        downvoted: true,
      };
    case FETCH_JOKE:
      return {
        upvoted: false,
        downvoted: false,
      };
    default:
      return state;
  }
};

export default getVotes;
