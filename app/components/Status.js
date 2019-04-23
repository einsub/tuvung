// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Status.css';

type Props = {
  keyword: string,
  currentPage: number,
  totalPages: number,
  totalWords: number
};

export default class Status extends Component<Props> {
  props: Props;

  render() {
    const {
      keyword,
      currentPage,
      totalPages,
      totalWords
    } = this.props;
    return (
      <div className={styles.container} data-tid="container">
        <span>{keyword}</span>
        <span>{currentPage}</span>
        <span>{totalPages}</span>
        <span>{totalWords}</span>
      </div>
    );
  }
}
