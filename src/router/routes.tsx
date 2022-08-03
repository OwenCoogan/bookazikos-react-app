import Dashboard from '../screens/Dashboard';
import SettingsPage from '../screens/Settings/SettingsPage';

const routes = [
  {
    path: "/",
    exact: true,
  },
  {
    path: "/dashboard",
    exact: true,
    component: <Dashboard />,
  },
  {
    path: "/settings",
    exact: true,
    component: <SettingsPage />,
  }
];

export default routes;
