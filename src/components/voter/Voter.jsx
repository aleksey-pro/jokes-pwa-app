import React from 'react';
import styles from './Voter.module.css';
import { ReactComponent as ThumbUp } from './Thumbs-Up.svg';
import { ReactComponent as ThumbDown } from './Thumbs-Down.svg';

import { connect } from 'react-redux';
import { upvoteJoke, downvoteJoke } from '../../actions';

const Voter = ({ upvoteJoke, downvoteJoke, jokeId, votes, error }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <button
          className={styles.section_left}
          onClick={() => upvoteJoke(jokeId)}
          disabled={votes.upvoted || votes.downvoted}
        >
          <ThumbUp className={styles.icon} />
        </button>
        <button
          className={styles.section_right}
          onClick={() => downvoteJoke(jokeId)}
          disabled={votes.upvoted || votes.downvoted}
        >
          <ThumbDown className={styles.icon} />
        </button>
      </div>
      {error && <div className={styles.error}>{error}</div>}
    </div>
  );
};

const mapStateToProps = state => ({
  jokeId: state.jokes.joke.id,
  votes: state.votes,
  error: state.jokes.error,
});

const mapDispatchToProps = {
  upvoteJoke,
  downvoteJoke,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Voter);
