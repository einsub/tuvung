// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './WordTable.css';
import WordRow from './WordRow';

type Props = {};

export default class WordTable extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <WordRow word='alphabetA' meaning='means' soundUrl='https://www.google.com/' />
        <WordRow word='alphabetB' meaning='means' soundUrl='https://www.google.com/' />
        <WordRow word='alphabetC' meaning='means' soundUrl='https://www.google.com/' />
        <WordRow word='alphabetD' meaning='means' soundUrl='https://www.google.com/' />
      </div>
    );
  }
}
