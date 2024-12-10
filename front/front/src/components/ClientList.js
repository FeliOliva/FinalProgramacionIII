import React, { useState, useEffect } from 'react';
import { Table, Space, Button, message } from 'antd';
import { EditOutlined, PlusOutlined } from '@ant-design/icons';
import { useNavigate } from 'react-router-dom';
import { getClients, deleteClient, activateClient } from '../api';

const ClientList = () => {
    const [clients, setClients] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalClients, setTotalClients] = useState(0);
    const [pageSize, setPageSize] = useState(3);
    const navigate = useNavigate();

    useEffect(() => {
        fetchClients(currentPage, pageSize);
    }, [currentPage, pageSize]);

    const fetchClients = async (page = 1, limit = 3) => {
        try {
            const data = await getClients(page, limit);
            setClients(data.clients);
            setTotalClients(data.total);
        } catch (error) {
            message.error('Error al cargar los clientes');
        } finally {
            setLoading(false);
        }
    };

    const handleToggleState = async (id, currentState) => {
        try {
            if (currentState === 1) {
                await deleteClient(id);
                message.success('Cliente desactivado con éxito');
            } else if (currentState === 0) {
                await activateClient(id);
                message.success('Cliente activado con éxito');
            }
            fetchClients(currentPage, pageSize);
        } catch (error) {
            message.error(`Error al ${currentState === 1 ? 'desactivar' : 'activar'} el cliente`);
        }
    };


    const columns = [
        {
            title: 'Nombre',
            dataIndex: 'nombre',
            key: 'nombre',
        },
        {
            title: 'Apellido',
            dataIndex: 'apellido',
            key: 'apellido',
        },
        {
            title: 'Email',
            dataIndex: 'email',
            key: 'email',
        },
        {
            title: 'Teléfono',
            dataIndex: 'telefono',
            key: 'telefono',
        },
        {
            title: 'Acciones',
            key: 'acciones',
            render: (_, record) => (
                <Space size="middle">
                    <Button
                        type="link"
                        icon={<EditOutlined />}
                        onClick={() => navigate(`/edit/${record.id}`)}
                    >
                        Editar
                    </Button>
                    <Button
                        type="link"
                        danger={record.estado === 1} // Rojo si está activo
                        onClick={() => handleToggleState(record.id, record.estado)}
                    >
                        {record.estado === 1 ? 'Desactivar' : 'Activar'}
                    </Button>
                </Space>
            ),
        },
    ];

    return (
        <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <h1>Lista de Clientes</h1>
                <Button type="primary" icon={<PlusOutlined />} onClick={() => navigate('/add')}>
                    Agregar Cliente
                </Button>
            </div>
            <Table
                columns={columns}
                dataSource={clients}
                loading={loading}
                rowKey="id"
                pagination={{
                    current: currentPage,
                    pageSize: pageSize,
                    total: totalClients,
                    onChange: (page, pageSize) => {
                        setCurrentPage(page);
                        setPageSize(pageSize);
                    },
                }}
            />
        </div>
    );
};

export default ClientList;
