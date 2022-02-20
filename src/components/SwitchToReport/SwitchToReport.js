import { NavLink } from 'react-router-dom';
import Icons from '../Icon';
import s from './SwitchToReport.module.css';

export default function SwitchToReport() {
  return (
    <div>
      <NavLink to="/report" className={s.linkContainer}>
        <p className={s.text}>Перейти к отчетам</p>
        <Icons iconName="goToReport" />
      </NavLink>
    </div>
  );
}
