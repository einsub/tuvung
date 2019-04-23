// @flow
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import routes from '../constants/routes';
import styles from './Sort.css';

type Props = {
};

export default class Sort extends Component<Props> {
  props: Props;

  render() {
    return (
      <div className={styles.container} data-tid="container">
        Sort
      </div>
    );
  }
}
