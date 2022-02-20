import { Fragment, useState } from 'react';
import Media from 'react-media';

import styles from './IncomeOutcomeButtons.module.css';

const IncomeOutcomeButtons = ({
  transactionType,
  toggleTransactionType,
  showMobileAddView,
}) => {
  const type = transactionType;

  const [outcomeActive, setOutcomeActive] = useState(true);
  const [incomeActive, setIncomeActive] = useState(false);

  const toggleActive = () => {
    if (incomeActive) {
      setOutcomeActive(true);
      setIncomeActive(false);
      return;
    }

    if (outcomeActive) {
      setIncomeActive(true);
      setOutcomeActive(false);
    }
  };

  const changeType = () => {
    toggleTransactionType();
  };

  const showMobile = () => {
    showMobileAddView();
  };

  const changeTypeView = () => {
    changeType();
    showMobile();
  };

  return (
    <Media
      queries={{
        small: '(max-width: 767px)',
        medium: '(min-width: 768px)',
      }}
    >
      {matches => (
        <Fragment>
          {matches.small && (
            <div className={styles.incomeOutcomeButtons}>
              <button
                className={styles.typeButton}
                type="button"
                onClick={changeTypeView}
              >
                РАСХОД
              </button>

              <button
                className={styles.typeButton}
                type="button"
                onClick={changeTypeView}
              >
                ДОХОД
              </button>
            </div>
          )}
          {matches.medium && (
            <Fragment>
              <button
                className={`${styles.typeButton}
               ${type === 'outcome' && styles.isActive}`}
                type="button"
                onClick={(toggleActive, changeType)}
              >
                РАСХОД
              </button>

              <button
                className={`${styles.typeButton}
               ${type === 'income' && styles.isActive}`}
                type="button"
                onClick={(toggleActive, changeType)}
              >
                ДОХОД
              </button>
            </Fragment>
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default IncomeOutcomeButtons;
