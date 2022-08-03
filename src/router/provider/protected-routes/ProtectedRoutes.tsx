import { Route, Routes } from 'react-router-dom';
import CreateBandScreen from '../../../screens/Band/CreateBand/CreateBandScreen';
import ShowBandScreen from '../../../screens/Band/ShowBand/ShowBandScreen';
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
      <Route
        path="/band/:bandId"
        element={<ShowBandScreen/>}
      />
    </Routes>
  )
}
