import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Layout from './components/common/Layout';
import DetailPage from './pages/DetailPage';
import HomePage from './pages/HomePage';
import JoinPage from './pages/JoinPage';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import PostsPage from './pages/PostsPage';
import WritePage from './pages/WritePage';

function App() {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<LandingPage />} />
        <Route path='login' element={<LoginPage />} />
        <Route path='join' element={<JoinPage />} />
        <Route path='home' element={<HomePage />} />
        <Route path='posts' element={<PostsPage />}>
          <Route path=':postId' element={<DetailPage />} />
          <Route path='new' element={<WritePage />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
