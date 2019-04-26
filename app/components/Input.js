// @flow
import React, { useState, useRef } from 'react';
import styles from './Input.css';
import { useOuterClickNotifier } from '../utils/hooks';

type Props = {};

function Input() {
  const innerRef = useRef(null);
  const [isInputMode, toggleInputMode] = useState(false);

  function onClickPlus() {
    toggleInputMode(true)
  };

  useOuterClickNotifier(
    e => {
      toggleInputMode(false)
    },
    innerRef
  )

  const plusButton = (
    <button type="button" onClick={onClickPlus}>
      +
    </button>
  );

  const inputField = (
    <div ref={innerRef}>
      <input type="text" />
    </div>
  );

  return (
    <div className={styles.container} data-tid="container">
      {isInputMode ? inputField : plusButton}
    </div>
  );
}

export default Input
