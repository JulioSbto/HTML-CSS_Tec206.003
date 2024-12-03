import React, { useState } from 'react';
import '../src/App.css'
import ImoveisList from './components/ImoveisList';
import ImovelForm from './components/ImovelForm';

function App() {
  const [selectedImovel, setSelectedImovel] = useState(null);

  const handleSave = () => {
    setSelectedImovel(null);
  };

  return (
    <>
      <h1 className="title">Cadastro de Imóveis</h1> {}
      <div className="container">
        <div className="form-group">
          <label htmlFor="tipoImovel">Tipo de imóvel</label>
          <input id="tipoImovel" type="text" placeholder="Digite o tipo de imóvel" />
        </div>
        <div className="form-group">
          <label htmlFor="endereco">Endereço</label>
          <input id="endereco" type="text" placeholder="Digite o endereço" />
        </div>
        <div className="form-group">
          <label htmlFor="numeroQuartos">Número de quartos</label>
          <input id="numeroQuartos" type="number" placeholder="Digite o número de quartos" />
        </div>
        <div className="form-group">
          <label htmlFor="numeroBanheiros">Número de banheiros</label>
          <input id="numeroBanheiros" type="number" placeholder="Digite o número de banheiros" />
        </div>
        <button onClick={handleSave}>Salvar</button> {}
      </div>
    </>
  );
}

export default App;