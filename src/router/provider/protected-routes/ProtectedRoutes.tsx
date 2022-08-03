import { Route, Routes } from 'react-router-dom';
import CreateBandScreen from '../../../screens/CreateBand/CreateBandScreen';
import Dashboard from '../../../screens/Dashboard/Dashboard';

export default function ProtectedRoutes(){
  return (
    <Routes>
      <Route
        path="/dashboard"
        element={<Dashboard/>}
      />
      <Route
        path="/create-band"
        element={<CreateBandScreen/>}
      />
    </Routes>
  )
}
