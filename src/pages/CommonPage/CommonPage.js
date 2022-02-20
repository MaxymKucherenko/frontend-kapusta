import { Fragment } from 'react';
import Media from 'react-media';

import s from './CommonPage.module.css';
import useLocalStorage from '../../hooks/useLocalStorage';

import Container from '../../components/Container';
import SwitchToReport from '../../components/SwitchToReport';
import Balance from '../../components/Balance';
import {
  BackgroundMobile,
  BackgroundReport,
} from '../../components/Background';
import IncomeOutcomeForm from '../../components/IncomeOutcomeForm';
import IncomeOutcomeButtons from '../../components/IncomeOutcomeButtons';
import CommonPageWrapper from '../../components/CommonPageWrapper';
import {
  TransactionsTable,
  MobileTable,
} from '../../components/TransactionsTable';
import ShowDate from '../../components/Date';
import Summary from '../../components/Summary';
import AddTransactionView from '../../views/AddTransactionView';

const CommonPage = () => {
  const [mobileAddView, setMobileAddView] = useLocalStorage(
    'mobileAddView',
    false,
  );

  const showMobileAddView = () => {
    if (!mobileAddView) {
      setMobileAddView(true);
      return;
    }

    setMobileAddView(false);
  };

  const [transactionType, setTransactionType] = useLocalStorage(
    'type',
    'outcome',
  );

  const toggleTransactionType = () => {
    if (transactionType === 'outcome') {
      setTransactionType('income');
      return;
    }

    setTransactionType('outcome');
  };

  return (
    <Media
      queries={{
        small: '(max-width: 767px)',
        medium: '(min-width: 768px) and (max-width: 1279px)',
        large: '(min-width: 1280px)',
      }}
    >
      {matches => (
        <Fragment>
          {matches.small && (
            <>
              {mobileAddView ? (
                <>
                  <AddTransactionView showMobileAddView={showMobileAddView} />
                </>
              ) : (
                <Fragment>
                  <BackgroundMobile>
                    <Container>
                      <CommonPageWrapper>
                        <SwitchToReport />
                        <Balance />
                        <ShowDate />
                        <MobileTable />
                      </CommonPageWrapper>
                    </Container>
                  </BackgroundMobile>
                  <IncomeOutcomeButtons
                    toggleTransactionType={toggleTransactionType}
                    showMobileAddView={showMobileAddView}
                  />
                </Fragment>
              )}
            </>
          )}
          {matches.medium && (
            <BackgroundReport>
              <CommonPageWrapper>
                <div className={s.balanceReportWrapper}>
                  <Balance />
                  <SwitchToReport />
                </div>
                <IncomeOutcomeButtons
                  toggleTransactionType={toggleTransactionType}
                  transactionType={transactionType}
                />
                <div className={s.bigWrapper}>
                  <div className={s.dateFormWrapper}>
                    <ShowDate />
                    <IncomeOutcomeForm transactionType={transactionType} />
                  </div>
                  <TransactionsTable />
                </div>
                <Summary />
              </CommonPageWrapper>
            </BackgroundReport>
          )}
          {matches.large && (
            <BackgroundReport>
              <CommonPageWrapper>
                <div className={s.balanceReportWrapper}>
                  <Balance />
                  <SwitchToReport />
                </div>
                <IncomeOutcomeButtons
                  toggleTransactionType={toggleTransactionType}
                  transactionType={transactionType}
                />
                <div className={s.bigWrapper}>
                  <div className={s.dateFormWrapper}>
                    <ShowDate />
                    <IncomeOutcomeForm transactionType={transactionType} />
                  </div>
                  <div className={s.tableSummaryWrapper}>
                    <TransactionsTable />
                    <Summary />
                  </div>
                </div>
              </CommonPageWrapper>
            </BackgroundReport>
          )}
        </Fragment>
      )}
    </Media>
  );
};

export default CommonPage;
