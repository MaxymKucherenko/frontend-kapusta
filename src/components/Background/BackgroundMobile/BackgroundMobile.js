import styles from './BackgroundMobile.module.css';

const BackgroundMobile = ({ children }) => {
  return <section className={styles.section}>{children}</section>;
};

export { BackgroundMobile };
