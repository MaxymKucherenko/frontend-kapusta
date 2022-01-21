import React, { Fragment } from 'react';
import Media from 'react-media';
import s from './CommonPage.module.css';
import Container from '../../components/Container';
import SwitchToReport from '../../components/SwitchToReport';
import Balance from '../../components/Balance';

const CommonPage = () => {
  return (
    <Container>
      <SwitchToReport />
      <Balance />
      {/* <Media
        queries={{
          small: '(max-width: 767px)',
          medium: '(min-width: 768px)',
        }}
      >
        {matches => (
          <Fragment>
            {matches.medium && (
              <>
                <SwitchToReport />
                <Balance />
              </>
            )}
          </Fragment>
        )}
      </Media> */}
    </Container>
  );
};

export default CommonPage;
