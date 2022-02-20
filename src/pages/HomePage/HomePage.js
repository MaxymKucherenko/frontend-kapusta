import React, { useState } from 'react';
import LoginForm from '../../components/LogInForm';
import { BackgroundAuth } from '../../components/Background';
import RegistrationForm from '../../components/RegistrationForm/RegistrationForm';
import s from './HomePage.module.css';

const HomePage = () => {
  const [login, setLogin] = useState(true);

  const onRegisterClick = () => {
    setLogin(false);
  };

  const onComeBackClick = () => {
    setLogin(true);
  };

  return (
    <BackgroundAuth>
      <div className={s.loginWrapper}>
        {login ? (
          <LoginForm onClickRegister={onRegisterClick} />
        ) : (
          <RegistrationForm onClickComeBack={onComeBackClick} />
        )}
      </div>
    </BackgroundAuth>
  );
};

export default HomePage;
