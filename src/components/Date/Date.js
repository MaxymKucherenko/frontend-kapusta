import { useState, useEffect } from 'react';

import styles from './Date.module.css';

const ShowDate = () => {
  const [date, setDate] = useState(+new Date().getDate());
  const [month, setMonth] = useState(+new Date().getMonth() + 1);
  const [year, setYear] = useState(+new Date().getFullYear());

  useEffect(() => {
    if (month < 10) {
      setMonth(`0${month}`);
    }
  }, []);

  return (
    <div className={styles.dateContainer}>
      <p className={styles.dateIcon}></p>
      <p className={styles.date}>
        {date}.{month}.{year}
      </p>
    </div>
  );
};

export default ShowDate;
