import React, { useState, useEffect } from 'react';
import { Form, Input, Button, message, Card } from 'antd';
import { useParams, useNavigate } from 'react-router-dom';
import { getClient, addClient, updateClient } from '../api';

const ClientForm = () => {
    const [form] = Form.useForm();
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        if (id) {
            fetchClient(id);
        }
    }, [id]);

    const fetchClient = async (clientId) => {
        try {
            const data = await getClient(clientId);
            form.setFieldsValue(data);
        } catch (error) {
            message.error('Error al cargar los datos del cliente');
        }
    };

    const onFinish = async (values) => {
        setLoading(true);
        try {
            if (id) {
                console.log(id, values)
                await updateClient(id, values);
                message.success('Cliente actualizado con éxito');
            } else {
                await addClient(values);
                message.success('Cliente agregado con éxito');
            }
            navigate('/');
        } catch (error) {
            message.error('Error al guardar el cliente');
        } finally {
            setLoading(false);
        }
    };

    return (
        <Card title={id ? 'Editar Cliente' : 'Agregar Cliente'} style={{ maxWidth: 600, margin: '0 auto' }}>
            <Form
                form={form}
                onFinish={onFinish}
                layout="vertical"
                initialValues={{
                    nombre: '',
                    apellido: '',
                    direccion: '',
                    email: '',
                    telefono: '',
                    cuil: ''
                }}
            >
                <Form.Item
                    name="nombre"
                    label="Nombre"
                    rules={[{ required: true, message: 'Por favor ingrese el nombre' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="apellido"
                    label="Apellido"
                    rules={[{ required: true, message: 'Por favor ingrese el apellido' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="direccion"
                    label="Dirección"
                    rules={[{ required: true, message: 'Por favor ingrese la dirección' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        { required: true, message: 'Por favor ingrese el email' },
                        { type: 'email', message: 'Por favor ingrese un email válido' }
                    ]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="telefono"
                    label="Teléfono"
                    rules={[{ required: true, message: 'Por favor ingrese el teléfono' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item
                    name="cuil"
                    label="CUIL"
                    rules={[{ required: true, message: 'Por favor ingrese el CUIL' }]}
                >
                    <Input />
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit" loading={loading}>
                        {id ? 'Actualizar' : 'Agregar'}
                    </Button>
                    <Button style={{ marginLeft: 8 }} onClick={() => navigate('/')}>
                        Cancelar
                    </Button>
                </Form.Item>
            </Form>
        </Card>
    );
};

export default ClientForm;

