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

  const handleChange = (e) => {

    const { name, value } = e.target

    setFormData({ ...formData, [name]: value})
  }


  return (
    <div className="p-8 bg-gray-100 min-h-screen font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">
        SCTEC - Gestão de Empreendimentos SC
      </h1>
      
      <div className="max-w-md mx-auto bg-white p-6 rounded shadow-md">
        
        <div className="bg-yellow-50 p-2 text-sm text-yellow-800 mb-4 rounded border border-yellow-200">
          <p>Memória em tempo real:</p>
          <p>Nome: <strong>{formData.nomeEmpreendimento}</strong></p>
          <p>Responsável: <strong>{formData.responsavel}</strong></p>
        </div>

        <form className="flex flex-col gap-4">
          
          <div>
            <label className="block text-sm font-medium mb-1">Nome do Empreendimento *</label>
            <input 
              type="text" 
              name="nomeEmpreendimento" 
              value={formData.nomeEmpreendimento} 
              onChange={handleChange} 
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="Ex: Tech SC" 
            />
          </div>

          <div>
            <label className="block text-sm font-medium mb-1">Empreendedor(a) Responsável *</label>
            <input 
              type="text" 
              name="responsavel" 
              value={formData.responsavel} 
              onChange={handleChange} 
              className="w-full border rounded p-2 focus:ring-2 focus:ring-blue-500 outline-none" 
              placeholder="Ex: Maria Silva" 
            />
          </div>

        </form>
      </div>
    </div>
  );
}

export default App;