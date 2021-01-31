import React from 'react';
import InputForm from '../Forms/InputForm/InputForm';
import styles from './HomePage.module.css';

const HomePage = props => {
  return(
    <div className={styles.hpWrapper}>
      <div className={styles.header}>
        <h1>Pay.Me</h1>
      </div>
      <div className={styles.hpInputWrapper}>
        <InputForm />
      </div>
    </div>
  )
}



export default HomePage