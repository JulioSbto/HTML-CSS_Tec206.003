import React, { useState, useEffect } from 'react';
import { createImovel, updateImovel } from '../api';

const ImovelForm = ({ imovel, onSave }) => {
  const [tipoimoveis, setTipoimoveis] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numeroQuartos, setNumeroQuartos] = useState('');
  const [numeroBanheiro, setNumeroBanheiro] = useState('');

  useEffect(() => {
    if (imovel) {
      setTipoimoveis(imovel.Tipoimoveis);
      setEndereco(imovel.Endereco);
      setNumeroQuartos(imovel.NumeroQuartos);
      setNumeroBanheiro(imovel.NumeroBanheiro);
    }
  }, [imovel]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newImovel = { Tipoimoveis: tipoimoveis, Endereco: endereco, NumeroQuartos: parseInt(numeroQuartos), NumeroBanheiro: parseInt(numeroBanheiro) };

    if (imovel) {
      await updateImovel(imovel.idImoveis, newImovel);
    } else {
      await createImovel(newImovel);
    }

    onSave();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Tipo de Imóvel</label>
        <input type="text" value={tipoimoveis} onChange={(e) => setTipoimoveis(e.target.value)} required />
      </div>
      <div>
        <label>Endereço</label>
        <input type="text" value={endereco} onChange={(e) => setEndereco(e.target.value)} required />
      </div>
      <div>
        <label>Número de Quartos</label>
        <input type="number" value={numeroQuartos} onChange={(e) => setNumeroQuartos(e.target.value)} required />
      </div>
      <div>
        <label>Número de Banheiros</label>
        <input type="number" value={numeroBanheiro} onChange={(e) => setNumeroBanheiro(e.target.value)} required />
      </div>
      <button type="submit">Salvar</button>
    </form>
  );
};

export default ImovelForm;
