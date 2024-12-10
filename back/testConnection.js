const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function testConnection() {
    try {
        const clients = await prisma.clients.findMany();
        console.log('Conexión exitosa a la base de datos. Clients:', clients);
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error.message);
    } finally {
        await prisma.$disconnect();
    }
}

testConnection();
