// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './WordRow.css';

type Props = {
  word: string,
  meaning: string,
  soundUrl: string
};

export default class WordRow extends Component<Props> {
  props: Props;

  render() {
    const {
      word,
      meaning,
      soundUrl
    } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <span>{word}</span>
        <span>{meaning}</span>
        <span>{soundUrl}</span>
      </div>
    );
  }
}
