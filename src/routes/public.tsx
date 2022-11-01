import { AuthRoutes } from '../features/auth';
export const publicRoutes = [
  {
    path: '/auth/*',
    element: <AuthRoutes />,
  },
];
