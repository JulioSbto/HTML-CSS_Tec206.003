import React, { useState } from 'react';
import ImovelForm from './components/ImovelForm';
import ImoveisList from './components/ImoveisList';


function App() {
  const [imoveis, setImoveis] = useState([]);
  const [selectedImovel, setSelectedImovel] = useState(null);

  const handleSave = (newImovel) => {
    if (selectedImovel) {
      setImoveis((prevImoveis) =>
        prevImoveis.map((imovel) =>
          imovel.id === selectedImovel.id ? newImovel : imovel
        )
      );
    } else {
      setImoveis((prevImoveis) => [
        ...prevImoveis,
        { ...newImovel, id: Date.now() },
      ]);
    }
    setSelectedImovel(null);
  };

  const handleEdit = (imovel) => {
    setSelectedImovel(imovel);
  };

  return (
    <div className="App">
      <div className="container-imovel-form">
        <ImovelForm imovel={selectedImovel} onSave={handleSave} />
      </div>
      <div className="container-imovel-list">
        <ImoveisList imoveis={imoveis} onSelect={handleEdit} />
      </div>
    </div>
  );
}

export default App;
