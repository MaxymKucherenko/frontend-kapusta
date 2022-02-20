import s from './Notification.module.css';

const Notification = ({ onClose }) => {
  const handleClickWindow = e => {
    if (e.currentTarget === e.target) {
      onClose();
    }
  };

  return (
    <div className={s.commentBubble} onClick={handleClickWindow}>
      Привет! Для начала работы внеси текущий баланс своего счета!
      <p className={s.bubbleText}>
        Ты не можешь тратить деньги пока их у тебя нет :)
      </p>
    </div>
  );
};

export default Notification;
