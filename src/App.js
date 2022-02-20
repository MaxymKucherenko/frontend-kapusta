import React, { lazy, Suspense, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import AppBar from './components/AppBar/AppBar';
import { PrivetRoute, RedirectRoute } from './helpers/Routes';
import { authSelectors, authOperations } from './redux/auth';

const AuthView = lazy(() =>
  import('./pages/HomePage' /* webpackChunkName: "authentication-page" */),
);

const MainView = lazy(() =>
  import('./pages/CommonPage' /* webpackChunkName: "main-page" */),
);

const ReportView = lazy(() =>
  import('./pages/ReportPage' /* webpackChunkName: "report-page" */),
);

function App() {
  const dispatch = useDispatch();

  const token = useSelector(authSelectors.getToken);

  useEffect(() => {
    if (token) {
      dispatch(authOperations.fetchCurrentUser());
    }
  }, [dispatch, token]);

  return (
    <>
      <AppBar />
      <Suspense fallback={'Loading...'}>
        <Routes>
          <Route
            path="/"
            element={
              <PrivetRoute>
                <MainView />
              </PrivetRoute>
            }
          />
          <Route
            path="/auth"
            element={
              <RedirectRoute>
                <AuthView />
              </RedirectRoute>
            }
          />
          <Route path="/report" element={<ReportView />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
