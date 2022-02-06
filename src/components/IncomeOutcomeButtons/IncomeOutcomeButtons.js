import { Fragment, useState, useEffect } from 'react';
import Media from 'react-media';

import styles from './IncomeOutcomeButtons.module.css';

import axios from 'axios';
import { useSelector, useDispatch } from 'react-redux';
import { getToken } from '../../redux/auth/auth-selectors';

import { fetchSuccess, fetchError, summary } from '../../redux/balance/index';

const IncomeOutcomeButtons = ({
  transactionType,
  toggleTransactionType,
  showMobileAddView,
}) => {
  /* const type = transactionType; */

  const [outcomeActive, setOutcomeActive] = useState(true);
  const [incomeActive, setIncomeActive] = useState(false);
  const [type, seType] = useState('consumption');
  const [thisYear, setThisYear] = useState(2022);
  const { data } = useSelector(data => data.balanceReducer);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);

  const toggleActive = () => {
    if (incomeActive) {
      setOutcomeActive(true);
      setIncomeActive(false);
      seType(`consumption`);
    }

    if (outcomeActive) {
      setIncomeActive(true);
      setOutcomeActive(false);
      seType(`income`);
    }
  };

  const fethSummary = async type => {
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    try {
      setLoading(true);
      const response = await axios.get(
        `/transaction/summary/${type}/${thisYear}`,
        config,
      );
      dispatch(fetchSuccess(response.data));
      setLoading(false);
    } catch (error) {
      setLoading(false);
      dispatch(fetchError(error.message));
    }
  };

  useEffect(() => {
    fethSummary(type);
  }, [thisYear, type, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(summary(data.summary));
    }
  }, [isLoading]);

  console.log(type);
  console.log(data);

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
               ${outcomeActive && styles.isActive}`}
                type="button"
                onClick={toggleActive}
              >
                РАСХОД
              </button>

              <button
                className={`${styles.typeButton}
               ${incomeActive && styles.isActive}`}
                type="button"
                onClick={toggleActive}
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
