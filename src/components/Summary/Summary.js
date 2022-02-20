import React, { useEffect } from 'react';
import styles from './Summary.module.css';

import { useSelector } from 'react-redux';
import monthData from '../../data/month.json';

const Summary = type => {
  const { summary } = useSelector(data => data.balanceReducer);

  console.log(summary.filter(item => item.value > 0));

  return (
    <div className={styles.summaryContainer}>
      <h4 className={styles.summaryTitle}>Сводка</h4>
      <ul className={styles.summaryList}>
        {summary
          .filter(item => item.value > 0)
          .map(({ monthIdex, value }) => (
            <li key={monthIdex} className={styles.summaryItem}>
              <p className={styles.summaryDescription}>
                {monthData.find(monthIDd => monthIDd.id === monthIdex).name}
              </p>
              <p className={styles.summaryDescription}>{value}.00</p>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default Summary;
