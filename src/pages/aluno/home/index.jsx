import Navbar from '../../../components/navbar';

export default function AlunoHome() {
  function copiarLinkComInternet() {
    navigator.clipboard.writeText(process.env.REACT_APP_URL_COM_INTERNET)
      .then(() => {
        alert(`Link ${process.env.REACT_APP_URL_COM_INTERNET} copiado com sucesso!`); // Mostra o toast depois de copiar com sucesso
      })
      .catch((err) => {
        console.error('Erro ao copiar o link: ', err);
      });
  }

  function copiarLinkSemInternet() {
    navigator.clipboard.writeText(process.env.REACT_APP_URL_SEM_INTERNET)
      .then(() => {
        alert(`Link ${process.env.REACT_APP_URL_SEM_INTERNET} copiado com sucesso!`); // Mostra o toast depois de copiar com sucesso
      })
      .catch((err) => {
        console.error('Erro ao copiar o link: ', err);
      });
  }

  return (
    <>
      <Navbar />
       <body class="bg-white">
          <div class="relative isolate overflow-hidden bg-gray-100 py-24 sm:py-32">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
              <div class="mx-auto max-w-7xl lg:mx-0 text-center">
                <h2 class="text-5xl font-semibold tracking-tight text-gray-600 sm:text-7xl">Ola, Estudante!</h2>
                <p class="mt-8 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Aqui, voce podera escolher uma versao do GPT personalizado.</p>
                <p class="mt-2 text-lg font-medium text-pretty text-gray-600 sm:text-xl/8">Escolha entre as versoes COM e SEM acesso a Internet.</p>
              </div>
              <div class="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
                <dl class="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-2">
                  <div class="flex flex-col gap-1 text-center border-1 border-gray-600 rounded-md p-4 bg-gray-200">
                    <dt class="text-base/7 text-gray-600 font-medium text-pretty">Versao COM acesso a internet</dt>
                    <div>
                      <button className="border px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium text-pretty"
                        onClick={() => copiarLinkComInternet(`COM internet`)}
                      >Copiar LINK</button>
                    </div>
                  </div>
                  <div class="flex flex-col gap-1 text-center border-1 border-gray-600 rounded-md p-4 bg-gray-200">
                    <dt class="text-base/7 text-gray-600 font-medium text-pretty">Versao SEM acesso a internet</dt>
                    <div>
                      <button className="border px-4 py-2 rounded-md bg-blue-500 hover:bg-blue-600 text-white font-medium text-pretty"
                        onClick={() => copiarLinkSemInternet(`SEM internet`)}
                      >Copiar LINK</button>
                    </div>
                  </div>
                </dl>
              </div>
            </div>
          </div>
        </body>
    </>
  );
}
