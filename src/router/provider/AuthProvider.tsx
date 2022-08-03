import ProtectedRoutes from './protected-routes/ProtectedRoutes';
import PublicRoutes from './public-routes/PublicRoutes';

export default function AuthProvider() {
  const isAuthenticated = false
  return (
    isAuthenticated !== false ? <ProtectedRoutes/> : <PublicRoutes/>
  );
}
