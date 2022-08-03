import ProtectedRoutes from './protected-routes/ProtectedRoutes';
import PublicRoutes from './public-routes/PublicRoutes';

export default function AuthProvider() {
  const cookie = localStorage.getItem('Bookazikos-token');
  const isLoggedIn = cookie !== null;
  console.log(isLoggedIn);
  return (
    isLoggedIn ===true ? <ProtectedRoutes/> : <PublicRoutes/>
  );
}
