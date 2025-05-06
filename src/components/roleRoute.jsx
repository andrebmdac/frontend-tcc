import { Navigate } from 'react-router-dom';
import { getUserFromToken } from '../utils/auth';

export default function RoleRoute({ children, perfil }) {
  const user = getUserFromToken();

  if (!user) return <Navigate to="/login" />;
  if (user.perfil !== perfil) return <Navigate to="/" />;

  return children;
}
