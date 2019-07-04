import React from 'react';
import { connect } from 'react-redux';
import { fetchJokes, fetchJokesById } from '../../actions';
import styles from './nextBtn.module.css';

// const getPreviousJoke = (ids, cb) => {
//   // const newIds = ids.splice(-1);
//   // const id = newIds[newIds.length - 2];
//   const id = ids[ids.length - 2];
//   cb(id);
// };

const NextBtn = ({ fetchJokes, ids, fetchJokesById }) => {
  return (
    // <div className={styles.wrapper}>
    <button className={styles.btn} onClick={() => fetchJokes()}>
      Next joke
    </button>
    //   <button
    //     className={styles.btn}
    //     disabled={ids.length <= 1}
    //     onClick={() => getPreviousJoke(ids, fetchJokesById)}
    //   >
    //     Prev joke
    //   </button>
    // </div>
  );
};

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
