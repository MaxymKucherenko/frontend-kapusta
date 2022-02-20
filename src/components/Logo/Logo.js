import React, { Fragment } from 'react';
import Media from 'react-media';
import s from './Logo.module.css';
import Icons from '../Icon';

export default function Logo() {
  return (
    <div className={s.container}>
      <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px) and (max-width: 1279px)',
          large: '(min-width: 1280px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.small && <Icons iconName="logo-mobile" />}
            {matches.medium && <Icons iconName="logo-tablet" />}
            {matches.large && <Icons iconName="logo" />}
          </Fragment>
        )}
      </Media>
      <p className={s.text}>SMART FINANCE</p>
    </div>
  );
}
