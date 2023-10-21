import { MainLayout } from 'components/Layout';
import { Dashboard } from 'features/misc/routes/Dashboard';
import { Navigate, Outlet } from 'react-router-dom';
import SidebarLayout from 'components/Layout/Sidebar';
import { ProSidebarProvider } from 'react-pro-sidebar';
import Team from 'features/team/routes/Team';
import Contacts from 'features/contacts/routes/Contacts';
import FormFeature from 'features/form/routes/Form';
import Invoices from 'features/invoices/routes/Invoices';
import { Calendar } from 'features/calendar';
import { FAQ } from 'features/faq';
import { Bar } from 'features/bar/routes';
import { Line } from 'features/line/index';
import { Geography } from 'features/geography';
import { Pie } from '../features/pie';

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
      { path: 'calendar', element: <Calendar /> },
      { path: 'faq', element: <FAQ /> },
      { path: 'bar', element: <Bar /> },
      { path: 'line', element: <Line /> },
      { path: 'geography', element: <Geography /> },
      { path: 'pie', element: <Pie /> },
      { path: '*', element: <Navigate to="." /> },
    ],
  },
];
