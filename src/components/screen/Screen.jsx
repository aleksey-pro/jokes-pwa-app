import React from 'react';
import styles from './Screen.module.css';
import { connect } from 'react-redux';
import { fetchJokes } from '../../actions';

class Screen extends React.Component {
  componentDidMount() {
    this.props.fetchJokes();
  }

  render() {
    const { joke } = this.props;
    return (
      <div className={styles.wrapper}>
        <p className={styles.text}>{joke.content}</p>
        <div className={styles.votes}>
          <span className={styles.downvotes}>{joke.upvotes} &hearts;</span>
          <span className={styles.upvotes}>{joke.downvotes} &hearts;</span>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  joke: state.jokes.joke,
});

const mapDispatchToProps = {
  fetchJokes,
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Screen);
