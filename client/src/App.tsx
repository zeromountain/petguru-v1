import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/common/Layout';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <Routes>
      <Route path='/*' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='mypage' element={<MyPage />} />
        <Route path='posts'>
          <Route path=':postid' element={<DetailPage />} />
        </Route>
        <Route path='new' element={<WritePage />} />
      </Route>
    </Routes>
  );
}

export default App;
