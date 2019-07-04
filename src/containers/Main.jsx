import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import styles from './Main.module.css';

export default class Main extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <p>Main Page</p>
        <Link to="/users/">Users</Link>
      </div>
    );
  }
}
