import Container from '../../Container';
import Logo from '../../Logo';
import s from './BackgroundAuth.module.css';

const BackgroundAuth = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.decorSection}>
        <div className={s.decorImageTop}></div>

        <Container>
          <div className={s.inner}>
            <div className={s.container_mobile}>
              <Logo />
            </div>
            <div className={s.loginSection}>{children}</div>
          </div>
          <div className={`${s.bounce} ${s.decorImageBottom}`}></div>
        </Container>
      </div>
    </div>
  );
};

export { BackgroundAuth };
