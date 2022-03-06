import * as React from 'react';
import { FC, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import liff from '@line/liff';
import Screen from './styles/screen';
const App: FC = () => {
  useEffect(() => {
    liff.ready.then(() => {
      liff
        .init({ liffId: process.env.REACT_APP_LIFF_ID as string })
        .then(() => {
          if (!liff.isLoggedIn()) {
            liff.login();
          }
        });
    });
  }, []);
  return (
    <div>
      <Router basename={process.env.PUBLIC_URL}>
        <Routes>
          <Route element={<Screen />} />
          <Route path="/" element={<Screen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
