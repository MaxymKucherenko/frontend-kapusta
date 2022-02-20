import s from './DateField.module.css';

const DateField = ({ thisYear, thisMonth }) => {
  const months = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  return (
    <p className={s.decription}>
      {months[thisMonth]} {thisYear}
    </p>
  );
};

export default DateField;
