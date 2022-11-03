import { useRoutes } from 'react-router-dom';
import { publicRoutes } from './public';
import { protectedRoutes } from './protected';
import { Landing } from '../features/misc';
import React from 'react';

export const AppRoutes = () => {
  let auth = true;
  const commonRoutes = [{ path: '/', element: <Landing /> }];
  const routes = auth ? protectedRoutes : publicRoutes;

  const element = useRoutes([...routes, ...commonRoutes]);

  return <>{element}</>;
};
