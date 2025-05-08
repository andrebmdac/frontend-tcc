import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';
import { jwtDecode } from 'jwt-decode';

export default function Login() {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const login = async () => {
    
    setLoading(true);
    try {
      const res = await api.post('/login', { email, senha });
      const { token } = res.data;
      const decoded = jwtDecode(token);
      localStorage.setItem('token', token);

      if (decoded.perfil === 'AL') navigate('/aluno');
      else navigate('/relatorios');
    } catch (e) {
      alert('Login inválido!');
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl mb-6">Login</h1>
      <input
        className="mb-2 p-2 border w-64"
        placeholder="Email"
        value={email}
        onChange={e => setEmail(e.target.value)}
      />
      <input
        className="mb-4 p-2 border w-64"
        type="password"
        placeholder="Senha"
        value={senha}
        onChange={e => setSenha(e.target.value)}
      />
      <button
        className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-64"
        onClick={login}
        disabled={loading}
      >
        {loading ? 'Entrando...' : 'Entrar'}
      </button>
      <button
        className="bg-gray-300 text-gray-800 px-4 py-2 rounded w-64"
        onClick={() => navigate('/cadastro')}
      >
        Cadastre-se
      </button>
    </div>
  );
}
