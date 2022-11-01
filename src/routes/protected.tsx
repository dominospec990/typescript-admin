import { MainLayout } from '../components/Layout';
import { Dashboard } from '../features/misc/routes/Dashboard';
import { Navigate, Outlet } from 'react-router-dom';
import SidebarLayout from '../components/Layout/Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';

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
      { path: 'team', element: <Dashboard /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
