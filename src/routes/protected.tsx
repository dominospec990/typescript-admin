import { MainLayout } from 'components/Layout';
import { Dashboard } from '../features/misc/routes/Dashboard';
import { Navigate, Outlet } from 'react-router-dom';
import SidebarLayout from '../components/Layout/Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Team from '../features/team/routes/Team';
import Contacts from '../features/contacts/routes/Contacts';
import FormFeature from '../features/form/routes/Form';
import Invoices from '../features/invoices/routes/Invoices';
import React from 'react';

const App = () => {
  return (
    <ProSidebarProvider>
      <SidebarLayout />
      <MainLayout>
        <Outlet />
      </MainLayout>
    </ProSidebarProvider>
  );
};

export const protectedRoutes = [
  {
    path: '/app/',
    element: <App />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: 'team', element: <Team /> },
      { path: 'contacts', element: <Contacts /> },
      { path: 'invoices', element: <Invoices /> },
      { path: 'form', element: <FormFeature /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
