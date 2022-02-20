import React, { useState } from 'react';
import sprite from './sprite.svg';
import Icons from '../Icon';
import { useSelector, useDispatch } from 'react-redux';
import { setCategity } from '../../redux/balance/index';

import svg from './svg';

import s from './reportCoact.module.css';

export default function ReportCoast() {
  const [coast, setCoast] = useState(true);
  const coastOrIncome = () => {
    setCoast(coast => !coast);
  };
  const { sumByCategoryConsumption, sumByCategoryIncome } = useSelector(
    data => data.balanceReducer,
  );
  const dispatch = useDispatch();

  return (
    <div className={s.container}>
      <div className={s.nav}>
        <button type="button" className={s.reportArrow} onClick={coastOrIncome}>
          <Icons iconName="leftArrow" />
        </button>
        <h2 className={s.reportTitle}>{coast ? 'Расходы' : 'Доходы'}</h2>
        <button type="button" className={s.reportArrow} onClick={coastOrIncome}>
          <Icons iconName="rightArrow" />
        </button>
      </div>
      <ul>
        {coast ? (
          sumByCategoryConsumption?.length > 0 ? (
            sumByCategoryConsumption?.map(category => {
              return (
                <li key={category?.group} className={s.card}>
                  <button
                    type="button"
                    className={s.cardButton}
                    value={category?.group}
                    onClick={e => dispatch(setCategity(e.currentTarget.value))}
                  >
                    <p className={s.cardTitle}>{category.totalCategory}.00</p>
                    <svg className={s.svg}>
                      <use href={sprite + '#' + category?.group} />
                    </svg>
                    <p className={s.cardTitle}>{svg.coast[category?.group]}</p>
                  </button>
                </li>
              );
            })
          ) : (
            <h3>За данный период нет рассходов</h3>
          )
        ) : sumByCategoryIncome?.length > 0 ? (
          sumByCategoryIncome?.map(category => {
            return (
              <li key={category?.group} className={s.card}>
                <button
                  type="button"
                  className={s.cardButton}
                  value={category?.group}
                  onClick={e => dispatch(setCategity(e.currentTarget.value))}
                >
                  <p className={s.cardTitle}>{category.totalCategory}.00</p>
                  <svg className={s.svg}>
                    <use href={sprite + '#' + category?.group} />
                  </svg>
                  <p className={s.cardTitle}>{svg.income[category?.group]}</p>
                </button>
              </li>
            );
          })
        ) : (
          <h3>За данный период нет доходов</h3>
        )}
      </ul>
    </div>
  );
}
