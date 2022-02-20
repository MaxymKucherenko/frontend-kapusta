import Container from '../../Container';
import s from './BackgroundReport.module.css';

const BackgroundReport = ({ children }) => {
  return (
    <div className={s.wrapper}>
      <div className={s.decorSection}></div>
      <Container>{children}</Container>
      <div className={s.decorImageBottom}></div>
    </div>
  );
};

export { BackgroundReport };
