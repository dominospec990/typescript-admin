import { MainLayout } from '../components/Layout';
import { Dashboard } from '../features/misc/routes/Dashboard';
import { Navigate, Outlet } from 'react-router-dom';
import SidebarLayout from '../components/Layout/Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Team from '../features/team/routes';

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
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
