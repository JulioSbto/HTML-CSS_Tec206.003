import React from 'react';
import './ImoveisList.css';

const ImoveisList = ({ imoveis, onSelect }) => {
  return (
    <div className="imoveis-list-container">
      <h2>Lista de Imóveis</h2>
      <table className="imoveis-table">
        <thead>
          <tr>
            <th>Tipo</th>
            <th>Endereço</th>
            <th>Quartos</th>
            <th>Banheiros</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {imoveis.length > 0 ? (
            imoveis.map((imovel, index) => (
              <tr key={index}>
                <td>{imovel.Tipoimoveis}</td>
                <td>{imovel.Endereco}</td>
                <td>{imovel.NumeroQuartos}</td>
                <td>{imovel.NumeroBanheiro}</td>
                <td>
                  <button onClick={() => onSelect(imovel)}>Editar</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Nenhum imóvel cadastrado.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
};

export default ImoveisList;
