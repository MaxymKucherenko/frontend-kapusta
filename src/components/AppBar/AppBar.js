import React from 'react';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/auth-selectors';
import s from './AppBar.module.css';
import Icons from '../Icon';
import Navigation from './Navigation/Navigation';

export default function AppBar() {
  const isLoggedIn = useSelector(getIsLoggedIn);

  return (
    <header className={s.header}>
      <div className={s.header__wrapper}>
        <a href="/">
          <Icons iconName="miniLogo" />
        </a>
        {isLoggedIn && <Navigation />}
      </div>
    </header>
  );
}
