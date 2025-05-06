import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../../api/axios';
import Navbar from '../../../components/navbar';

export default function ProfessorRelatorios() {
  const [relatorios, setRelatorios] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    api.get('/relatorios/').then(res => setRelatorios(res.data));
  }, []);

  return (
    <>
    <Navbar />
    
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Relatórios</h1>
      <table className="w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th>ID</th>
            <th>Nome</th>
            <th>Email</th>
            <th>Data</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {relatorios.map(rel => (
            <tr key={rel.id} className="text-center border-b h-12">
              <td>{rel.id}</td>
              <td>{rel.nome}</td>
              <td>{rel.email}</td>
              <td>{new Date(rel.data).toLocaleString()}</td>
              <td>
                <button
                  className="bg-blue-500 text-white px-3 py-1 rounded"
                  onClick={() => navigate(`/relatorio/${rel.id}`)}
                >
                  Ver detalhes
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

    </>
  );
}
