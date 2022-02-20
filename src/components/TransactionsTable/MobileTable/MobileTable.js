import { useEffect, useState, useContext } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EllipsisText from 'react-ellipsis-text';

// import { phonebookOperations, phonebookSelectors } from 'Redux/phonebook';
import s from './MobileTable.module.css';
import Modal from '../../../components/Modal';
// import contextProps from 'context/context';

const MobileTable = () => {
  //   const dispatch = useDispatch();
  //   const transactions = useSelector(selectors.getTransactionsPerDay);
  const [modalDel, setModalDel] = useState(false);
  const [transaction, setTransaction] = useState('');

  //   useEffect(() => {
  //     if (date) {
  //       dispatch(transactionsOperations.getTransactionsDay(date));
  //     }
  //   }, [dispatch, date]);

  const handleDeleteClick = transaction => {
    setModalDel(true);
    setTransaction(transaction._id);
  };
  const onDelCancel = () => {
    setTransaction('');
    setModalDel(false);
  };

  const onDelOk = () => {
    setModalDel(false);
    // const transactionToDel = transactions.find(
    //   item => item._id === transaction,
    // );
    // dispatch(transactionsOperations.deleteTransaction(transactionToDel));
    setTransaction('');
  };

  return (
    <>
      {modalDel && (
        <Modal
          modalTitle="Вы действительно хотите удалить эту запись?"
          handleClickRight={onDelCancel}
          handleClickLeft={onDelOk}
          onClose={onDelCancel}
        />
      )}
      <div className={s.tsList__container}>
        <ul>
          {/* {transactions.map(transaction => ( */}
          <li
            className={s.listItem}
            //   key={transaction._id}
          >
            <div className={s.listItem__wrapper}>
              <p className={s.listItem__subCategory}>
                {/* <EllipsisText text={transaction.description} length={'5'} /> */}
                Subway
              </p>
              <div className={s.dateCategory__wrapper}>
                <p className={s.listItem__date}>
                  {/* `${transaction.day}.${transaction.month}.${transaction.year}` */}
                  21.07.2021
                </p>
                <p className={s.listItem__category}>
                  {/* {transaction.category} */}
                  Transport
                </p>
              </div>
            </div>
            <div className={s.listItem__sumWrapper}>
              <p
                className={`${s.listItem__sum}`}
                //   ${type !== 'income' && styles.tdSumExpense}
              >
                {/* {transaction.type === 'income'
                    ? `${transaction.sum}.00 грн.`
                    : `- ${transaction.sum}.00 грн.`} */}
                16.00 uah
              </p>
            </div>

            <button
              className={s.buttonDelMobile}
              onClick={() => handleDeleteClick(transaction)}
            ></button>
          </li>

          {/* // ))} */}
        </ul>
      </div>
    </>
  );
};

export { MobileTable };
