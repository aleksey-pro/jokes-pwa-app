import React, { Component } from 'react';
import Screen from '../components/screen/Screen';
import Voter from '../components/voter/Voter';
import NextBtn from '../components/nextBtn/nextBtn';

import styles from './Layout.module.css';

export default class Layout extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Screen />
        <NextBtn />
        <Voter />
        <p className={styles.copyright}> App by aleksey_isaev</p>
      </div>
    );
  }
}
