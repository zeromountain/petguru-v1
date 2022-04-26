import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/common/Layout';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import MyPage from './pages/MyPage';
import PostsPage from './pages/PostsPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path='mypage' element={<MyPage />} />
        <Route path='posts' element={<PostsPage />}>
          <Route path=':postId' element={<DetailPage />} />
          <Route path='new' element={<WritePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
