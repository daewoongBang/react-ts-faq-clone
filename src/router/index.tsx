import { createBrowserRouter, Navigate } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import Faq from '@/pages/Faq';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Navigate to='/faq' />,
      },
      {
        path: 'faq',
        element: <Faq />,
      },
    ],
  },
]);

export default router;
