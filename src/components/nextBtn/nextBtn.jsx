import React from 'react';
import { connect } from 'react-redux';
import { fetchJokes, fetchJokesById } from '../../actions';
import styles from './nextBtn.module.css';

class NextBtn extends React.Component {
  constructor() {
    super();
    this.counter = 1;
  }

  getPreviousJoke = (ids, fetchJokesById) => {
    let id = ids[ids.length - this.counter];
    id && fetchJokesById(id);
    this.counter += 2;
  };

  render() {
    const { fetchJokes, ids, fetchJokesById } = this.props;
    return (
      <div className={styles.wrapper}>
        <button
          className={styles.btn}
          onClick={() => {
            this.counter = 2;
            fetchJokes();
          }}
        >
          Next joke
        </button>
        <button
          className={styles.btn}
          disabled={ids.length <= 1}
          onClick={() => this.getPreviousJoke(ids, fetchJokesById)}
        >
          Prev joke
        </button>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ids: state.jokes.ids,
});

const mapDispatchToProps = {
  fetchJokes,
  fetchJokesById,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NextBtn);
