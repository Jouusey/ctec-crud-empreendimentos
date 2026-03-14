import { useState } from "react";


function App() {

  const [formData, setFormData] = useState({
    nomeEmpreendimento: '',
    responsavel: '',
    municipio: '',
    segmento: 'Tecnologia',
    email: '',
    status: 'ativo'



  })


  return (
    <div className="p-8 bg-gray-100 min-h-screen font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        SCTEC - Gestão de Empreendimentos SC
      </h1>
      
     <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        {/* Só para testar, vamos mostrar na tela o que tem no estado */}
        <p className="text-sm text-gray-500 mb-4">
          Testando o Estado:<br/>
          Nome atual: <strong>{formData.nomeEmpreendimento}</strong>
        </p>
        
        {/* Aqui vamos colocar o input de verdade na próxima etapa */}
      </div>
    </div>
  );
}

export default App;