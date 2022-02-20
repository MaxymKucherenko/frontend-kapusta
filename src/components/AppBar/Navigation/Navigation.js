import React, { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import Media from 'react-media';
import { useNavigate } from 'react-router-dom';
import s from './Navigation.module.css';
import Icons from '../../Icon';
import Modal from '../../Modal';
import { logOut } from '../../../redux/auth/auth-operations';

export default function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(prevShowModal => !prevShowModal);
  };

  const logoutModal = () => {
    dispatch(logOut());
    toggleModal();
    navigate('/auth');
  };

  return (
    <>
      <div className={s.header__control_wrapper}>
        <div className={s.header__user_wrapper}>
          <span className={s.header_avatar}></span>
          <Media
            queries={{
              small: '(max-width: 767px)',
              medium: '(min-width: 768px)',
            }}
          >
            {matches => (
              <Fragment>
                {matches.medium && (
                  <p className={s.header__login_name}>User Name</p>
                )}
              </Fragment>
            )}
          </Media>
        </div>

        <Media
          queries={{
            small: '(max-width: 767px)',
            medium: '(min-width: 768px)',
          }}
        >
          {matches => (
            <Fragment>
              {matches.small && (
                <button
                  type="button"
                  onClick={toggleModal}
                  className={s.header__logout_svg}
                >
                  <Icons iconName="logout" />
                </button>
              )}
              {matches.medium && (
                <button
                  type="button"
                  onClick={toggleModal}
                  className={s.header_logout_button}
                >
                  <span className={s.header__logout_text}>Выйти</span>
                </button>
              )}
            </Fragment>
          )}
        </Media>
      </div>
      {showModal && (
        <Modal
          modalTitle={'Вы действительно хотите выйти?'}
          handleClickLeft={logoutModal}
          handleClickRight={toggleModal}
          onClose={toggleModal}
        />
      )}
    </>
  );
}
