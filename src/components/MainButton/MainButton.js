import s from './MainButton.module.css';

export default function MainButton({ type, action, title }) {
  return (
    <button className={s.Button} type={type} onClick={action} title={title}>
      {`${title}`}
    </button>
  );
}
