import s from './ReportWrapper.module.css';

const ReportWrapper = ({ children }) => {
  return <div className={s.container}>{children}</div>;
};

export default ReportWrapper;
