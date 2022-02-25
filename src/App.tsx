import * as React from 'react';
import { FC } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Screen from './styles/screen';
const App: FC = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Screen />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
