import React, { useEffect, useState } from 'react';
import { getImoveis } from '../api';
import './ImoveisList.css'; 

const ImoveisList = ({ onSelect }) => {
  const [imoveis, setImoveis] = useState([]);

  useEffect(() => {
    const fetchImoveis = async () => {
      try {
        const data = await getImoveis();
        setImoveis(data);
      } catch (error) {
        console.error('Erro ao buscar imóveis:', error);
      }
    };

    fetchImoveis();
  }, []);

  return (
    <div>
      <h2>Lista de Imóveis</h2>
      <ul>
        {imoveis.map((imovel) => (
          <li key={imovel.idImoveis}>
            {imovel.Tipoimoveis} - {imovel.Endereco}
            <button onClick={() => onSelect(imovel)}>Editar</button>
            <button onClick={() => console.log('Excluir', imovel.idImoveis)}>Excluir</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ImoveisList;
