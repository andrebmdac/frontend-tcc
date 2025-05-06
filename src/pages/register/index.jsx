import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../api/axios';

export default function Register() {
  const [form, setForm] = useState({
    nome: '',
    email: '',
    senha: ''
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const cadastrar = async () => {
    try {
      await api.post('/cadastro', {
        ...form,
        perfil: 'AL'
      });
      alert('Cadastro realizado com sucesso!');
      navigate('/');
    } catch (error) {
      alert(error?.response?.data?.error ?? "Erro ao cadastrar");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-3xl mb-6">Cadastro</h1>

      <input
        className="mb-2 p-2 border w-64"
        placeholder="Nome"
        name="nome"
        value={form.nome}
        onChange={handleChange}
      />

      <input
        className="mb-2 p-2 border w-64"
        placeholder="Email"
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        className="mb-4 p-2 border w-64"
        type="password"
        placeholder="Senha"
        name="senha"
        value={form.senha}
        onChange={handleChange}
      />

      <button
        className="bg-green-500 text-white px-4 py-2 rounded w-64"
        onClick={cadastrar}
      >
        Cadastrar
      </button>

      <button
        className="mt-2 text-sm text-blue-600 hover:underline"
        onClick={() => navigate('/')}
      >
        Já tenho conta
      </button>
    </div>
  );
}
