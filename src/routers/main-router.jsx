import { createBrowserRouter } from 'react-router-dom';
import Layout from '../components/common/Layout';
import MainPage from '../pages/MainPage';
import LoginPage from '../pages/LoginPage';
import PostPage from '../pages/PostPage';

export const mainRoutes = [
  {
    path: '/',
    element: <Layout />,
    children: [
      { element: <MainPage />, index: true },
      { element: <PostPage />, path: 'post' },
    ],
  },
  {
    path: '/login',
    element: <LoginPage />,
  },
];

const router = createBrowserRouter(mainRoutes);

export default router;
