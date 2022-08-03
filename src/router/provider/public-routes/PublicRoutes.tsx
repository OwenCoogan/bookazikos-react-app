import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../../../screens/Auth/Login/LoginScreen';
import RegisterScreen from '../../../screens/Auth/Register/RegisterScreen';

export default function PublicRoutes(){
  return (
    <Routes>
      <Route
        path="/login"
        element={<LoginScreen/>}
      />
      <Route
        path="/register"
        element={<RegisterScreen />}
      />
    </Routes>
  )
}
