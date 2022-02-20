import styles from './CommonPageWrapper.module.css';

const CommonPageWrapper = ({ children }) => {
  return (
    <ul className={styles.wrapperSection}>
      <li className={styles.firstElement}>{children[0]}</li>
      <li className={styles.secondElement}>{children[1]}</li>
      <li className={styles.thirdElement}>{children[2]}</li>
      <li className={styles.fourthElement}>{children[3]}</li>
      <li className={styles.tableDesc}>{children[4]}</li>
    </ul>
  );
};

export default CommonPageWrapper;
