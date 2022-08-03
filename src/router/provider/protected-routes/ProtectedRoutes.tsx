import { Route, Routes } from 'react-router-dom';
import LoginScreen from '../../../screens/Login/LoginScreen';
import RegisterScreen from '../../../screens/Register/RegisterScreen';

export default function ProtectedRoutes(){
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
