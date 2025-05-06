import { Link, useNavigate } from 'react-router-dom';
import { getUserFromToken } from '../utils/auth';

export default function Navbar() {
  const user = getUserFromToken();
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  if (!user) return null;

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div>
        <Link to="/" className="text-xl font-bold">Painel</Link>
      </div>
      <div className="flex gap-4">
        {user.perfil === 'AL' ? (
          <>
            <Link to="/aluno" className="hover:underline">Início</Link>
            <Link to="/upload" className="hover:underline">Upload</Link>
          </>
        ) : (
          <>
            <Link to="/relatorios" className="hover:underline">Relatórios</Link>
          </>
        )}
        <button onClick={logout} className="bg-red-500 px-3 py-1 rounded hover:bg-red-600">
          Sair
        </button>
      </div>
    </nav>
  );
}
