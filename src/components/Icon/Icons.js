import s from './Icons.module.css';
import icons from './icons.svg';

export default function Icon({ iconName }) {
  return (
    <svg className={s[`${iconName}`]}>
      <use href={`${icons}#${iconName}`} />
    </svg>
  );
}
