import { ReactComponent as GoogleIcon } from '../../images/google.svg';
import s from './GoogleAuth.module.css';

const BASE_URL = 'http://localhost:3000/api';
// const BASE_URL = 'https://kapusta-group-7.herokuapp.com/api';
// const BASE_URL = 'http://localhost:3000/api';

const GoogleAuth = () => {
  return (
    <>
      <a href={`${BASE_URL}/users/google`} className={s.buttonGoogle}>
        <GoogleIcon className={s.googleSvg} />
        Google
      </a>
    </>
  );
};

export default GoogleAuth;
