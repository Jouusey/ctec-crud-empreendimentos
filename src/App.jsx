import { useState } from 'react';

function App() {
  const [empreendimentos, setEmpreendimentos] = useState([]);
  const [formData, setFormData] = useState({
    nomeEmpreendimento: '', responsavel: '', municipio: '',
    segmento: 'Tecnologia', email: '', status: 'Ativo'
  });

  const [editandoId, setEditandoId] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (editandoId) {
      const listaAtualizada = empreendimentos.map((emp) =>
        emp.id === editandoId ? { ...formData, id: editandoId } : emp
      );
      setEmpreendimentos(listaAtualizada);
      setEditandoId(null); // Sai do modo de edição
    } else {
      const novoEmpreendimento = { ...formData, id: crypto.randomUUID() };
      setEmpreendimentos([...empreendimentos, novoEmpreendimento]);
    }

    setFormData({
      nomeEmpreendimento: '', responsavel: '', municipio: '',
      segmento: 'Tecnologia', email: '', status: 'Ativo'
    });
  };

  const handleEdit = (emp) => {
    setFormData(emp); 
    setEditandoId(emp.id); 
  };

  const handleDelete = (id) => {
    if (window.confirm('Tem certeza que deseja excluir este registro?')) {
      setEmpreendimentos(empreendimentos.filter((emp) => emp.id !== id));
    }
  };

  return (
    <div className="p-8 bg-gray-100 min-h-screen font-sans text-gray-800">
      <h1 className="text-3xl font-bold text-blue-700 mb-8 text-center">SCTEC - Gestão de Empreendimentos SC</h1>
      
      <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
        
       
        <div className="bg-white p-6 rounded shadow-md h-fit">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">
            {editandoId ? 'Editar Empreendimento' : 'Novo Cadastro'}
          </h2>
          
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div>
              <label className="block text-sm font-medium mb-1">Nome *</label>
              <input type="text" name="nomeEmpreendimento" value={formData.nomeEmpreendimento} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Responsável *</label>
              <input type="text" name="responsavel" value={formData.responsavel} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Município *</label>
              <input type="text" name="municipio" value={formData.municipio} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Segmento *</label>
              <select name="segmento" value={formData.segmento} onChange={handleChange} className="w-full border rounded p-2">
                <option value="Tecnologia">Tecnologia</option>
                <option value="Comércio">Comércio</option>
                <option value="Indústria">Indústria</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">E-mail *</label>
              <input type="email" name="email" value={formData.email} onChange={handleChange} required className="w-full border rounded p-2" />
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Status *</label>
              <select name="status" value={formData.status} onChange={handleChange} className="w-full border rounded p-2">
                <option value="Ativo">Ativo</option>
                <option value="Inativo">Inativo</option>
              </select>
            </div>
            
            <div className="flex gap-2 mt-4">
              <button type="submit" className="flex-1 bg-blue-600 text-white font-bold py-2 rounded hover:bg-blue-700">
                {editandoId ? 'Atualizar Dados' : 'Cadastrar'}
              </button>
              
              {editandoId && (
                <button 
                  type="button" 
                  onClick={() => {
                    setEditandoId(null);
                    setFormData({ nomeEmpreendimento: '', responsavel: '', municipio: '', segmento: 'Tecnologia', email: '', status: 'Ativo' });
                  }} 
                  className="flex-1 bg-gray-300 text-gray-800 font-bold py-2 rounded hover:bg-gray-400"
                >
                  Cancelar
                </button>
              )}
            </div>
          </form>
        </div>

        <div className="bg-white p-6 rounded shadow-md">
          <h2 className="text-xl font-bold mb-4 border-b pb-2">Empreendimentos Cadastrados ({empreendimentos.length})</h2>
          
          {empreendimentos.length === 0 ? (
            <p className="text-gray-500 text-center mt-10">Nenhum empreendimento cadastrado ainda.</p>
          ) : (
            <div className="flex flex-col gap-4">
              {empreendimentos.map((emp) => (
                <div key={emp.id} className="border p-4 rounded-lg bg-gray-50 flex flex-col sm:flex-row justify-between items-start sm:items-center">
                  <div>
                    <h3 className="font-bold text-lg text-blue-800">{emp.nomeEmpreendimento}</h3>
                    <p className="text-sm text-gray-600">👤 {emp.responsavel} | 📍 {emp.municipio}</p>
                    <p className="text-sm text-gray-600">💼 {emp.segmento} | ✉️ {emp.email}</p>
                    <span className={`inline-block mt-2 px-2 py-1 text-xs font-semibold rounded-full ${emp.status === 'Ativo' ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'}`}>
                      {emp.status}
                    </span>
                  </div>

                  <div className="mt-4 sm:mt-0 flex gap-2">
                    
                    <button onClick={() => handleEdit(emp)} className="text-sm bg-yellow-100 text-yellow-800 px-3 py-1 rounded hover:bg-yellow-200 font-medium">
                      Editar
                    </button>
                    <button onClick={() => handleDelete(emp.id)} className="text-sm bg-red-100 text-red-800 px-3 py-1 rounded hover:bg-red-200 font-medium">
                      Excluir
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

      </div>
    </div>
  );
}

export default App;