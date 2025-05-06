import { useState } from 'react';
import Navbar from '../../../components/navbar';
import api from '../../../api/axios';

export default function AlunoUpload() {
  const [file, setFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const clearForm = () => {
    setFile(null);
    document.getElementById('fileInput').value = '';
  };

  const sendToAI = async () => {
    if (!file) return alert('Selecione um arquivo primeiro.');

    const reader = new FileReader();
    reader.onload = async (e) => {
      const fileContent = e.target.result;

      const prompt = `Aja como um professor de programacao. Ira ser enviado pra voce um chat que um aluno de programacao teve com um 
      tutor de programacao. E necessario que voce de 5 notas para o aluno, avaliando 5 criterios (que voce observou na interacao do 
      aluno com o tutor). Nota1: Proficiencia com Codigo, Nota2: Proficiencia com a linguagem. Nota3: Proficiencia com boas praticas 
      de programacao. Nota4: Conhecimento do conteudo. Nota5: Independencia do tutor. -> Voce devera dar notas de 1 a 10 para os alunos 
      (apenas valores inteiros), e dar uma breve descricao (sucinto, no maximo 48 caracteres) do porque voce deu cada nota ao aluno. 
      Ex: Nota1: 6 / Descricao1: Motivo blablabla... ,  Nota2: ...). Alem disso, quero um retorno LIMPO, apenas um texto (em formato 
      .json) com o conteudo LIMPO!!! Apenas {Nota1: x, Descricao1: y, Nota2: X ...}\n\nConteúdo:\n${fileContent}`;

      setLoading(true);
      try {
        const res = await api.post('/avaliar-documento', { prompt });
        console.log('🧠 Resposta da IA:', res.data); // ✅ aqui vem { Nota1: ..., Descricao1: ... }
      } catch (err) {
        console.error('Erro ao chamar IA:', err);
        alert('Erro ao processar o arquivo.');
      } finally {
        setLoading(false);
      }
    };

    reader.readAsText(file);
  };

  return (
    <>
      <Navbar />
      <div className="p-10">
        <h1 className="text-2xl mb-4">Upload de Documento</h1>
        <input
          id="fileInput"
          type="file"
          accept=".txt,.json"
          onChange={handleFileChange}
          className="border p-2 mb-4"
        />
        <div className="flex gap-4">
          <button
            className="bg-blue-500 text-white px-4 py-2 rounded"
            onClick={sendToAI}
            disabled={loading}
          >
            {loading ? 'Enviando...' : 'Enviar'}
          </button>
          <button
            className="bg-gray-300 text-black px-4 py-2 rounded"
            onClick={clearForm}
          >
            Limpar
          </button>
        </div>
      </div>
    </>
  );
}
