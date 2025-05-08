import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import api from '../../../../api/axios';
import Navbar from '../../../../components/navbar';

export default function RelatorioDetalhes() {
  const { id } = useParams();
  const [relatorio, setRelatorio] = useState(null);

  useEffect(() => {
    api.get(`/relatorio/${id}`).then(res => setRelatorio(res.data));
  }, [id]);

  const descriptions = [
    "Proficiencia com Codigo",
    "Proficiencia com a linguagem",
    "Proficiencia com boas praticas de programacao",
    "Conhecimento do conteudo",
    "Independencia do tutor",
  ]

  return relatorio ? (
    <>
      <Navbar />
      <div className="p-8">
        <h1 className="text-3xl font-bold mb-4">Detalhes do Relatório #{relatorio?.[0]?.id}</h1>
        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mb-4">
            <p className='border-t pt-4 font-semibold'>{[i] + ") " +descriptions[i-1]}</p>
            <strong className='mr-4'>Nota {i}:</strong> {relatorio?.[0]?.[`nota${i}`]} <br />
            <strong className='mr-4'>Descrição:</strong> {relatorio?.[0]?.[`desc${i}`]}
          </div>
        ))}
      </div>
      <div className='p-8 border-t flex'>
        <strong className='mr-4 text-2xl'>Nota Media:</strong>
        <p className='text-xl mt-1'>
          12
        </p>
        <br />
      </div>
    </>
  ) : (
    <>
      <Navbar />
      <p className="p-6">Carregando...</p>
    </>
  );
}
