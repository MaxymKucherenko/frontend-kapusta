import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Container from '../../components/Container';
import { useDispatch } from 'react-redux';
import { googleLogIn } from '../../redux/auth/auth-slice';
import s from './GoogleRedirectView.module.css';
import operations from '../../redux/auth/auth-operations';

const GoogleRedirectView = () => {
  const dispatch = useDispatch();
  const location = useLocation();
  const balance = new URLSearchParams(location.search).get('balance');
  const token = new URLSearchParams(location.search).get('token');
  const email = new URLSearchParams(location.search).get('email');
  const name = new URLSearchParams(location.search).get('name');
  const newUser = {
    email,
    balance,
    token,
    name,
  };
  operations.token.set(token);

  useEffect(() => {
    dispatch(googleLogIn(newUser));
  }, []);

  return (
    <section className={s.section}>
      <Container>
        <div className={s.mainWrapper}>
          <div className={s.textWrapper}></div>
          <div>
            <h2 className={s.notice}>Redirecting...</h2>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default GoogleRedirectView;
