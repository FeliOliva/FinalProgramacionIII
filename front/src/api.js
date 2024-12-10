import axios from 'axios';
console.log('API Base URL:', process.env.REACT_APP_API_URL);

const api = axios.create({
    baseURL: process.env.REACT_APP_API_URL,
});

export const getClients = async (page = 1, limit = 3) => {
    console.log('Fetching clients:', { page, limit }); // Para depuración
    const response = await api.get(`/clientes?page=${page}&limit=${limit}`);
    console.log(response.data);
    return response.data;
};

export const getClient = async (id) => {
    const response = await api.get(`/clientes/${id}`);
    return response.data;
};

export const addClient = async (client) => {
    const response = await api.post('/clientes', client);
    return response.data;
};

export const updateClient = async (id, client) => {
    const response = await api.put(`/clientes`, { ...client, id });
    return response.data;
};

export const deleteClient = async (id) => {
    const response = await api.delete(`/clientes/${id}`);
    return response.data;
};

export const activateClient = async (id) => {
    const response = await api.post(`/clientes/${id}`);
    return response.data;
};

