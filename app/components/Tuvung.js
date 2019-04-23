// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Tuvung.css';
import Search from './Search';
import Sort from './Sort';
import Status from './Status';
import Input from './Input';
import WordTable from './WordTable';

type Props = {};

export default class Tuvung extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        <Search />
        <Sort />
        <Status keyword='foo' currentPage={1} totalPages={2} totalWords={20} />
        <Input />
        <WordTable />
      </div>
    );
  }
}
