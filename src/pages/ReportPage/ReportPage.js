import React, { Fragment, useEffect, useState } from 'react';
import axios from 'axios';
import Media from 'react-media';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import s from './ReportPage.module.css';
import DateField from '../../components/DateField';
import ReportCoast from '../../components/ReportCoast/reportCoact';
import Icons from '../../components/Icon';
import ReportChart from '../../components/ReportChart';
import { BackgroundReport } from '../../components/Background';
import ReportWrapper from '../../components/ReportWrapper';
import { getToken } from '../../redux/auth/auth-selectors';
import Balance from '../../components/Balance';
import ReportBalance from '../../components/ReportBalance/ReportBalance';
import {
  fetchSuccess,
  fetchError,
  sumByCategoryIncome,
  sumByCategoryConsumption,
  sumDescriptionConsumption,
  sumDescriptionIncome,
} from '../../redux/balance/index';
import ReportChartMobile from '../../components/ReportChart/ReportChartMobile';

const ReportPage = () => {
  let navigate = useNavigate();
  const [thisMonth, setThisMonth] = useState(new Date().getMonth());
  const [thisYear, setThisYear] = useState(2022);
  const { data } = useSelector(data => data.balanceReducer);
  const token = useSelector(getToken);
  const dispatch = useDispatch();
  const [isLoading, setLoading] = useState(false);
  const { category } = useSelector(data => data.balanceReducer);

  const fetchData = async () => {
    let config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    try {
      setLoading(true);
      const response = await axios.get(
        `/transaction/report/${thisYear}/${thisMonth + 1}`,
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
    fetchData();
  }, [thisMonth, thisYear, dispatch]);

  useEffect(() => {
    if (data) {
      dispatch(sumByCategoryIncome(data.sumByCategoryIncome));
      dispatch(sumByCategoryConsumption(data.sumByCategoryConsumption));
      dispatch(sumDescriptionIncome(data.sumDescriptionIncome));
      dispatch(sumDescriptionConsumption(data.sumDescriptionConsumption));
    }
  }, [isLoading]);

  function handleClick() {
    navigate('/');
  }

  const nextMonth = () => {
    setThisMonth(thisMonth + 1);
    if (thisMonth === 11) {
      setThisMonth(0);
      setThisYear(thisYear + 1);
    }
  };

  const prevMonth = () => {
    setThisMonth(thisMonth - 1);
    if (thisMonth === 0) {
      setThisMonth(11);
      setThisYear(thisYear - 1);
    }
  };

  return (
    <BackgroundReport>
      <div className={s.container}>
        <button className={s.button__back} onClick={handleClick}>
          <Icons iconName="goArrow" />
          <span className={s.button__name}>Вернуться на главную</span>
        </button>
        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && (
                <>
                  <div className={s.small__container}>
                    <p className={s.date__description}>Текущий период:</p>
                    <div className={s.datePicker__container}>
                      <button
                        className={s.datePicker__button}
                        onClick={prevMonth}
                      >
                        <Icons iconName="leftArrow" />
                      </button>
                      <DateField thisYear={thisYear} thisMonth={thisMonth} />
                      <button
                        className={s.datePicker__button}
                        onClick={nextMonth}
                      >
                        <Icons iconName="rightArrow" />
                      </button>
                    </div>
                  </div>
                  <Balance hide={s.button__balance} style={s.balance__style} />
                </>
              )}
              {matches.medium && (
                <>
                  <Balance hide={s.button__balance} />
                  <div className={s.small__container}>
                    <p className={s.date__description}>Текущий период:</p>
                    <div className={s.datePicker__container}>
                      <button
                        className={s.datePicker__button}
                        onClick={prevMonth}
                      >
                        <Icons iconName="leftArrow" />
                      </button>
                      <DateField thisYear={thisYear} thisMonth={thisMonth} />
                      <button
                        className={s.datePicker__button}
                        onClick={nextMonth}
                      >
                        <Icons iconName="rightArrow" />
                      </button>
                    </div>
                  </div>
                </>
              )}
            </Fragment>
          )}
        </Media>
      </div>
      <ReportWrapper>
        <ReportBalance />
      </ReportWrapper>
      <ReportWrapper>
        <ReportCoast />
      </ReportWrapper>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && (
              <ReportWrapper>
                <ReportChartMobile category={category} />
              </ReportWrapper>
            )}
            {matches.medium && (
              <ReportWrapper>
                <ReportChart category={category} />
              </ReportWrapper>
            )}
          </Fragment>
        )}
      </Media>
    </BackgroundReport>
  );
};

export default ReportPage;
