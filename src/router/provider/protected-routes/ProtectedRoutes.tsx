import { Route, Routes } from 'react-router-dom';
import Dashboard from '../../../screens/Dashboard/Dashboard';

export default function ProtectedRoutes(){
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<Dashboard/>}
      />
    </Routes>
  )
}
