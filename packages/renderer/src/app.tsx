import React from 'react';
import {Routes, Route} from 'react-router-dom';

import './app.css';
import MainPage from './pages/Main';
import LoginPage from './pages/Login';
import SettingPage from './pages/Setting';
const App: React.FC = () => {
  return (
    <div className="app">
      <Routes>
        <Route
          index
          element={<MainPage />}
        />

        <Route
          path="/login"
          element={<LoginPage />}
        />
        <Route
          path="/setting"
          element={<SettingPage />}
        />
        <Route
          path="*"
          element={'Error 404, What r u doing here?'}
        />
      </Routes>
    </div>
  );
};
export default App;
