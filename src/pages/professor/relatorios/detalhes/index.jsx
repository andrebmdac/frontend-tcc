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
    "Proficiência com Código",
    "Proficiência com a linguagem",
    "Proficiência com boas práticas de programação",
    "Conhecimento do conteúdo",
    "Independência do tutor",
  ]

  const notas = [1, 2, 3, 4, 5].map((i) => Number(relatorio?.[0]?.[`nota${i}`]) || 0);
  const media = notas.reduce((acc, val) => acc + val, 0) / notas.length;

  return relatorio ? (
    <>
      <Navbar />
      <div className="p-8">
        <div className='flex justify-between w-full'>
          <h1 className="text-3xl font-bold mb-4">Detalhes do Relatório #{relatorio?.[0]?.id}</h1>
          <div className='mt-0.5 flex'>
            <strong className='mr-4 text-2xl'>Nota Media:</strong>
            <p className='font-semibold text-xl mt-1'>
              {media}/10
            </p>
            <br />
          </div>
        </div>

        {[1, 2, 3, 4, 5].map((i) => (
          <div key={i} className="mb-4">
            <p className='border-t pt-4 font-semibold'>{[i] + ") " + descriptions[i - 1]}</p>
            <strong className='mr-4'>Nota {i}:</strong> {relatorio?.[0]?.[`nota${i}`]} <br />
            <strong className='mr-4'>Descrição:</strong> {relatorio?.[0]?.[`desc${i}`]}
          </div>
        ))}
      </div>
    </>
  ) : (
    <>
      <Navbar />
      <p className="p-6">Carregando...</p>
    </>
  );
}
