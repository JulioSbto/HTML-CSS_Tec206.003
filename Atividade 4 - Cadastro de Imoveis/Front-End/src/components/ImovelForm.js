import React, { useState, useEffect } from 'react';
import { createImovel, updateImovel } from '../api';
import './ImoveisList.css';
import '../components/ImovelForm.css';

const ImovelForm = ({ imovel, onSave }) => {
  const [tipoimoveis, setTipoimoveis] = useState('');
  const [endereco, setEndereco] = useState('');
  const [numeroQuartos, setNumeroQuartos] = useState('');
  const [numeroBanheiros, setNumeroBanheiros] = useState('');

  useEffect(() => {
    if (imovel) {
      setTipoimoveis(imovel.Tipoimoveis);
      setEndereco(imovel.Endereco);
      setNumeroQuartos(imovel.NumeroQuartos);
      setNumeroBanheiros(imovel.NumeroBanheiro);
    } else {
      setTipoimoveis('');
      setEndereco('');
      setNumeroQuartos('');
      setNumeroBanheiros('');
    }
  }, [imovel]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newImovel = {
      Tipoimoveis: tipoimoveis,
      Endereco: endereco,
      NumeroQuartos: parseInt(numeroQuartos),
      NumeroBanheiro: parseInt(numeroBanheiros),
    };

    if (imovel) {
      await updateImovel(imovel.idImoveis, newImovel);
    } else {
      await createImovel(newImovel);
    }

    onSave();
  };

  return React.createElement(
    'form',
    { onSubmit: handleSubmit, className: 'imovel-form' },
    React.createElement('h1', { className: 'form-title' }, 'Cadastro de Imóveis'),
    React.createElement(
      'label',
      null,
      'Tipo de Imóvel',
      React.createElement('input', {
        type: 'text',
        placeholder: 'Digite o tipo de imóvel',
        value: tipoimoveis,
        onChange: (e) => setTipoimoveis(e.target.value),
        required: true
      })
    ),
    React.createElement(
      'label',
      null,
      'Endereço',
      React.createElement('input', {
        type: 'text',
        placeholder: 'Digite o endereço',
        value: endereco,
        onChange: (e) => setEndereco(e.target.value),
        required: true
      })
    ),
    React.createElement(
      'label',
      null,
      'Número de Quartos',
      React.createElement('input', {
        type: 'number',
        placeholder: 'Digite o número de quartos',
        value: numeroQuartos,
        onChange: (e) => setNumeroQuartos(e.target.value),
        required: true
      })
    ),
    React.createElement(
      'label',
      null,
      'Número de Banheiros',
      React.createElement('input', {
        type: 'number',
        placeholder: 'Digite o número de banheiros',
        value: numeroBanheiros,
        onChange: (e) => setNumeroBanheiros(e.target.value),
        required: true
      })
    ),
    React.createElement('button', { type: 'submit' }, 'Salvar')
  );
};

export default ImovelForm;
