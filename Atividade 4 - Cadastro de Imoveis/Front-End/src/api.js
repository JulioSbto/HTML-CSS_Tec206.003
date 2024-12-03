import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5142',
});

export const getImoveis = async () => {
  try {
    const response = await api.get('/imoveis');
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar imóveis:', error);
    throw error;
  }
};

export const getImovelById = async (id) => {
  try {
    const response = await api.get(`/imoveis/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao buscar imóvel por ID:', error);
    throw error;
  }
};

export const createImovel = async (imovel) => {
  try {
    const response = await api.post('/imoveis', imovel);
    return response.data;
  } catch (error) {
    console.error('Erro ao criar imóvel:', error);
    throw error;
  }
};

export const updateImovel = async (id, imovel) => {
  try {
    const response = await api.put(`/imoveis/${id}`, imovel);
    return response.data;
  } catch (error) {
    console.error('Erro ao atualizar imóvel:', error);
    throw error;
  }
};

export const deleteImovel = async (id) => {
  try {
    const response = await api.delete(`/imoveis/${id}`);
    return response.data;
  } catch (error) {
    console.error('Erro ao deletar imóvel:', error);
    throw error;
  }
};
